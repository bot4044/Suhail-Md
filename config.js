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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_21_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInkzOWIvUlo2aUZ5NWsrU0ZzdTExTThERFBIMW9TaFE5SjZkSithOEk4OFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1KMFVwemZoUXp1aEozLVNDMExTYWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWJlNDQ3ZjUtOWYwOC00YmQ4LTk4NjItNzVjZWE5YmNmZTQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMTQyLFxuICAgICAgNjgsXG4gICAgICAyNDcsXG4gICAgICA0NixcbiAgICAgIDExNixcbiAgICAgIDIwOCxcbiAgICAgIDIyNSxcbiAgICAgIDE1MixcbiAgICAgIDIyOSxcbiAgICAgIDIxOCxcbiAgICAgIDE4MyxcbiAgICAgIDQ4LFxuICAgICAgMTIwLFxuICAgICAgMTUsXG4gICAgICAyNCxcbiAgICAgIDE4MSxcbiAgICAgIDI1MixcbiAgICAgIDIzOCxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMTIxLFxuICAgICAgMTUxLFxuICAgICAgNTksXG4gICAgICAxNjksXG4gICAgICAxNzUsXG4gICAgICAyMzMsXG4gICAgICA5LFxuICAgICAgMzMsXG4gICAgICAyNDIsXG4gICAgICAzNSxcbiAgICAgIDMzLFxuICAgICAgMTU1LFxuICAgICAgMTg3LFxuICAgICAgMjUzLFxuICAgICAgMTY4LFxuICAgICAgMjE4LFxuICAgICAgMjUyLFxuICAgICAgMjQ5LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxZTTZLVFhOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTQwNDc0Njc6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDE1NjgyMTQxODAxMzozMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQMnUzV2tRemVyK3dBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRsT2QwQmlkY215anRIQkJZZURFSnJXYXFGUzJVNEZyQll2NklMWkJnVjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU1Zjc3VjcTJsNDlCZEkxS25HVFVUT3BWQUF3S05laVRXWVhhRlFGUk9LYjlBenViU0JaNFhQTHhiQkdRazdJOGdDQmFPZTdFN0VXbElrbjRMTGN2Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYmZ0Y0lWelhpNzNkNUZNcGRKcDVXUThjVUdyZ0diRFhEMU10QUdFYzd0TnpQTEQyb1RoYTB5TmY1OUZ4aWJyMlk2K21KUTBhOExWMUx0QlFhWUo1aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY5MDg0OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQbFJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBsUi5qc29uIjogIntcImtleURhdGFcIjpcImZqQlNDL0FNVWdpdERocmVKK1JUM2tSalF6TXhSck5ETUp3UDBKWi8reHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjIxNzMwNjg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY5MDg0MzQ4NzFcIn0iCn0="  // PUT your SESSION_ID 


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
