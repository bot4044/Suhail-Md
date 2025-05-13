const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_22_05_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODksXG4gICAgICAgIDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDgyLFxuICAgICAgICA3NixcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICA1NixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICA0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICA5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlAydUlUek5MSUVUTjhkZWpBL25pRnZPQ1pzaXpFMFl1MDJIeGk1NkZZems9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk92N19aZDNiU211TXV2MUxBUWFKWFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODM3MzU1ODMtOGNkOS00NDJhLTg1NGEtN2EyOTRjNjRjZmEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMTExLFxuICAgICAgMixcbiAgICAgIDE2LFxuICAgICAgMTM2LFxuICAgICAgOTgsXG4gICAgICAxODUsXG4gICAgICAyMjQsXG4gICAgICA1NCxcbiAgICAgIDg2LFxuICAgICAgMzIsXG4gICAgICAyMzIsXG4gICAgICAxNjEsXG4gICAgICA1NSxcbiAgICAgIDIxMCxcbiAgICAgIDc5LFxuICAgICAgOSxcbiAgICAgIDYsXG4gICAgICAxNTAsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAzMSxcbiAgICAgIDEwMCxcbiAgICAgIDgxLFxuICAgICAgMTczLFxuICAgICAgMTMxLFxuICAgICAgMTg1LFxuICAgICAgMjE1LFxuICAgICAgMTQsXG4gICAgICA3OSxcbiAgICAgIDEzNixcbiAgICAgIDE4MSxcbiAgICAgIDE2MCxcbiAgICAgIDE1NyxcbiAgICAgIDEyNyxcbiAgICAgIDcxLFxuICAgICAgNjMsXG4gICAgICAxODksXG4gICAgICAyMjQsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0MjZDSFlGNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDZ1M1drUTd0bUt3UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUbE9kMEJpZGNteWp0SEJCWWVERUpyV2FxRlMyVTRGckJZdjZJTFpCZ1YwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImI4QzJoTC93ZFIyWENMdHB3Zmt5VXNPZ0NicStreS9VU09tUm9uOHIrMzFpNGRrYkJBVk1Dc1BMcUUwQnovQXBHeGJTa0lLVjF1VllNUGFYbmFZR0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklmOFFKd1dNYmhjVDFqdTQvdHpNUnhZS3FSbWRkbFFnMVVOakdQVkZXdGk1TmFORE82RFVaN0dwSy9TS3ZCYXRuZUtxUVBEWkdGdGhwSHp3SzlyK2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNDA0NzQ2NzozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MTAyOTYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGxSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQbFIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmakJTQy9BTVVnaXREaHJlSitSVDNrUmpRek14UnJORE1Kd1AwSlovK3hzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyMTczMDY4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2OTA4NDM0ODcxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
