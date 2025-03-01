const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUM4bER4N1BhaE9hYjFVUkFnZEZIb1FUL09hVVJ2WnE4VzlxbzZhMWxVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkxYTGtydncrM25MWXJiS25CY3V4bEtjN2lVbmVET2pCMEJwTTNrRCswaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvR0d6bFhqUFJpOFFyY3hvMlI5Ujc4UkNEUVhIN2IvYVdKenRoVTRGVFhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqOHJEcGwzOGcrWXFsNlZJb3VIQy9XemdDcWhKd0F1ZkhLRG9nc3NuRXlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLRmhRcmhWSDBTZ3lwaFRsV29mS3RhZTNwZkQ0SE1Nb25LMGVaTE5zMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg4VXZmb1V0c0NtTjl5S0xtZERhSGxxaFdsbDFQemlhZU5DSFVFYzk3Ums9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0F6anJiTktnTFBxUEN6aUVuSng2SmRPV2NGNnJLclp2SEZhVzVidEVsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkRHR1laSUdieUF1Y3hpS29ydlFLYmM4TU5wbkwwaUJVelhSejZmaE1IMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFvdmRVdDREazFWcWxrNWx3YWlZeVNuUXJJdUFCTTgwTEw0V2tHZnc4RHlTVEhUMTlGQ1Z0YmFDbWp0a3VRNkFXdnAwQlNmL0VSMHczMHJHYUFCckJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6Ind1djVCV2h5dGJ1bmFnNFdId1czYlNRK2xyU01wQWp5VjNHN0J1a2FHdU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxmUzAtdWVuU195dGtJTlY1LVViWWciLCJwaG9uZUlkIjoiZDhmNWVkOTAtOTcwZC00NWFkLWE4NTItMTUyOTE3OTg0NjExIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgvdTIrOU1lN2hPUUZhQ2pEMlBXWktybGFQST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1OTNybzVqaWRBeUNXRmUweDA4OERoOUUxcTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNE5TUkVEU0giLCJtZSI6eyJpZCI6IjIzNDgxNDc2NDg3MTQ6ODBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ042QjlhOEVFSVBYaXJ3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVZV3FONFRWZkM5QmVRMVpLZXBXWmtTdDFoTDY5TlBoeEtzSU9pNFdhbUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhUL1VGQnNMZUVNWWNJeWlHdnJGdG9wSTJpS1dObG9YNFBNRjg2Y3VXdm04ZXlVSmx6aGJjNGhJVXBwNGZwWm9zcjI2bXl1SlQxS0k4YjhRTjAwSkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYTGRxenRCTWdZT0lSb21SQ09pOGlLZFd3NGpwcjNTYnJUWUtXVG5PZmJMYjVSaEdaak5KSXJzaUE5dFF1S29tK2pqT3NYVVZRdCtKYkdzU1BGNVlBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDc2NDg3MTQ6ODBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWG1GcWplRTFYd3ZRWGtOV1NucVZtWkVyZFlTK3ZUVDRjU3JDRG91Rm1waSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjYxNjg0OH0=",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
