require('dotenv').config();
const { Client, IntentBitField, IntentsBitField, Guild } = require('discord.js');

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guild,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
		IntentsBitField.Flags.GuildScheduledEvents,
		IntentsBitField.Flags.GuildVoiceStates,
	]
}
)

if (process.argv.length < 2) {
	console.log("anna sitä argumenttia!");
	Error;
}


client.on('ready', (c) => {
	console.log(`${c.user.tag} is ready for action`);
});

client.on('messageCreate', (msg) => {
	if (!msg.author.bot) {
		console.log(msg);
		if (msg.content == "testi") {
			msg.reply("toimii, ok");
		}
		if (msg.content == "leetify.txt") {
			var fs = require('fs')
				, filename = process.argv[2];
			fs.readFile(filename, 'utf8', function(err, data) {
				if (err) throw err;
				console.log('OK: ' + filename);
				console.log(data)
				// Send a local file
				msg.reply({
					files: [{
						attachment: '/home/pepe/workspaces/discord-bot/leetify.txt',
						name: 'leetify.txt',
						description: 'Tukun leetify statsi'
					}]
				})
					.then(console.log)
					.catch(console.error);
			});
		}
	}
});

client.login(process.env.TOKEN);
