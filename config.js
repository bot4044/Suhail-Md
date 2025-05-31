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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_39_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDUyLFxuICAgICAgICA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk0LFxuICAgICAgICA3MixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICAyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICA0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlRd0txV3UvTVNjbVYzdnl0TmdNNWE2SlZOZ3RMYVIxRlVRbHQzc2VJQXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm12cG1WalRtU0phRlllOVNjXzZ4QkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmVhZjRjMDItYzIyOS00MjUxLWIyMjUtNGMwZDQ0Yjc5ZWZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDIzNSxcbiAgICAgIDk0LFxuICAgICAgMjEzLFxuICAgICAgMTEwLFxuICAgICAgMTM4LFxuICAgICAgMjIyLFxuICAgICAgODQsXG4gICAgICAxNjYsXG4gICAgICAxMzgsXG4gICAgICAyNDgsXG4gICAgICAyMDgsXG4gICAgICA5NixcbiAgICAgIDIyMSxcbiAgICAgIDEwMCxcbiAgICAgIDEwOSxcbiAgICAgIDEzMixcbiAgICAgIDIzMyxcbiAgICAgIDIzMSxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAxOTAsXG4gICAgICAxMTYsXG4gICAgICAxNCxcbiAgICAgIDEsXG4gICAgICAxNjMsXG4gICAgICAxMzQsXG4gICAgICAyMjIsXG4gICAgICAwLFxuICAgICAgNzksXG4gICAgICAyNDksXG4gICAgICAxMDIsXG4gICAgICA4NSxcbiAgICAgIDk4LFxuICAgICAgMTUxLFxuICAgICAgMjIxLFxuICAgICAgMjI0LFxuICAgICAgMTE4LFxuICAgICAgNDgsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01xM3BmSUdFS0NtN3NFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3JKTzNiSXpKNUJOSDAwd04wTXhkVGtmZFhyT2NoaTlWK1IrdGNKRTN6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDTGlDeDlrQndOZHNxa3hVMHhDWmhFalEwdHRxR2kwYVh1M0pXaG1Md3VMdjZ6c1hCbmJZTUJQejE3NjdZVHFJVktvcERncWJuZzhXN1E1UGd2TUJEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCWVhmcmNta3docnk5TjFWT09OQXpuVllyN1ozaXRUSk5jMG5nb05PTVRBcWN6ZTNFaUFqVlNNYTM4MjI3U2RpaWJEUUwwZzFYeVdFV01KWmZXd0FqQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2NzozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwMTU2ODIxNDE4MDEzOjM4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDg3MzQ3NTdcbn0iCn0="  // PUT your SESSION_ID 


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
