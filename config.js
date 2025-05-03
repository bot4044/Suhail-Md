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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_23_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY5LFxuICAgICAgICA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDM0LFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICA4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc1LFxuICAgICAgICAzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFpSGtMVTNzdTZsSWNTRUwrS3hxZkZaYWtIWHJOZGlaSCtjQURqWXd6WjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtUSDBlLVlVUlRHMG9JOF9sWXNEZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjQ1MTA4ZDMtYjZkMi00M2MzLThlM2MtOTZjZDUyOGU5YzMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTEzLFxuICAgICAgMTA0LFxuICAgICAgNixcbiAgICAgIDczLFxuICAgICAgNjMsXG4gICAgICAxMzMsXG4gICAgICA4LFxuICAgICAgMTU0LFxuICAgICAgNDgsXG4gICAgICA2LFxuICAgICAgMTEsXG4gICAgICAwLFxuICAgICAgMTczLFxuICAgICAgMTE4LFxuICAgICAgMTQsXG4gICAgICAyMzUsXG4gICAgICAyMzcsXG4gICAgICAyMTIsXG4gICAgICAxOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgNzcsXG4gICAgICAxMjgsXG4gICAgICAxNjIsXG4gICAgICAxODAsXG4gICAgICA5MCxcbiAgICAgIDExMyxcbiAgICAgIDIwOCxcbiAgICAgIDgxLFxuICAgICAgNTksXG4gICAgICAyMDQsXG4gICAgICA5LFxuICAgICAgOCxcbiAgICAgIDIsXG4gICAgICA5NSxcbiAgICAgIDIwNCxcbiAgICAgIDE4MixcbiAgICAgIDE2MyxcbiAgICAgIDg4LFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1JaSjJGNzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2NzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwMTU2ODIxNDE4MDEzOjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BtdTNXa1EyK3pXd0FZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVGxPZDBCaWRjbXlqdEhCQlllREVKcldhcUZTMlU0RnJCWXY2SUxaQmdWMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4RjhMOUZWejR5RXZLTnE2TFFJYlh1UWpKYnI4K1hmTkZCTExESVk3eWJQSUtGMkZqb1RHTFhocHFycGFScEhETmJIbEtOYzN5cWs2d2FESC9kUnFCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxVlJBdXhzQk9COFQ3dG9iRFVuTnVyM3VRZWgvN0ovN0ZKcndSelZtdzh0VWRXZHRrdklZRjc1VGFUN003WmdSeFhYY25MTHpZRXdnZ3piQUMzczZodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTQwNDc0Njc6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjI1MzQwN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
