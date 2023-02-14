const cheerio = require('cheerio');
const request = require('request-promise');

exports.handler = async () => {
	const html = await request.get('https://www.premierleague.com/home');
	const $ = cheerio.load(html);
  let matches = [];
$('.matchListContainer .embeddableMatchInfoContainer').each((index, element) => {
  const team1Name = $(element).find('.teamName abbr').eq(0).text().trim();
  const team2Name = $(element).find('.teamName abbr').eq(1).text().trim();
  const team1Img = $(element).find('img').eq(0).attr('src');
  const team2Img = $(element).find('img').eq(1).attr('src');
  const matchScore = $(element).find('.score').text().trim() || "0-0";
  const matchStartAt = $(element).find('time').attr('data-kickoff') || "not Detrmined";
  
  const match = {team1Name, team2Name, team1Img, team2Img ,matchScore, matchStartAt};
  matches.push(match);
});
	return {
		statusCode: 200,
		body: JSON.stringify({res:matches})
	}
}