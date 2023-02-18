const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const request = require('request-promise')
const fs = require('fs');
exports.handler = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.premierleague.com/home');
  // wait fo specific selector to load
  // await page.waitForSelector('.broadcaster-image');
  // await page.waitForSelector('.js-minutes');
  // await page.waitForSelector('.js-live-fixture');

    // Wait for page to load
    // await page.waitForNavigation({ waitUntil: 'networkidle0' });

    // Wait for all JS to finish executing
  // await page.waitForFunction('window.performance.timing.domContentLoadedEventEnd > 0');
  // const html = await page.content();
  // fs.writeFileSync('test.html', html);
  const html = fs.readFileSync('test.html');

	const $ = cheerio.load(html);
  let matches = [];
  const getData = (element) =>{
    const team1NameAbb = $(element).find('.teamName abbr').eq(0).text().trim();
    const team2NameAbb = $(element).find('.teamName abbr').eq(1).text().trim();
    const team1Name = $(element).find('.teamName abbr').eq(0).attr('title');
    const team2Name = $(element).find('.teamName abbr').eq(1).attr('title');
    const team1Img = $(element).find('img').eq(0).attr('src');
    const team2Img = $(element).find('img').eq(1).attr('src');
    const matchScore = $(element).find('.score').text().trim() || "0-0";
    const matchStartsAt = $(element).find('time').attr('data-kickoff') || 'end';
    const broadcasterImage = $(element).find('.broadcaster-image').attr('src');
    const minutes = $(element).find('.js-minutes').text().trim();
    const isLive =  $(element).hasClass('js-live-fixture');
    const match = {minutes,isLive,broadcasterImage, team1NameAbb, team2NameAbb,team1Name, team2Name, team1Img, team2Img ,matchScore, matchStartsAt};

    return match
  }

  const htmlMatches = $('.matchListContainer .matchAbridged').filter('[href]');
  if (htmlMatches.length > 1) {
    $('.matchListContainer .matchAbridged').filter('[href]').each((index, element) => {
      const match = getData(element);
      matches.push(match);
    });
  }else{
    const match = getData(htmlMatches);
    matches.push(match);
  }

	return {
		statusCode: 200,
		body: JSON.stringify({res:matches}),
    headers: {
      "Content-Type": "application/json"
    }
	}
}