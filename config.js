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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_29_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDkxLFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklmbk8rTjVHajB6eng4RXhDUTQ0YkE0dzNHQUtIbnpESEpHSW5ZMmt4M2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRLd1hEdnp5UXR5VXFYYlBDOHVteGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2ZhODIzMjUtYzZhMy00NjcwLTk4ZTYtNDQ2MjM5ZTU2OTk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDE2MCxcbiAgICAgIDcsXG4gICAgICA3MSxcbiAgICAgIDEzMixcbiAgICAgIDE2LFxuICAgICAgODcsXG4gICAgICAwLFxuICAgICAgMTk5LFxuICAgICAgMjU0LFxuICAgICAgNDQsXG4gICAgICAxNjUsXG4gICAgICAxMzYsXG4gICAgICAyMDEsXG4gICAgICAyMTUsXG4gICAgICAyMDQsXG4gICAgICAxMTUsXG4gICAgICAxNTIsXG4gICAgICAxMjIsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICA2OCxcbiAgICAgIDE4MCxcbiAgICAgIDI0LFxuICAgICAgMTM3LFxuICAgICAgNTIsXG4gICAgICA1NixcbiAgICAgIDk3LFxuICAgICAgOTQsXG4gICAgICAxNTIsXG4gICAgICAxMjAsXG4gICAgICAxNDIsXG4gICAgICAyMjEsXG4gICAgICA3NixcbiAgICAgIDE2OSxcbiAgICAgIDIxNyxcbiAgICAgIDEwMCxcbiAgICAgIDE0MyxcbiAgICAgIDU5LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3IwOE4wQkVQM04yY0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPWEIySUdtdXNzM0hjbHRsZ3ZFNC8zcjR6ZjNNZ25ZZ3I1dXc3YkJ3cm40PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNDbXZ5UzlYMWxhTmlzZlVGVjFUWkhKdS9kcDMvbVpMWG9CZENKL0F0N3dHVklmY0RrcmVjUzZBcFJFRSt6QkpBV0d3b1JqWFJJZXpNbnI2L3hyQ0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBaTXo1S0xBeGw3QzV4NW92OHlicFlCakEzU0RvY3VCdk45Wi9wK0ZsaTZHa2RXZnliOEJSYmlOSnlZMHVCR1RWa1hzZEUvVWt6TGVXNThYYmUyOENBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjkxNDA4NzUwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDM4ODI3MDE1NDU3MDA6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiyZXJvMmRzZzNocqRyaPMrC3Pu8yIzJDGsvCdkI3Jls2gyozhr63igbDCucKy8J+MuOKciFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjkxNDA4NzUwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODM5NTc3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5BOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkE4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicDE3QS9LSWNDVmRoTzNldzZWSjl6T2VBWU1JSWZQbnJPcGJXeGZLUjVOaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjUzMjA1NTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODM5NTc4MDE2OFwifSIKfQ=="  // PUT your SESSION_ID 


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
