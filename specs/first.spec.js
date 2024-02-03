const { browser } = require('protractor')

const expect = require('chai').expect 

describe('First suit', function () {

    it('first test', async function () {
        await browser.get('https://dzen.ru/')          // откроет браузер
    })
})

