const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');
exports.handler = async () => {
  try {

    const html = await request.get('https://www.premierleague.com/tables');
    // fs.writeFileSync('test.html', html)

    // const html = fs.readFileSync('players.html')

    const $ = cheerio.load(html);

    const players = $('table tbody tr').map((index, tr) => {
      return {
        name: $(tr).find('td').eq(0).find('a').text().trim(),
        img: $(tr).find('td').eq(0).find('a img').attr('src'),
        position:  $(tr).find('td').eq(1).text().trim(),
        nationalityImg: $(tr).find('td').eq(2).find('span').eq(0).attr('class'),
        nationality: $(tr).find('td').eq(2).text().trim(),
      };

    }).get();
    return {
      statusCode: 200,
      body: JSON.stringify({ players }),
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