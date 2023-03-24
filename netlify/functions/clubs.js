const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs')

exports.handler = async () => {
    const html = await request.get('https://www.premierleague.com/clubs');
    fs.writeFileSync('test.html', html)

    // const html = fs.readFileSync('news.html');
    const $ = cheerio.load(html);
    const clubs = $('.clubIndex ul.dataContainer li').map((i, club) => {
        return {
            clubLink: $(club).find('a').attr('href'),
            studiumClass: $(club).find('a').attr('class').split(' ')[1],
            clubImg: $(club).find('a img.badge-image').attr('src'),
            clubName: $(club).find('a .clubColourBg .clubName').text().trim(),
            stadiumName: $(club).find('a .clubColourBg .stadiumName').text().trim(),
            smallClubImg: $(club).find('a .clubColourBg img.badge-image').attr('src'),
        }
    }).get()
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                clubs: clubs
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }
    } catch {
        return {
            statusCode: 500,
            body: JSON.stringify('internal server error')
        }
    }
}