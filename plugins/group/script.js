let handler = async (m, {
    conn,
    bot
}) => {
const context = (jid, img) => ({
    mentionedJid: [jid],
    isForwarded: true,
    forwardingScore: 1,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363426553571462@newsletter',
        newsletterName: 'Aisa-v1',
        serverMessageId: 0
    },
    externalAdReply: {
        title: "*(اسيا 🦅 v1)* `اشهر بوت في الواتساب)`",
        body: "𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝚋𝚘𝚝 𝚝𝚑𝚊𝚝 𝚒𝚜 𝚎𝚊𝚜𝚢 𝚝𝚘 𝚖𝚘𝚍𝚒𝚏𝚢 𝚊𝚗𝚍 𝚟𝚎𝚛𝚢 𝚏𝚊𝚜𝚝",
        thumbnailUrl: img,
        sourceUrl: '',
        mediaType: 1,
        renderLargerThumbnail: true
    }
});
const { images } = bot.config.info;
const img = images.random()
await conn.sendMessage(m.chat, { 
  text: `
GitHub: _**_

Video: _**_

> *لا تنسي وضع نجمة لـ الريبو 🌟*
`,
  contextInfo: context(m.sender, img)
}, { quoted: reply_status });
}
handler.usage = ["سكريبت"];
handler.category = "group";
handler.command = ["سكريبت", "سورس", "sc"];

export default handler;
