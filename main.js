const Discord = require ('discord.js');

const client = new Discord.Client();

const prefix = '>';


const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('MWI.Care is online!');
    client.user.setActivity('World of Warships');



});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

   if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
         if(command === 'kick') {
            client.commands.get('kick').execute(message, args);
        } else if(command === 'ban') {
            client.commands.get('ban').execute(message, args);
        } else if(command === 'info'){
            message.channel.send('https://discord.gg/F2U6PEU');
        } else if (command === 'play') {
            client.commands.get('play').execute(message, args);
        } else if (command === 'leave') {
         client.commands.get('leave').execute(message, args);
  
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

        
        
        }
  
  
  
  
    }



});


client.login("TOKEN")
