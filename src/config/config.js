require('dotenv').config();


module.exports = {
    token: 'MTI4MzU5MzMyMTIwNTQ2OTMwNg.GmwfVA.MJJxC1p0vTICYc5Q8M4uKDaw67H3PVvyeKJMrY',
    clientId: '',
    guildId: '',
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    mongoUri: process.env.MONGO_URI,
    spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
