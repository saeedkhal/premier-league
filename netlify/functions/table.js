const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');
exports.handler = async () => {

    // const html = await request.get('https://www.premierleague.com/tables');
    // fs.writeFileSync('test.html', html)

    const html = fs.readFileSync('test.html')
      const $ = cheerio.load(html);

    let tables = [];
  $('table').eq(0).find('tbody tr').not('.expandable').each((index, tr) => {
    // table col
     const position =  $(tr).find('.pos .value').text().trim();
     const movment =  $(tr).find('.pos .movement').attr('class').split(' ').at(-1);
     console.log(movment)
     const teamLink =  $(tr).find('.team a').attr('href');
     const teamAbb = $(tr).find('.team .short').text().trim();
     const teamName = $(tr).find('.team .long').text().trim();
     const played = $(tr).find('td').eq('3').text().trim();
     const won = $(tr).find('td').eq('4').text().trim();
     const drawn = $(tr).find('td').eq('5').text().trim();
     const lost = $(tr).find('td').eq('6').text().trim();
     const points = $(tr).find('td.points').text().trim();

    //  fomAbb
     const formAbb = $(tr).find('td.form li').map((index2,form) =>{
        const matchDteails = {};
        matchDteails.formAbbreviation = $(form).find('.form-abbreviation').text().trim();
        matchDteails.matchLink =  $(form).find('.tooltip-link').attr('href');
        matchDteails.matchInfo =  $(form).find('.tooltip-content .matchInfo').text().trim();
        matchDteails.homeTeam = $(form).find('.tooltip-content .teamName').first().text().trim();
        matchDteails.awayTeam =  $(form).find('.tooltip-content .teamName').last().text().trim();
        matchDteails.score =  $(form).find('.tooltip-content .score').text().trim();
        matchDteails.homeTeamImg =  $(form).find('.tooltip-content .badge-image').first().attr('src');
        matchDteails.awayTeamImg =  $(form).find('.tooltip-content .badge-image').last().attr('src');
        
        return matchDteails;
     }).get();

// next match
    const nextMatch = {};
    nextMatch.badgeImage = $(tr).find('td.nextMatchCol .badge-image').attr('src');
    nextMatch.matchLink =  $(tr).find('td.nextMatchCol .tooltip-link').attr('href');
    nextMatch.matchInfo =  $(tr).find('td.nextMatchCol .tooltip-content .matchInfo').text().trim();
    nextMatch.time =  $(tr).find('td.nextMatchCol .tooltip-content time').text().trim() || "0-0";
    nextMatch.homeTeamAbbr =  $(tr).find('td.nextMatchCol .tooltip-content .teamName abbr').first().text().trim();
    nextMatch.awayTeamAbbr =  $(tr).find('td.nextMatchCol .tooltip-content .teamName abbr').last().text().trim();
    nextMatch.homeTeam=  $(tr).find('td.nextMatchCol .tooltip-content .teamName abbr').first().attr('title');
    nextMatch.awayTeam =  $(tr).find('td.nextMatchCol .tooltip-content .teamName abbr').last().attr('title');
    
     tables.push({position,movment, teamLink, teamAbb, teamName, played, won, drawn, lost, points, formAbb, nextMatch});

    });
	return {
		statusCode: 200,
		body: JSON.stringify({res:tables}),
    headers: {
      "Content-Type": "application/json"
    },
	}
}