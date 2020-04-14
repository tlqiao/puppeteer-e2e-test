module.exports ={
    launch : {
        headless: false,
        slowMo: 150,
        args:['--window-size=1920,1080'],
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        devtools: true
    },
    browserContext : "default",
    exitOnPageError: false
};