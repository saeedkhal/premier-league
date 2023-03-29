const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');
exports.handler = async () => {
  try {

    const html = await request.get('https://www.premierleague.com/tables');
    // fs.writeFileSync('test.html', html)

    // const html = fs.readFileSync('test.html')

    const $ = cheerio.load(html);

    const sopnsors = $('.footer-sponsors ul.footer-sponsors__sponsors-list li').map((index, li) => {

      return {
        sponsorText: $(li).find('.footer-sponsors__sponsor-text').text().trim(),
        sponsorImg: $(li).find('img').attr('src')
      };

    }).get();
    return {
      statusCode: 200,
      body: JSON.stringify({ res: sopnsors }),
      headers: {
        "Content-Type": "application/json"
      },
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: 500,
        message: err
      })
    }
  }

}