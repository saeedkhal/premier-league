const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');
exports.handler = async () => {
    try {

        // const html = await request.get('https://www.premierleague.com/home');
        // fs.writeFileSync('test.html', html)

        const html = fs.readFileSync('cards.html')

        const $ = cheerio.load(html);

        const featureCards = $('.statsCard').map((index, statsCard) => {
            const missingImg = 'https:' + $(statsCard).find('ul.statsList li.statsHero  .statCardImg').attr('src');
            const playerId = $(statsCard).find('ul.statsList li.statsHero  .statCardImg').attr('data-player').trim();
            const playerImg = missingImg.replace('Photo-Missing', playerId);
            let statsList = [];
            $(statsCard).find('li.statsRow').each((j, li) => {
                if (j === 0) { }
                else {
                    statsList.push({
                        key:$(li).find('.pos').text().trim(),
                        value: $(li).find('.stat').text().trim(),
                    })
                }
            });
            return {
                statsTitle: $(statsCard).find('header .statsTitle').text().trim(),
                statName: $(statsCard).find('ul.statsList li.statsHero .statName').text().trim(),
                playerOrLink: $(statsCard).find('ul.statsList li.statsHero a.statName').attr('href'),
                position: $(statsCard).find('ul.statsList li.statsHero .position').text().trim(),
                flagClass: $(statsCard).find('ul.statsList li.statsHero .pos').find('.flag').attr('class'),
                playerCountry: $(statsCard).find('ul.statsList li.statsHero .playerCountry').text().trim(),
                missingImg,
                playerImg,
                statsList
            };

        }).get();
        return {
            statusCode: 200,
            body: JSON.stringify({ cards: featureCards }),
            headers: {
                "Content-Type": "application/json"
            },
        }
    }catch (err) {
        return {
          statusCode: 500,
          body: JSON.stringify({
            status: 500,
            message: err
          })
        }
      }

}