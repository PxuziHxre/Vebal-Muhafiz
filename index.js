const { Client, GatewayIntentBits } = require('discord.js');

// BOTUN TOKENİ (DOKUNMA)
const TOKEN = "MTQ4NDU2MjQzNTQ1MjE3NDQwNw.GHQpv-.CaWGuyZeTkMnWdLQFionfrpQQnQgg9A6-EPb1Y";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

const ihlaller = new Map();

client.once('ready', () => {
  console.log(`🚀 MUHAFIZ AKTİF: ${client.user.tag}`);
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot || !msg.guild) return;
  if (msg.author.id === msg.guild.ownerId) return;

  const satirlar = msg.content.split('\n').length;
  const linkRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|(\.(com|net|org|xyz|info|me|io|tk|ml|ga|cf|gq|biz|tr))/gi;
  const linkVarMi = linkRegex.test(msg.content);

  // Satır Spam Koruması
  if (satirlar > 35) {
    try {
      await msg.delete();
      return msg.channel.send(`⚠️ <@${msg.author.id}>, çok fazla satır kullandın!`).then(m => setTimeout(() => m.delete(), 5000));
    } catch (e) { console.log(e); }
  }

  // Link ve Panel Koruması
  if (linkVarMi) {
    const userIhlal = ihlaller.get(msg.author.id) || 0;
    if (userIhlal === 0) {
      ihlaller.set(msg.author.id, 1);
      try {
        await msg.delete();
        msg.channel.send(`⚠️ <@${msg.author.id}>, link paylaşımı yasaktır! Tekrarında susturulacaksın.`).then(m => setTimeout(() => m.delete(), 5000));
      } catch (e) { console.log(e); }
      setTimeout(() => ihlaller.delete(msg.author.id), 300000);
    } else {
      try {
        await msg.delete();
        const member = msg.guild.members.cache.get(msg.author.id);
        if (member) {
          await member.timeout(600000, "Sürekli Link Paylaşımı");
          msg.channel.send(`🚫 <@${msg.author.id}>, susturuldun!`);
        }
        ihlaller.delete(msg.author.id);
      } catch (err) { console.log(err); }
    }
  }
});

client.login(TOKEN);

