import sel from '../../data/selectors';


describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url(''); //open baseUrl
    });

    it('TC-026 Submit button is enabled after fields 1-4 filled in with valid values', function () {
        $(sel.name).setValue("Winnie-The-Pooh")
        $$(sel.radioButtons)[0].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();

        browser.pause(1000)
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 Submit button is enabled after fields 1-4 filled in with valid values', function () {
        browser.refresh();

        $(sel.name).setValue('Winnie-The-Pooh');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submit).click();

        browser.pause(1000)
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

});