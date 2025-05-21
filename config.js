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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_18_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDY2LFxuICAgICAgICA1MixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyWE5WOHEyZmVVYk5ITTE1TGZtSHZ2VTNoYU0ySDR3R1VBcGM2cjBLMi9JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlekZNT3dTY1M2NnJaZFV5Ni1VMzl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImM0ZjEwNmQzLWNhY2ItNGU3Ny1hMDc5LTU2ZGNkZGUzYjAxZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAxNCxcbiAgICAgIDIzMSxcbiAgICAgIDk5LFxuICAgICAgMjA1LFxuICAgICAgOTAsXG4gICAgICA4NSxcbiAgICAgIDQ0LFxuICAgICAgMjMzLFxuICAgICAgMTIyLFxuICAgICAgMjU0LFxuICAgICAgMTk3LFxuICAgICAgMjIyLFxuICAgICAgNTAsXG4gICAgICAzMSxcbiAgICAgIDIzNSxcbiAgICAgIDQzLFxuICAgICAgMTc3LFxuICAgICAgMjE1LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICA1NyxcbiAgICAgIDE4NCxcbiAgICAgIDcyLFxuICAgICAgOTksXG4gICAgICAyMjMsXG4gICAgICAxMDAsXG4gICAgICAzOSxcbiAgICAgIDE4NSxcbiAgICAgIDE1NSxcbiAgICAgIDEwNSxcbiAgICAgIDIsXG4gICAgICA5LFxuICAgICAgMjQ1LFxuICAgICAgMTQ5LFxuICAgICAgMjIsXG4gICAgICAzMixcbiAgICAgIDIwLFxuICAgICAgMTQ3LFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJaVR1TXNDRUtlb3RjRUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRBT1NaMDBOQTVXYjgrelBaU3I4cGxOcWJEWG5kRGpHYnVOaDFWZVZHQXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTVFxcTVTUHord1dPeGNDZmh1UVIrb2kydVk2OFpNbkpVbkdhcjh0dS9kN2drbU13cUt2YzFXVTJmQkIrazJ1YXF4MVo3N2NULzFyRElZc21seHlOQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicVB2Qkd0V2l1ZzFoeEhiTUxzMUQ4aDJUOCttRy92V2VETG4xWFJ2QU1abEhVam0rK3ppdjNvRm9ZTWxraVNpNHlIN1VXT3Y3aTh1aDI5QzZBZmliRHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDM2MTM0MjA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTczNTA0Mzk3ODQ4NTg5OjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDM2MTM0MjA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDc4MDExMzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEMUZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQxQi5qc29uIjogIntcImtleURhdGFcIjpcIm9pRkpsZWVsaTZKSGdCMVFGVmdSbEI3WWR1YW1VNkJZRUV3M3QzZlQ5azg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc3NDY2MTUzNDVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEMUQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwWjA1V0NpTk9PQjR6TkJubUYrcWFSMmpraUJGZGp1YzhLRW84NXpEREdJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ3NzQ2ODQ4NjY0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDFGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiejRaNnFDd3NzeVpXQ3YrM0YwcTVPQUhocllRdzVNUFduQXJycHhLMnVpUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0Nzc3MDA2NzUzN1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQWdBQUQxQy5qc29uIjogIntcImtleURhdGFcIjpcImRyNWlGMm1jRkp1N3pyTit4ODBNaHd1Yi9jTnhadVpKeGRsLzZuRkwxMVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCw4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc3NDY2NTMyMjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFnQUFEMUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpYUVUWUlNNVkyeTlIQXF1eDJVOC94SFlOV1VYNFV3OXFjaFFsY2hYdVRvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsOF19LFwidGltZXN0YW1wXCI6XCIxNzQ3NzQ4MDczMzUxXCJ9Igp9"  // PUT your SESSION_ID 


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
