const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');
exports.handler = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.premierleague.com/home');
  await page.waitForFunction('window.performance.timing.domContentLoadedEventEnd > 0');
  const html = await page.content();
  fs.writeFileSync('test.html', html);

  // const html = fs.readFileSync('test.html');

	const $ = cheerio.load(html);
  let matches = [];
  const getData = (element) =>{
    const homeTeamAbb = $(element).find('.teamName abbr').eq(0).text().trim();
    const awayTeamAbb = $(element).find('.teamName abbr').eq(1).text().trim();
    const homeTeamName = $(element).find('.teamName abbr').eq(0).attr('title');
    const awayTeamName = $(element).find('.teamName abbr').eq(1).attr('title');
    const homeTeamImg = $(element).find('img').eq(0).attr('src');
    const awayTeamImg = $(element).find('img').eq(1).attr('src');
    const matchScore = $(element).find('.score').text().trim() || "0-0";
    const matchStartsAt = $(element).find('time').attr('data-kickoff') || 'end';
    const broadcasterImage = $(element).find('.broadcaster-image').attr('src');
    const minutes = $(element).find('.js-minutes').text().trim();
    const isLive =  $(element).hasClass('js-live-fixture');
    const match = {minutes,isLive,broadcasterImage, homeTeamAbb, awayTeamAbb,homeTeamName, awayTeamName, homeTeamImg, awayTeamImg ,matchScore, matchStartsAt};

    return match
  }
  const htmlMatches = $('.matchListContainer .matchAbridged').filter('[href]');
  if (htmlMatches.length > 1) {
    // get matches with classes matchAbridged and have href regardelss href value
    htmlMatches.each((index, element) => {
      const match = getData(element);
      matches.push(match);
    });
  }else{
    const match = getData(htmlMatches);
    matches.push(match);
  }
  const matchWeek =  $('.fixturesAbridgedHeader header .week').text().trim();
	return {
		statusCode: 200,
		body: JSON.stringify({
      res:{
        matchWeek,
        matches
      }
    }),
    headers: {
      "Content-Type": "application/json"
    }
	}
}