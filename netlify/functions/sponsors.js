const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');
exports.handler = async () => {

    const html = await request.get('https://www.premierleague.com/tables');
    fs.writeFileSync('test.html', html)

    // const html = fs.readFileSync('test.html')
    
    const $ = cheerio.load(html);

    let sopnsors = [];
  $('.footer-sponsors ul.footer-sponsors__sponsors-list li').each((index, li) => {
    
   const sponsorText = $(li).find('.footer-sponsors__sponsor-text').text().trim();
   const sponsorImg = $(li).find('img').attr('src');
    sopnsors.push({sponsorText, sponsorImg});

    });
	return {
		statusCode: 200,
		body: JSON.stringify({res:sopnsors}),
    headers: {
      "Content-Type": "application/json"
    },
	}
}