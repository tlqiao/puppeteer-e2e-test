module.exports= {
    preset: 'jest-puppeteer',
    setupFilesAfterEnv: ['expect-puppeteer','./jest.setup.js'],
    testRunner: 'jest-circus/runner',
};