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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_11_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgODksXG4gICAgICAgIDg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyLFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMixcbiAgICAgICAgMTE5LFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPNm5ST3RpWGRWQkFkZ2JvaCs3UHpDSDVUZjBHUFlTekFCcXVoeWxZaXpvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQxNDA0NzQ2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjJDM0VENTIxMEVBNjZGQjkyMkM1NkEyQTM2NDI1RDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ3MzcyMzExXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkt3N3VKZVRKUy1PaHdPaDBfSEVHdkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmQzZDkwN2YtYzc1ZC00ZDhiLWEzZGItZGE2OWViYzM3NmRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMixcbiAgICAgIDc2LFxuICAgICAgMTIxLFxuICAgICAgMjE0LFxuICAgICAgNDcsXG4gICAgICAxNTIsXG4gICAgICA1OCxcbiAgICAgIDExMixcbiAgICAgIDI2LFxuICAgICAgMTA4LFxuICAgICAgMixcbiAgICAgIDE0MixcbiAgICAgIDExMSxcbiAgICAgIDIyNixcbiAgICAgIDE0MyxcbiAgICAgIDQ3LFxuICAgICAgOTYsXG4gICAgICAzOCxcbiAgICAgIDE4NSxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDE5MyxcbiAgICAgIDQsXG4gICAgICAxOTgsXG4gICAgICA5MCxcbiAgICAgIDEwMyxcbiAgICAgIDcsXG4gICAgICAyMTYsXG4gICAgICAzMixcbiAgICAgIDQ0LFxuICAgICAgMTA5LFxuICAgICAgMTc1LFxuICAgICAgMTk3LFxuICAgICAgNzEsXG4gICAgICAyMTcsXG4gICAgICAxNzgsXG4gICAgICAxMjMsXG4gICAgICAyMzYsXG4gICAgICAxMjEsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaTNwZklHRUkyU204RUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtySk8zYkl6SjVCTkgwMHdOME14ZFRrZmRYck9jaGk5VitSK3RjSkUzemc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3lZQTA2c2UreVI2bWQzaEZORWxhMEVMTVFOem8rMkRBR2NaK0Z2N3pRRFZHYnZUa3A3dkNtN1NHYnNnVDM2SlFLRlV1Z2dFREhxMVdUbk5uTHorQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidDZmdVZKOXVBM1JzUWc3Zk5QSzlaK1RVeEpETGtIWlhmb3p3R2k5dGFjVElNa3FZRE1jSldYcTZqN1I0T0RWZXNjYm1LNTRhQUtNV3Vac3l3ZlhmaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTQwNDc0Njc6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDE1NjgyMTQxODAxMzozNkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNDA0NzQ2NzozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MzcyMzA0XG59Igp9"  // PUT your SESSION_ID 


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
