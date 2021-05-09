const discord = require('discord.js');
const client = new discord.Client();

const prefix = '!'; 

// embed vars
const orange = "#F17F39";
const author = "ph03be_";

// help menu code so i dont have to update it everywhere its used
const helpMenu = new discord.MessageEmbed();
helpMenu.setTitle("Commands");
helpMenu.setAuthor(author);
helpMenu.setDescription("!help - Returns this list of commands\n !ping - Returns back 'Pong'\n !repos - Returns PH03be's Github repositories\n !github - Returns PH03be's Github URLs\n !site - Returns the URL of PH03be's website\n !skyline - Return's the link to PH03be's GitHub Skyline\n !source - Returns the URL of this bots GitHub repository\n !singles - Returns the link to PH03be's SoundCloud singles\n !albums - Returns the link to PH03be's SoundCloud albums\n !soundcloud - Returns the link to PH03be's SoundCloud\n !spotify - Returns the link to PH03be's Spotify account\n !discord - Returns PH03be's discord username");
helpMenu.setColor(orange);

client.once('ready', () => {
    console.log(client.user.username + " is awake and ready to receive commands.");

    client.user.setActivity("Productivity - !help", {type: 'PLAYING'});
});

client.login("token");

client.on('guildCreate', guild => {

    let defaultChannel = "";
    guild.channels.cache.forEach((channel) => {
        if (channel.type == "text" && defaultChannel == "") {
            if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                defaultChannel = channel;
            }
        }
    });
    
    defaultChannel.send(helpMenu);
});

client.on('message', message => {
    if (message.content == prefix + 'ping') {
        message.channel.send('Pong!');
    }

    if (message.content == prefix + 'help') {
        message.channel.send(helpMenu);
    }

    if (message.content == prefix + 'repos') {
        const Repos = new discord.MessageEmbed();

        Repos.setTitle("Repository List");
        Repos.setAuthor(author);
        Repos.setURL("https://github.com/phoebe-leong?tab=repositories");
        Repos.setDescription("[CodeHub](https://github.com/phoebe-leong/CodeHub) \n[Capitalism In A Nutshell](https://github.com/phoebe-leong/Capitalism-In-A-Nutshell)");
        Repos.setColor(orange);
        message.channel.send(Repos);
    }

    if (message.content == prefix + 'github') {
        const GitHub = new discord.MessageEmbed();

        GitHub.title = "github/phoebe-leong";
        GitHub.setAuthor(author);
        GitHub.url = "https://github.com/phoebe-leong";
        GitHub.setDescription("[Profile Statistics](https://profile-summary-for-github.com/user/phoebe-leong)");
        GitHub.setColor(orange);

        message.channel.send(GitHub);
    }

    if (message.content == prefix + 'site') {
        const site = new discord.MessageEmbed();

        site.title = "Website";
        site.setAuthor(author);
        site.setDescription("https://ph03be.glitch.me");
        site.setColor(orange);

        message.channel.send(site);
    }

    if (message.content == prefix + 'skyline') {

        const githubskyline = new discord.MessageEmbed();

        githubskyline.setTitle("PH03be's GitHub Skyline");
        githubskyline.setAuthor(author);
        githubskyline.setURL("https://skyline.github.com/phoebe-leong");
        githubskyline.setDescription("https://skyline.github.com/");
        githubskyline.setColor(orange);

        message.channel.send(githubskyline);
    }

    if (message.content == prefix + 'source') {
        const source = new discord.MessageEmbed();
        source.setTitle("Bot's Repository");
        source.setAuthor(author);
        source.setColor(orange);
        source.setURL('https://github.com/phoebe-leong/github-discord-bot');

        message.channel.send(source);
    }

    if (message.content == prefix + 'singles') {
        const singles = new discord.MessageEmbed();

        singles.setTitle("Singles");
        singles.setURL("https://soundcloud.com/cucumber-cat/tracks");
        singles.setAuthor(author);
        singles.setColor(orange);
        singles.setDescription("[milk.](https://soundcloud.com/cucumber-cat/milk)\n [r e l a x](https://soundcloud.com/cucumber-cat/r-e-l-a-x)");

        message.channel.send(singles);
    }
    
    if (message.content == prefix + 'albums') {
        const albums = new discord.MessageEmbed();

        albums.setTitle("Albums");
        albums.setURL("https://soundcloud.com/cucumber-cat/tracks");
        albums.setColor(orange);
        albums.setAuthor(author);
        albums.setDescription("[Low Quality EP](https://soundcloud.com/cucumber-cat/sets/low-effort-ep)\n [A Week](https://soundcloud.com/cucumber-cat/sets/a-week)");

        message.channel.send(albums);
    }

    if (message.content == prefix + 'soundcloud') {
        const soundcloud = new discord.MessageEmbed();

        soundcloud.setTitle('soundcloud/phoebe-leong');
        soundcloud.setAuthor(author);
        soundcloud.setColor(orange);
        soundcloud.setURL("https://soundcloud.com/cucumber-cat");

        message.channel.send(soundcloud);
    }

    if (message.content == prefix + 'spotify') {
        const spotify = new discord.MessageEmbed();

        spotify.setTitle("spotify/phoebe-leong");
        spotify.setURL("https://open.spotify.com/user/3xs8bqb61o9g0eixbkxp3c0u3");
        spotify.setAuthor(author);
        spotify.setColor(orange);

        message.channel.send(spotify);
    }

    if (message.content == prefix + 'discord') {
        const discordEmbed = new discord.MessageEmbed();

        discordEmbed.setTitle("discord/phoebe-leong");
        discordEmbed.setDescription("pheebeeeツ#3899");
        discordEmbed.setColor(orange);
        discordEmbed.setAuthor(author);

        message.channel.send(discordEmbed);
    }

});
