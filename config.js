const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'ab5STSaQ#kBuTelkwEU2kwYFu3nTD0wxstiCINRRRzr7se_cqJpk', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94775228948',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94775228949'    // Enter Your Bot Number
};
