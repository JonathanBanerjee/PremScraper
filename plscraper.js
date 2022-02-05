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
    console.log("|eeeh",topSavers);
    
    const teamList = [];
    const splitter = topSavers[0].team.split("\n");
    for (i = 0; i < splitter.length; i++)
    {

        if(splitter[i][splitter[i].length -1] !== ' '){
            teamList.push(splitter[i]);
    
        }
    }
    console.log("Test", teamList)
    
    const Namesplitter = topSavers[0].name.split();
    console.log("NameTest", Namesplitter);

    const newGoals = topSavers.goals;
    console.log("JSON String", JSON.stringify(newGoals));

    const Goalsplitter = topSavers[0].Goals.split("");
    console.log("GoalTest", JSON.stringify(Goalsplitter));

    const Pensplitter = topSavers[0].Penalties.split("").splice(1,15);
    console.log("PenTest", Pensplitter);

    const FirstGoalSplitter= topSavers[0].First_Goals.split("").splice(3,15);
    console.log("FirsGoalTest", FirstGoalSplitter);

})
    .catch(console.error);
