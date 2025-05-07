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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_00_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICA1NixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg5LFxuICAgICAgICA2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDcyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDkxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICA3MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk5LFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUc0MzUHc4YzZRR1hoYTlXZHQzTU5kYXZ6VXJIcVJac0NsMitqK05wNVU4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI5MTQwODc1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUE4MTc4MjIyOEFCRjI4QzJCRTIxRDU2OTBFRDBFRDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2NjEyMDA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRudGRCYWw0UllLXzd2c0VUX1dNX2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTE4MDg3YTktNzYwNC00NzVmLWJlNmMtNTgwYWUxYWM3NWZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgMTczLFxuICAgICAgMjM0LFxuICAgICAgMTgxLFxuICAgICAgNTUsXG4gICAgICAxNzUsXG4gICAgICA3NCxcbiAgICAgIDEyMixcbiAgICAgIDY4LFxuICAgICAgMTU1LFxuICAgICAgMjE0LFxuICAgICAgMjMwLFxuICAgICAgMTA4LFxuICAgICAgNTQsXG4gICAgICA0NixcbiAgICAgIDE0NyxcbiAgICAgIDEzMCxcbiAgICAgIDM1LFxuICAgICAgMjAxLFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAyMzMsXG4gICAgICA3MCxcbiAgICAgIDE2MixcbiAgICAgIDI1LFxuICAgICAgMTgxLFxuICAgICAgMTgwLFxuICAgICAgNDMsXG4gICAgICA3MSxcbiAgICAgIDg0LFxuICAgICAgMjAzLFxuICAgICAgMjIxLFxuICAgICAgMTMsXG4gICAgICAyMTQsXG4gICAgICAyMjUsXG4gICAgICAxMzAsXG4gICAgICAyMjYsXG4gICAgICAxMjgsXG4gICAgICA4OCxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyNlJDU0JYQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjkxNDA4NzUwOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDM4ODI3MDE1NDU3MDA6MTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQ3JhenktTXVuZGHigbDCucKy8J+Wh++4j/Cfqbfwn4yP8J+Mu1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mMDhOMEJFSnplN01BR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT1hCMklHbXVzczNIY2x0bGd2RTQvM3I0emYzTWduWWdyNXV3N2JCd3JuND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGcmthZ0ZpZlFKTE1vcllSUjVtNWxYczhrUUdXL1hRYml3RVh4OFgvSUxzY2M5anJTMGV3UmVtN3hmY2JhTnJnZFFZZWRIOW5sclNadGFSZVd0YkJCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPQjBKczNPWUtEMjBRSVBybldoSzZZbDZxYVZuOVBDdXNzT095NVJtZGRyVkxWSjIxQXJIRE93QXdvWjhSNzR4UjdzQmNPdCtxSkw1WUZkdzZzOU5DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTE0MDg3NTA6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2NjExOTk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSStyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJK3IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrTDZYVk9RWmNPMk4xOTZUbXl4ems2T3VGRkdTWlVHYXV3dU9EaXVvdWkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NTMyMDU1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2NjEyMDAzODcxXCJ9Igp9"  // PUT your SESSION_ID 


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
