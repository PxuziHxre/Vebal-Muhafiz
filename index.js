 cat <<'EOF' > muhafiz.js
> const { Client, GatewayIntentBits, PermissionsBitField } = require('discord.js');
>
> const TOKEN = "MTQ4NDU2MjQzNTQ1MjE3NDQwNw.GHQpv-.CaWGuyZeTkMnWdLQFionfrpQQnQgg9A6-EPb1Y";
>
> const client = new Client({
>   intents: [
>     GatewayIntentBits.Guilds,
>     GatewayIntentBits.GuildMessages,
>     GatewayIntentBits.MessageContent,
>     GatewayIntentBits.GuildMembers
>   ]
> });
>
> client.once('ready', () => {
>   console.log(`✅ MUHAFIZ AKTIF: ${client.user.tag}`);
>   console.log(`👀 Mesajları dinlemeye başladım...`);
> });
>
> client.on('messageCreate', async (msg) => {
>   if (msg.author.bot || !msg.guild) return;
>
>   // TERMUX TEST: Mesaj gelirse buraya kesin yazacak!
>   console.log(`[LOG] Mesaj Geldi: "${msg.content}" | Gönderen: ${msg.author.tag}`);
>
>   // Sahibi es geç
>   if (msg.author.id === msg.guild.ownerId) {
>     console.log("-> Bu kurucu, dokunmuyorum.");
>     return;
>   }
>
>   const linkRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|(\.(com|net|org|xyz|tr))/gi;
>
>   if (linkRegex.test(msg.content)) {
>     console.log(`🚨 LINK TESPIT EDILDI: ${msg.author.tag} tarafından!`);
>
>     try {
>       await msg.delete();
>       msg.channel.send(`🚫 <@${msg.author.id}>, link yasak!`);
>     } catch (e) {
>       console.log("❌ HATA: Mesajı silemiyorum! Botun 'Mesajları Yönet' yetkisi kapalı olabilir.");
>     }
>   }
> });
>
> client.login(TOKEN);
> EOF
~ $ node muhafiz.js
✅ MUHAFIZ AKTIF: VEBAL-MUHAFIZ#0690
👀 Mesajları dinlemeye başladım...
(node:10170) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[LOG] Mesaj Geldi: "https://www.youtube.com/@pxuzixvebal" | Gönderen: pxuzisxrsilmaz
🚨 LINK TESPIT EDILDI: pxuzisxrsilmaz tarafından!
^C
~ $ cat <<'EOF' > muhafiz.js
`👀 Mesajları dinlemeye başladım...`);
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot || !msg.guild) return;

  // TERMUX TEST: Mesaj gelirse buraya kesin yazacak!
  console.log(`[LOG] > const { Client, GatewayIntentBits, PermissionsBitField } = require('discord.js');
x.test(msg.content>
);
    } catch (e) {
      consol> const TOKEN = "MTQ4NDU2MjQzNTQ1MjE3NDQwNw.GHQpv-.CaWGuyZeTkMnWdLQFionfrpQQnQgg9A6-EPb1Y";
>
> const client = new Client({
>   intents: [
>     GatewayIntentBits.Guilds,
>     GatewayIntentBits.GuildMessages,
>     GatewayIntentBits.MessageContent,
>     GatewayIntentBits.GuildMembers
>   ]
> });
>
> client.once('ready', () => {
>   console.log(`✅ MUHAFIZ AKTIF: ${client.user.tag}`);
>   console.log(`👀 Mesajları dinlemeye başladım...`);
> });
>
> client.on('messageCreate', async (msg) => {
>   if (msg.author.bot || !msg.guild) return;
>
>   // TERMUX TEST: Mesaj gelirse buraya kesin yazacak!
>   console.log(`[LOG] Mesaj Geldi: "${msg.content}" | Gönderen: ${msg.author.tag}`);
>
>   // Sahibi es geç
>   if (msg.author.id === msg.guild.ownerId) {
>     console.log("-> Bu kurucu, dokunmuyorum.");
>     return;
>   }
>
>   const linkRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|(\.(com|net|org|xyz|tr))/gi;
>
>   if (linkRegex.test(msg.content)) {
>     console.log(`🚨 LINK TESPIT EDILDI: ${msg.author.tag} tarafından!`);
>
>     try {
>       await msg.delete();
>       msg.channel.send(`🚫 <@${msg.author.id}>, link yasak!`);
>     } catch (e) {
>       console.log("❌ HATA: Mesajı silemiyorum! Botun 'Mesajları Yönet' yetkisi kapalı olabilir.");
>     }
>   }
> });
>
> client.login(TOKEN);
