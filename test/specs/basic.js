const assert = require('assert');
const { expect } = require('chai');

describe('GOOGLE SEARCH', () => {

    it('should go to google.com', () => {
        browser.url('https://google.com');
    });

    it('should check the title', () => {
        const title = browser.getTitle();
        //browser.pause(600);
        expect(title).equal('Google');
    });

    it('should fill up search input field', () => {
        const element = $('//input[@name="q"]');
        element.setValue('Kateryna Omelchenko');
        browser.pause(1000);
        browser.keys("\uE007");
        browser.pause(1000);
    });

    it('should check that element exists', () => {
        const element = $('//div[contains(text(),"Kateryna Omelchenko")]');
        element.isExisting();
        browser.pause(1000);
    });

});