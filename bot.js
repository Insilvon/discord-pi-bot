const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');




//Login and set up the Game Presence
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("with itself")

});
//List of commands: !help, !ping, !jump
client.on('message', (msg) => {
    if (msg.author == client.user) {
        return
    }

    if (msg.content.startsWith("$")) {
        runCommand(msg)
    }
})

client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
      // Send the user's avatar URL
      
    }
});


function runCommand(msg){
    let fullCommand = msg.content.substr(1)
    let arr = fullCommand.split(" ")
    let command = arr[0]
    console.log(command)
    let args = arr.slice(1)
    switch(command){
        case "help":
            helpCommand(args, msg)
            break
        case "ping":
            pingCommand(msg)
            break
        case "avatar":
            msg.reply(msg.author.avatarURL);
            break
        case "paws":
            msg.channel.send("PAWS Login: https://csprodweb1.frostburg.edu/psp/GoBobcats/?cmd=login&languageCd=ENG")
            break
        case "canvas":
            msg.channel.send("Canvas Login: https://frostburg.instructure.com/")
            break
        case "email":
            msg.channel.send("Email Login: https://outlook.com/frostburg.edu")
            break
        case "tutoring":
            msg.channel.send("Tutoring: https://tutortrac.frostburg.edu/TracWeb40/Default.html")
            break
        default:
            let responses = [
                'lolwut',
                'uh...',
                'Dude what are you talking about',
                'Man, I just work here',
                'Girl, what do you mean',
                'I do not believe you meant that',
                'Try again',
                '***AAAAANNNNNNNNGGGGGGG***',
                '*Error parsing command, please use better commands*',
                '404 Response not found',
                '<Insert witty comment that you do not know what command to use>',
                'ree?'
            ]
            var response = responses[Math.floor(Math.random()*responses.length)]
            msg.channel.send(response)
    }
}
function helpCommand(args, msg){
    msg.channel.send("No, I need you to help me "+msg.author.toString()+"!")
    msg.channel.send(">Available Commands: $help|$ping|$paws|$canvas|$email|$tutoring|$avatar")
}
function pingCommand(msg) {
    msg.channel.send(msg.author.toString()+" Pong!")
}
client.login(auth.token);