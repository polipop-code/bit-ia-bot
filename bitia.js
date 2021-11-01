const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on("ready", () => {
	console.log(`Estoy lista!`);
	client.user.setPresence({
		status: "online",
		game: {
			name: "ChatLogue",
			type: "PLAYING",
		},
	});
});

client.on("message", (message) => {
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		message.channel.send({
			embed: {
				color: 3447003,
				description: `pong 🏓!!`,
			},
		});
	} else if (command === "hello") {
		message.channel.send({
			embed: {
				color: 3447003,
				image: {
					url: "https://i.pinimg.com/originals/95/c1/0b/95c10ba02011d6474b609c9b5adcc411.gif",
				},
			},
		});
	} else if (command === "classroom") {
		message.guild.createChannel("📋registro", "text");
		message.guild.createChannel("💬chat", "text");
		message.guild.createChannel("📑tareas", "text");
		message.guild.createChannel("📊recursos", "text");
		message.guild.createChannel("📅tareas-atrasadas", "text");
		message.guild.createChannel("🎓estudiantes", "voice");
		message.guild.createChannel("🧔profesor", "voice");
	}
});

client.login(config.token);
