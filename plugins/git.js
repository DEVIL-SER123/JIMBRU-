const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "it sends bot deploying link"

const GN = "it sends bot deploying link"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "💖 *To check update .update* ✅\n💖 *To update Bot .update now✅ *\n\n🎗️ *𝐆𝐢𝐭𝐡𝐮𝐛 𝐋𝐢𝐧𝐤 : https://github.com/DEVIL-SER123/JIMBRU-✅ *\n\n🎗️ *𝐀𝐮𝐝𝐢𝐨 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 : https://github.com/DEVIL-SER123/JIMBRU-/tree/master/uploads* ✅\n\n* 🎗️𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 : https://github.com/DEVIL-SER123/JIMBRU-/tree/master/Amalser* ✅"; 
 
    var i = Math.floor(1*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));
    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

                 r_text[0] = "💖 *To check update .update* ✅\n\n💖 *To update Bot .update now* ✅\n\n\n🎗️ *𝐆𝐢𝐭𝐡𝐮𝐛 𝐋𝐢𝐧𝐤 : https://github.com/Luciferking1/Miss-Helenaa* ✅\n\n🎗️ *𝐀𝐮𝐝𝐢𝐨 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 : https://github.com/Luciferking1/Miss-Helenaa/tree/master/uploads* ✅\n\n* 🎗️𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 : https://github.com/Luciferking1/Miss-Helenaa/tree/master/Amalser* ✅"; 

                     var i = Math.floor(1*Math.random())

                         await message.client.sendMessage(

                               message.jid,(r_text[i]), MessageType.text);

    }));
    

   }
