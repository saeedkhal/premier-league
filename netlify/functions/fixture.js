const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');
exports.handler = async () => {
    try {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.premierleague.com/fixtures');
        await page.waitForSelector('.matchList .matchFixtureContainer');
        const html = await page.content();
        fs.writeFileSync('fixture.html', html);
        
        // const html = fs.readFileSync('result.html')

        const $ = cheerio.load(html);

        const results = $('.fixtures__matches-list').map((i, el) => {
            return {
                date: $(el).attr('data-competition-matches-list'),
                marches: $(el).find('ul li').map((index, match) => {
                    return {
                        homeTeam: $(match).find('.teamName .shortname').first().text().trim(),
                        homeAbb: $(match).find('.teamName .abbr').first().text().trim(),
                        awayTeam: $(match).find('.teamName .shortname').last().text().trim(),
                        awayAbb: $(match).find('.teamName .abbr').last().text().trim(),
                        score: $(match).find('time').text().trim(),
                        homeTeamImg:$(match).find('.badge-image-container img').first().attr('src'),  
                        awarTeamImg:$(match).find('.badge-image-container img').first().attr('src'),
                        stadiumName:$(match).find('.stadiumName').text().trim(),
                          
                    }
                }).get()
            };
        }).get();
        return {
            statusCode: 200,
            body: JSON.stringify({ results }),
            headers: {
                "Content-Type": "application/json"
            },
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: JSON.stringify('internal server error')
        }
    }

}