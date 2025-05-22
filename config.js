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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_40_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc0LFxuICAgICAgICA4MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDczLFxuICAgICAgICA0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc3LFxuICAgICAgICA2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA2OSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDYzLFxuICAgICAgICAyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICA5NixcbiAgICAgICAgMTM3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVZ5VGVGeWw0VmhRWC91d1M2cndtbk5OYTk2VG5sVGNZK2lsVkJBQlM3Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSWtWOUstR3JTWC1TbVA0VnZEVTBoQVwiLFxuICBcInBob25lSWRcIjogXCI2NTdjZWI4MC04ZTE2LTQ2NDQtOThmNS03MzhmYmU3OWU2MDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgNTYsXG4gICAgICA4OSxcbiAgICAgIDI0LFxuICAgICAgMzksXG4gICAgICAxNjMsXG4gICAgICAxMDUsXG4gICAgICAxNTksXG4gICAgICAxMDEsXG4gICAgICAyMjksXG4gICAgICA2OCxcbiAgICAgIDc1LFxuICAgICAgNzksXG4gICAgICAxODksXG4gICAgICAxODIsXG4gICAgICAyNyxcbiAgICAgIDIzLFxuICAgICAgNjEsXG4gICAgICAyMzUsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDExNyxcbiAgICAgIDAsXG4gICAgICAxNzEsXG4gICAgICAxOCxcbiAgICAgIDUwLFxuICAgICAgMTI4LFxuICAgICAgMTQ2LFxuICAgICAgMzMsXG4gICAgICAyNDIsXG4gICAgICAxMTgsXG4gICAgICAxNzAsXG4gICAgICAyMjAsXG4gICAgICA0NyxcbiAgICAgIDI2LFxuICAgICAgMTM0LFxuICAgICAgMTU4LFxuICAgICAgMTM0LFxuICAgICAgMzUsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbTNwZklHRUt2ZnZjRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtySk8zYkl6SjVCTkgwMHdOME14ZFRrZmRYck9jaGk5VitSK3RjSkUzemc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicmtMWm5hczErdkRuWnZCaDJnR3JGME1tR3dnb1ZyMVFUa1ZIazVZNHZoeW9FZTlxSjcyVTd3Y0tuQWZuV25saWFYblEvdFFKdmRmYzdST2gxWWpUQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL0RSV0xnL0JSRkhTUjNXZmxmRVNiUkZWVGNnR2Frd3g2bjNkR09xeGFxa3Z4MENLeWF4K0I1Y0YxZ29XVFlFU2tZU2V5Y1pJVGIzY28vRnNJQkQyaEE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTQwNDc0Njc6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDE1NjgyMTQxODAxMzozN0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNDA0NzQ2NzozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3OTM5MjQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXRYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJdFcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMREJXK2pUNHJlbGIzVW9vbHpMYmQzVUhIMngxWXZGUkEzcFJSNTlkK0EwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTAzMDEzODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl0WC5qc29uIjogIntcImtleURhdGFcIjpcInhiRGlsd3c0ZFd0dEU5ZmtCS3psSDgzUFJ0akppV01xemRjRUhqY3ZzNnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1MDMwMTM4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzkzOTE5MjEzN1wifSIKfQ=="  // PUT your SESSION_ID 


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
