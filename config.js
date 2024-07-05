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


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_14_09_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MixcbiAgICAgICAgOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPNE9vMG56L09jSSs5TklvVTdkZDdUOHkvMlQxSlVmSDdxOVlwYngrMGYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyR3A2QmhkM1R4ZXJFQVlkT0JNNGJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImVlNmMxNTQwLTIyOTItNGE5MC1hMGIwLTFlMGFkNjg4MzE2Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICA1MyxcbiAgICAgIDkzLFxuICAgICAgMjksXG4gICAgICAxNzMsXG4gICAgICAyMTIsXG4gICAgICAxMjQsXG4gICAgICAyNCxcbiAgICAgIDIxOSxcbiAgICAgIDU0LFxuICAgICAgMjAzLFxuICAgICAgMTc5LFxuICAgICAgMTc3LFxuICAgICAgODUsXG4gICAgICAxMjMsXG4gICAgICAxODQsXG4gICAgICA0NyxcbiAgICAgIDE0MixcbiAgICAgIDYwLFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDExNyxcbiAgICAgIDE5MixcbiAgICAgIDkzLFxuICAgICAgMTg3LFxuICAgICAgMTU0LFxuICAgICAgMzcsXG4gICAgICAxNjgsXG4gICAgICAxNjAsXG4gICAgICAyNTMsXG4gICAgICAxNjksXG4gICAgICA3NCxcbiAgICAgIDE4OCxcbiAgICAgIDk0LFxuICAgICAgMTM2LFxuICAgICAgMjI2LFxuICAgICAgMjMsXG4gICAgICA5NCxcbiAgICAgIDg1LFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1ONFJLWk1aXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MDkxMjIxMDM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJtcl9oNHhcIixcbiAgICBcImxpZFwiOiBcIjEyMDgxNzkzMzcyMzk5OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXNnM4d0VFS0g5bjdRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUHlsOXByNnRTYWRjbEtwOTZRbDhYby93dUtkbFhsWkdkQU1hOFVzQ0p5dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIcUlNa256WmFJYXFPN005QjQyQmhkRmtTUS9NTldWR1l0cHJQUm9iL3hobTNKaXJkd2czbzN0V1J2QURmWlBuRkxwWlJrU2dCSzhrT0wveVNySmpEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSODF5UUpvcThRSlFBNGZ4SHRUK0dLRjdYODRwVzE1M25HSW0zMTZUUGMrRE0yZVY0Q1FKdGVmay9aMmdKWkdNUHZZNGRQa3l6YjdvTUJ5TUxhZzRBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MDkxMjIxMDM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxODg1ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLVU5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtVTi5qc29uIjogIntcImtleURhdGFcIjpcImUveGthNmhzR1ZnRWJTWS9XS3BFRlZDR3ZleUJMR1NCWDloY0JabjlwQWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzMzk2ODM4OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTg4NTIyMDQwXCJ9Igp9|  ""  // PUT your SESSION_ID 


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
