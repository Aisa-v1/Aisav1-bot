let handler = async (m, { conn, bot }) => {
  let watermark = 'Aisa-v1';
  
  let quoted = {
    key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' },
    message: { conversation: 'Aisa-v1 🤺🦅' }
  };
  const num = bot.config.owners[0].jid.split("@")[0];
  let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${watermark}
TEL;type=CELL;waid=${num}:+${num}
END:VCARD`;

  let img = 'https://litter.catbox.moe/c6ikee.jpg';
  
  await conn.sendMessage(m.chat, {
    contacts: { displayName: watermark, contacts: [{ vcard }] },
    contextInfo: {
      forwardingScore: 2023,
      externalAdReply: {
        title: 'Aisa-v1',
        body: watermark,
        sourceUrl: 'https://whatsapp.com/channel/0029VbD2pIvFXUuVFTTsek0J',
        thumbnailUrl: img,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted })
};

handler.command = /^(owner|مطور|المطور)$/i;

export default handler;
