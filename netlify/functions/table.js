const cheerio = require('cheerio');
const request = require('request-promise');

exports.handler = async () => {

    const html = await request.get('https://www.premierleague.com/tables');
      const $ = cheerio.load(html);
    let tables = [];
  $('table').eq(0).find('tbody').find('tr').each((index, element) => {
     const position =  $(element).find('.pos .value').text().trim();
     const team_link =  $(element).find('.team a').attr('href');
     const teamAbb = $(element).find('.team .short').text().trim();
     const teamName = $(element).find('.team .long').text().trim();
     const played = $(element).find('td').eq('3').text().trim();
     const won = $(element).find('td').eq('4').text().trim();
     const drawn = $(element).find('td').eq('5').text().trim();
     const lost = $(element).find('td').eq('6').text().trim();
     const points = $(element).find('td.points').text().trim();
     const formAbb = $(element).find('td.form li').map((index2,element2) =>{
        const match_dteails = {};
        match_dteails.form_abbreviation = $(element2).find('.form-abbreviation').text().trim();
        match_dteails.matchInfo =  $(element2).find('.tooltip-content .matchInfo').text().trim();
        match_dteails.homeTeam = $(element2).find('.tooltip-content .teamName').first().text().trim();
        match_dteails.awayTeam =  $(element2).find('.tooltip-content .teamName').last().text().trim();
        match_dteails.score =  $(element2).find('.tooltip-content .score').text().trim();
        return match_dteails;
     }).get();
     
    if (position){
      tables.push({position, team_link, teamAbb, teamName, played, won, drawn, lost, points, formAbb});
   }
    });
	return {
		statusCode: 200,
		body: JSON.stringify({res:tables})
	}
}