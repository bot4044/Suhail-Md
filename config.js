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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_41_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2NSxcbiAgICAgICAgNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDksXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4LFxuICAgICAgICA1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk3LFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNixcbiAgICAgICAgODksXG4gICAgICAgIDQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMixcbiAgICAgICAgMjIzLFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzWGdvbml4YkhhbzY2QkltU1F3ZUVkc3NjOGdKeGh2MGZudjlGVWdSQXgwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFTVVsMlZCcVNxaTJDR1UtWTA3WEJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImMzYjEwMTQ5LThjZTktNDA4NC1iYTFkLTM3MGY0NjAzMTI3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAyMjcsXG4gICAgICAxMTMsXG4gICAgICAzMixcbiAgICAgIDIzNixcbiAgICAgIDksXG4gICAgICAyMTUsXG4gICAgICAyMCxcbiAgICAgIDIyMCxcbiAgICAgIDIyOCxcbiAgICAgIDE0MCxcbiAgICAgIDI1LFxuICAgICAgMTA4LFxuICAgICAgMjM4LFxuICAgICAgMjM1LFxuICAgICAgMTk2LFxuICAgICAgMTIzLFxuICAgICAgMzIsXG4gICAgICA2OSxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMTUyLFxuICAgICAgMTQwLFxuICAgICAgMTA1LFxuICAgICAgNjMsXG4gICAgICAyNDYsXG4gICAgICAxMzgsXG4gICAgICAzNixcbiAgICAgIDEzOCxcbiAgICAgIDE5MixcbiAgICAgIDk4LFxuICAgICAgMTAxLFxuICAgICAgMjYsXG4gICAgICAzLFxuICAgICAgMTAzLFxuICAgICAgODgsXG4gICAgICAyNixcbiAgICAgIDIxNCxcbiAgICAgIDIwMixcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1UdU1zQ0VQSEMwY0VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0QU9TWjAwTkE1V2I4K3pQWlNyOHBsTnFiRFhuZERqR2J1TmgxVmVWR0FzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhNTkNKNEtGWFRaajlrTFZWd3VaVVlCRTVRSUY2Y2s0NFhkMG5lMHVTVjdpTHpxOFJqbm9XTWJ4ZHZ0b2ZCd0JIWnRFd1Rhdm5PbDY4UVYyVlVHaENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1Wc1VEa2hEcWVkZWRkeHRoUFdhdWh4UTNWYjNFM1pYZ1g1YXFORDdTZzFwYldlS3pkRUh0VSs1WFFhNW9lZEhmRVB2VlhnL0FpTE5EQmUzRTRPaWl3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTk0NDAzNjEzNDIwOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzM1MDQzOTc4NDg1ODk6MTNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDM2MTM0MjA6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4MjYzMjg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGMyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYzAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0NWZITVhDOVpGM1RKK1NjaUNJRmFVeVBtWkFWT25JaG15N2dia0lXTGpzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ4MjYyMjAwNTgwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGMyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWWFlK1BNRlQ1UU9oRXBRN1VnNUdjMlB3SkV2dWN4OXBabWZBcnNjWlBSZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODI2MzI1OTEyM1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQXdBQUhjMS5qc29uIjogIntcImtleURhdGFcIjpcIlIrVHozNTEvckFHSzVqOTFndFc4YUo1bWRPTG9zVjNDNTRVWkwwUHp6cWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxMl19LFwidGltZXN0YW1wXCI6XCIxNzQ4MjYyMjY3NDYwXCJ9Igp9"  // PUT your SESSION_ID 


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
