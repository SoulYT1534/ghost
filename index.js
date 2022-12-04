//constant
const Discord =  require("discord.js");
const { Client, GatewayIntentBits, Partials } = Discord

//specifying client intents and partials
const client = new Client({
  intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildEmojisAndStickers,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildWebhooks,
  GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.DirectMessageReactions,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildScheduledEvents
  ],
  partials: [Partials.Channel],
});
//requiring storage
client.storage = require("./storage.json")

//requiring database for client
const { QuickDB } = require("quick.db");
const db = new QuickDB();
client.db = db

//requiring ms for client
const ms = require("ms")
client.ms = ms

//requiring utils
require("./utils")(client)

//path
const fileRunnersFolder = './folders/fileRunnersFolder'

//constant for fs
const fs = require("fs")

//function to run file runners
fs.readdirSync(fileRunnersFolder).forEach(async file => {
    require(fileRunnersFolder+`/${file}`)(client)
});