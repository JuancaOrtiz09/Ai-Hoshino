let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;おJuanca⁩;;\nFN:おJuanca⁩\nORG:おJuanca⁩\nTITLE:\nitem1.TEL;waid=573163963499:57316396349)\nitem1.X-ABLabel:おJuanca\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:おJuanca\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おJuanca⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
