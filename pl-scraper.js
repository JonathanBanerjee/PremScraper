//pl-scraper.js

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://uk.soccerway.com/national/england/premier-league/20212022/regular-season/r63396/players/';

axios(url)
    .then(response => {
        const html = response.data;
        console.log(html);
        const $ = cheerio.load(html)
        const goalsTable = $('#page_competition_1_block_competition_playerstats_13_block_competition_playerstats_topscores_1_table'); 
        const topSavers = [];
    

    goalsTable.each(function () {
        // const rank = $(this).find('.rank').text();
        const playerName = $(this).find('.player').text();
        const teamName = $(this).find('.team').text();
        const Goals = $(this).find('.goals').text();
        const firstGoals = $(this).find('.first-goals').text();
        const penalties = $(this).find('.penalties').text();

    topSavers.push({
        // rank,
        name: playerName,
        team: teamName,
        Goals: Goals,
        First_Goals: firstGoals,
        Penalties: penalties
    });
    });

    console.log(topSavers);

    })
    .catch(console.error);
