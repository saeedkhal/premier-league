const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');
exports.handler = async () => {

    // const html = await request.get('https://www.premierleague.com/home');
    // fs.writeFileSync('test.html', html)

    const html = fs.readFileSync('test.html')
    
    const $ = cheerio.load(html);
    const mainNews ={
        mainNewLink :$('.hero-playlist__thumbnail .hero-playlist__thumbnail-figure a')
        .not('.hero-playlist__thumbnail--secondary')
        .attr('href'),
        mainNewImg :$('.hero-playlist__thumbnail .hero-playlist__thumbnail-figure a img').attr('src'),
    
        tag :$('.hero-playlist__thumbnail').not('.hero-playlist__thumbnail--secondary')
        .find('.hero-playlist__thumbnail-figure figcaption .hero-playlist__thumbnail-tag').text().trim(),
    
        title :$('.hero-playlist__thumbnail')
        .not('.hero-playlist__thumbnail--secondary')
        .find('.hero-playlist__thumbnail-figure figcaption .hero-playlist__thumbnail-title')
        .text().trim().replace(/\s+/g ,' '),
    
        text :$('.hero-playlist__thumbnail')
        .not('.hero-playlist__thumbnail--secondary').find('.hero-playlist__thumbnail-figure figcaption p').eq(0)
        .text().trim().replace(/\s+/g ,' '),

        related :$('.hero-playlist__thumbnail')
        .not('.hero-playlist__thumbnail--secondary').find('.hero-playlist__thumbnail-figure figcaption .related-item')
        .map((i,relatedItem) => {
            return {
                text: $(relatedItem).find('p').text().trim(),
                link: $(relatedItem).find('a').attr('href'),
                isVideo:  $(relatedItem).find('a').hasClass('video'),
            }
        }).get()

    } 
    const secoundryNews = $('.hero-playlist__thumbnail.hero-playlist__thumbnail--secondary')
    .map((i,secondary) => {
        return {
            link: $(secondary).find('figure a').attr('href'),
            img: $(secondary).find('figure a img').attr('src'),
            isVideo: $(secondary).find('figure a .hero-playlist__thumbnail-time').hasClass('hero-playlist__thumbnail-time'),
            time: $(secondary).find('figure a .hero-playlist__thumbnail-time').text().trim(),
            tag: $(secondary).find('figcaption .hero-playlist__thumbnail-tag').attr('src'),
            title: $(secondary).find('figcaption .hero-playlist__thumbnail-title').attr('src'),
            
        }
    }).get()

    
	return {
		statusCode: 200,
		body: JSON.stringify({res:{
            mainNews,
            secoundryNews
        }}),
    headers: {
      "Content-Type": "application/json"
    },
	}
}