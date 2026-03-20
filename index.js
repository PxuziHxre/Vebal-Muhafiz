const { Client, GatewayIntentBits } = require('discord.js');

// Yeni verdiğin anahtarı buraya koydum:
const TOKEN = "MTQ4NDU2MjQzNTQ1MjE3NDQwNw.GofYe0.hjo_iDjW-Pf_Kcf2tSXoL5kvaCQi0NVwJ9SnTg";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`✅ MUHAFIZ GÖREVDE: ${client.user.tag}`);
});

client.on('messageCreate', async (mesaj) => {
  if (mesaj.author.bot) return;

  // Link yakalama (Seni bile affetmez, yan hesaptan dene!)
  if (mesaj.content.includes("http") || mesaj.content.includes("www.")) {
    try {
      await mesaj.delete();
      const uyari = await mesaj.channel.send(`🚫 <@${mesaj.author.id}>, link atmak yasaktır kral!`);
      setTimeout(() => uyari.delete(), 4000);
    } catch (hata) {
      console.log("Yetki hatası: Botun mesaj silme yetkisi yok!");
    }
  }
});

client.login(TOKEN).catch(() => console.log("Hata: Token yine patlamış olabilir!"));
