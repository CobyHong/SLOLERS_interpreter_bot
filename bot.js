const Discord = require('discord.js');
const client = new Discord.Client();

var token = process.env.BOT_TOKEN;
client.login(token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', gotMessage);

function gotMessage(msg)
{
    if (client.user != msg.author)
    {
        console.log("received message: " + msg.content);
        messageHandler(msg);
    }
}

function countType(msg)
{
    let isnum = /^\d+$/.test(msg.content);
    if(isnum)
    {
        console.log("this was a valid number, incrementing...");
        var newnum = parseInt(msg.content) + 1;
        msg.channel.send(newnum.toString());
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chance()
{
    return getRandomInt(0,2);
}

function brian_interpreter(msg)
{
    var poss = chance();
    var brianID = "194871443509477377";
    var brian_quotes = [
        "looks kinda doo doo",
        "Stop the cap!",
        "gimme kiss",
        "dongjinable",
        "cringer",
        "welcome to the discord bro",
        "bro lemme make you a playlist",
        "Lets hangout one day... one day.",
        "bro we're homies for life you feel?",
        "say it back please :C",
        "ur mama",
        "bro"
    ];

    if(msg.author.id == brianID && poss == 2)
    {
        console.log(poss);
        msg.channel.send(brian_quotes[getRandomInt(0, brian_quotes.length - 1)]);
    }
}

function steph_interpreter(msg)
{
    var poss = chance();
    var stephID = "166393211672068098";
    var steph_quotes = [
        "You wanna play too? It'll be fun...",
        "FF",
        "shut the fuck up brian",
        "haha... yeeeaaahhhh",
        "poggers",
        "mwin waptwa (UwU)",
        "wwhhheeerrreee's scott :C",
        "haha... yeeeaaahhhh",
        "haha... yeeeaaahhhh",
        "Can this first place guy just FF"
    ];

    if(msg.author.id == stephID && poss == 2)
    {
        console.log(poss);
        msg.channel.send(steph_quotes[getRandomInt(0, steph_quotes.length - 1)]);
    }

}

function fuck_with_minh(msg)
{
    var poss = getRandomInt(0,5);
    if(poss == 5)
    {
        msg.channel.send("<@293787470183661569>" + " I'm going to watch some V-Tubers.");
    }
}

function messageHandler(msg)
{
    //countType(msg);
    brian_interpreter(msg);
    steph_interpreter(msg);
    //fuck_with_minh(msg);
}

