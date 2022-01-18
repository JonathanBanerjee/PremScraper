//pl-scraper.js

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.premierleague.com/stats/top/players/saves';

axios(url)
    .then(response => {
        const html = response.data;
        console.log(html);
        const $ = cheerio.load(html)
        const goalsTable = $('.statsTableContainer > tr');
        const topSavers = [];
    

    goalsTable.each(function () {
        const rank = $(this).find('.rank').text();
        const playerName = $(this).find('.playerName').text();
        const nationality = $(this).find('.playerCountry').text();
        const club = $(this).find('.statNameSecondary').text();
        const saves = $(this).find('.mainStat').text();
    

    topSavers.push({
        rank,
        name: playerName,
        nationality, 
        club: club,
        saves,
    });
    });

    console.log(topSavers);

    })
    .catch(console.error);

