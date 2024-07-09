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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_59_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMzksXG4gICAgICAgIDg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg1LFxuICAgICAgICA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieXFLZUhSQUdIeXRXdlJjODVCeDFYWll2VXhLRHFRejdHRnZzSG0zUHE2ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDc4MTU4ODI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MDIwMEE4QjAzNzg4MjdBRDM4MTY0MzRFRjg1QTVENlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MTkxMjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDc4MTU4ODI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RDRENEVDREM5QzkyQzk4RTNFQ0Y4N0IxRTAwMTY4NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MTkxMjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidE1ETnlhRDlRVWVHd3ktLUhuSGYyZ1wiLFxuICBcInBob25lSWRcIjogXCI5YTk5YTVjMC01YzBhLTQ4ZDQtODBlNC1jMjJiMzc4ZWQzOTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICA5MyxcbiAgICAgIDE5MyxcbiAgICAgIDI1MSxcbiAgICAgIDkxLFxuICAgICAgMTUwLFxuICAgICAgMjUwLFxuICAgICAgMTY4LFxuICAgICAgMjAxLFxuICAgICAgNzAsXG4gICAgICA5NSxcbiAgICAgIDg4LFxuICAgICAgMjUzLFxuICAgICAgNDcsXG4gICAgICA0MixcbiAgICAgIDEwOCxcbiAgICAgIDIwLFxuICAgICAgMjEyLFxuICAgICAgNzQsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAzNSxcbiAgICAgIDgwLFxuICAgICAgMTY0LFxuICAgICAgMzYsXG4gICAgICAxNTYsXG4gICAgICAxMzQsXG4gICAgICA0OCxcbiAgICAgIDEzNCxcbiAgICAgIDgxLFxuICAgICAgMTAwLFxuICAgICAgMTMsXG4gICAgICAxOTcsXG4gICAgICAxMjcsXG4gICAgICAxMTMsXG4gICAgICAyNSxcbiAgICAgIDIzNixcbiAgICAgIDEwMyxcbiAgICAgIDE4NSxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjYyRURWOTJKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDc4MTU4ODI2OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MzM0ODQ1NDEyOTg0MjoyMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLqp4HgvJLimKxBIFZFUklGSUVE4pisQ09NUkFEReKYrOC8kuqnglwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01EOHBPVUNFTk9UdExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidjMySEE4dThmZU1IY0Z1dTA0cTBuZEQxTTlBSjJqUy9uK1FkMC9Tc0ZWdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlZG5wVjUvZUpnZlFHRWg2MUhiQUx6R2pIejFqUlQ2K0VDSnNxS2xMOXZ2VU5ubHlwNXpRZ00vU3o0RXhnVWZnQnR5dmg5Mk9LYXpRb21QOUpiZE1Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTTkVQRHVyd3BwMWoyK1o3NThJS1BOeGlyNVBoVTFkbnZGSVV2K2VNYndoZStjeVRyTEZReVdtVzJUTkt5SDVJUkxqYk9SRnErRVR4bkNPa0RuVW5BZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDc4MTU4ODI2OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTE5MTI3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-47682641-f7fe-4016-bb9d-4c17da79a5fb",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "lunar",
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
