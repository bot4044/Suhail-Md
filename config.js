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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923046316500";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_55_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI4LFxuICAgICAgICA2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQxLFxuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDc0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA4LFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNixcbiAgICAgICAgMjgsXG4gICAgICAgIDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMxLFxuICAgICAgICA3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUwLFxuICAgICAgICA1MixcbiAgICAgICAgMyxcbiAgICAgICAgNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIVisrSDlFZGdiUktMbmFDQ2ZGMCtlTEh1SHpnbDlWUDVSZk1jOHBDYmhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYczZJUnRWMlRIeXhKQVJtNEVvOEtnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU1OTliYTliLTkwOTMtNDgxNS05YTdjLThkYTg1N2M5YjY4Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICA5OSxcbiAgICAgIDE0OSxcbiAgICAgIDEyNSxcbiAgICAgIDEwNyxcbiAgICAgIDk4LFxuICAgICAgMjQ4LFxuICAgICAgNTYsXG4gICAgICAxNjgsXG4gICAgICA0OCxcbiAgICAgIDIyMCxcbiAgICAgIDIyOSxcbiAgICAgIDk3LFxuICAgICAgMzQsXG4gICAgICAxMjcsXG4gICAgICAxOCxcbiAgICAgIDI1MyxcbiAgICAgIDUxLFxuICAgICAgNjEsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMTc1LFxuICAgICAgMjQ3LFxuICAgICAgMjM4LFxuICAgICAgMjI4LFxuICAgICAgMTgzLFxuICAgICAgMjUyLFxuICAgICAgMTkzLFxuICAgICAgMTkzLFxuICAgICAgMTA2LFxuICAgICAgMTc5LFxuICAgICAgMTY3LFxuICAgICAgNDcsXG4gICAgICAyNDksXG4gICAgICA4MyxcbiAgICAgIDUsXG4gICAgICAyMDksXG4gICAgICAxODgsXG4gICAgICAyNSxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmY5NUlBQ0VML1Y1c0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkUlVFbFdGbUJLVUFENEVHMGJTMGE0eFM2VjlzTnYvY053VHpDbUlQOUJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjR2ZXlsUUFOWUQvVkw1YUFwZzlLNEllNVpnS2ZQYTYvMmV5cGRFL0QveTZ6MmZxc0xBalVRTHgyazhmd3pIR2x3dkxmNU93L0pVdFlrUG9qaG4xRUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpWaThRRFVBRVJDWXZMNjhJZyt4UzhJN29hVXF3Qkd3Y1ZtNFB2RGFlM3dNdEpvUHhGaWVLZDRHM0N3L29BU2tkK09waG5zTzNkd1l5aVZ6RWtxK0NBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDQ2MzE2NTAwOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWxoYW1kdWxpbGxhaFwiLFxuICAgIFwibGlkXCI6IFwiMjAxMDM5Mzk5NjI5MDUxOjI2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDQ2MzE2NTAwOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4NjA5NzMxXG59Igp9"  // PUT your SESSION_ID 


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
