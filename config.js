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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_37_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICA2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDQxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc2LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExLFxuICAgICAgICA3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2LFxuICAgICAgICA0MixcbiAgICAgICAgODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAzNixcbiAgICAgICAgMjM0LFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTDZ0ckpLcitqY1pUQWtvaThrbnlHT2x5REdCSGlTNUQ2LzI4ajZZN2Iwaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQmI3aTJONmlRWFM1dUUxVTNFaXExUVwiLFxuICBcInBob25lSWRcIjogXCJiNTA3YjgyNi0zMDZjLTQyZjctYWM5My1jNWIwMmJmYWU5OGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMjMxLFxuICAgICAgNDUsXG4gICAgICAyMjIsXG4gICAgICA1NyxcbiAgICAgIDkwLFxuICAgICAgMjQ3LFxuICAgICAgMTUwLFxuICAgICAgNzMsXG4gICAgICAxMjUsXG4gICAgICA5MCxcbiAgICAgIDIsXG4gICAgICAzNSxcbiAgICAgIDExNCxcbiAgICAgIDEwNCxcbiAgICAgIDQ1LFxuICAgICAgMjQ5LFxuICAgICAgMTk2LFxuICAgICAgODUsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAxMjMsXG4gICAgICAxMzEsXG4gICAgICAxNjUsXG4gICAgICAxMSxcbiAgICAgIDE3MCxcbiAgICAgIDEyLFxuICAgICAgMTIwLFxuICAgICAgMzksXG4gICAgICA3NyxcbiAgICAgIDEyMixcbiAgICAgIDIxNyxcbiAgICAgIDE4LFxuICAgICAgMTAsXG4gICAgICA2NSxcbiAgICAgIDIzOSxcbiAgICAgIDE1NyxcbiAgICAgIDIxMCxcbiAgICAgIDI1NCxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzRVJSWTJYSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHV1M1drUW1vcjR3QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUbE9kMEJpZGNteWp0SEJCWWVERUpyV2FxRlMyVTRGckJZdjZJTFpCZ1YwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdQNW1KNTNPRExES1RwOFQvK3RkbW56TGhZZmhoTURmOS9JaGxmR0poRW1YVkdhNUtvdDVNVXYzelRlaWlTUHRIZjdmZXJaeU5rOTdLL3FNTEQ0dkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNZeUNMUnN1UjFBTW11Mkg5NjUxbWF2dWlpWW93UEtuWjJKUFhNZm5RY2FHbDlwNitsSWJKRmZWTEc5UFMvdEFOcDFtNWFVdnhaRmVrYjFtZk4ybUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNDA0NzQ2NzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2Nzk3ODUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnd6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKd3ouanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
