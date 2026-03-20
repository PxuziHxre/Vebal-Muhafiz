const { Client, GatewayIntentBits } = require('discord.js');

// BOTUN ANAHTARI (TOKEN)
const TOKEN = "MTQ4NDU2MjQzNTQ1MjE3NDQwNw.GHQpv-.CaWGuyZeTkMnWdLQFionfrpQQnQgg9A6-EPb1Y";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.once('ready', () => {
  console.log(`✅ BOT HAZIR: ${client.user.tag} adıyla giriş yapıldı!`);
});

client.on('messageCreate', async (mesaj) => {
  if (mesaj.author.bot || !mesaj.guild) return;

  // --- KOMUTLAR ---

  // Yardım Komutu
  if (mesaj.content === '!yardım') {
    mesaj.reply('🛡️ **Vebal Muhafız Komutları:**\n\n`!temizle [sayı]` - Belirtilen miktarda mesajı siler.\n`!sa` - Selam verir.');
  }

  // Selamlaşma Komutu
  if (mesaj.content.toLowerCase() === '!sa' || mesaj.content.toLowerCase() === 'sa') {
    mesaj.reply('Aleyküm Selam hoş geldin kral!');
  }

  // Mesaj Silme Komutu
  if (mesaj.content.startsWith('!temizle')) {
    if (!mesaj.member.permissions.has('ManageMessages')) return mesaj.reply('Buna yetkin yok reis.');
    const miktar = parseInt(mesaj.content.split(' ')[1]);
    if (!miktar || miktar < 1 || miktar > 100) return mesaj.reply('Lütfen 1-100 arası bir sayı yaz.');
    
    await mesaj.channel.bulkDelete(miktar, true);
    mesaj.channel.send(`✅ ${miktar} adet mesaj süpürüldü!`).then(m => setTimeout(() => m.delete(), 3000));
  }

  // --- OTOMATİK KORUMALAR ---

  // Link Engelleme
  const linkKontrol = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
  if (linkKontrol.test(mesaj.content) && mesaj.author.id !== mesaj.guild.ownerId) {
    try {
      await mesaj.delete();
      mesaj.channel.send(`⚠️ <@${mesaj.author.id}>, bu sunucuda link paylaşmak yasaktır!`).then(m => setTimeout(() => m.delete(), 5000));
    } catch (hata) { console.log("Mesaj silinemedi."); }
  }
});

client.login(TOKEN);
