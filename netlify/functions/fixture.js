const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');
exports.handler = async () => {
    try {

        // const browser = await puppeteer.launch();
        // const page = await browser.newPage();
        // await page.goto('https://www.premierleague.com/fixtures');
        // await page.waitForSelector('.matchList .matchFixtureContainer');
        // const html = await page.content();
        // fs.writeFileSync('fixture.html', html);
        
        const html = fs.readFileSync('fixture.html')

        const $ = cheerio.load(html);

        const fixture = $('.fixtures__matches-list').map((i, el) => {
            return {
                date: $(el).attr('data-competition-matches-list'),
                matches: $(el).find('ul li').map((index, match) => {
                    return {
                        homeTeam: $(match).find('.teamName .shortname').first().text().trim(),
                        homeAbb: $(match).find('.teamName .abbr').first().text().trim(),
                        awayTeam: $(match).find('.teamName .shortname').last().text().trim(),
                        awayAbb: $(match).find('.teamName .abbr').last().text().trim(),
                        time: $(match).find('time').text().trim(),
                        homeTeamImg:$(match).find('.badge-image-container img').first().attr('src'),  
                        awayTeamImg:$(match).find('.badge-image-container img').last().attr('src'),
                        stadiumName:$(match).find('.stadiumName').text().trim(),
                          
                    }
                }).get()
            };
        }).get();
        return {
            statusCode: 200,
            body: JSON.stringify({ fixture }),
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