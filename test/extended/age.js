import sel from '../../data/selectors';
import {name,gender,age,story} from '../../data/testData'
import inputValues4 from '../../helpers/methods'

describe('Age field suite', function () {

    before('Open App', function () {
        browser.url(''); //open baseUrl
    });

    describe('Placeholder', function () {

        it('TC-XXX Placeholder is correct', function () {
            $(sel.name).setValue(name.default)
            $$(sel.radioButtons)[gender.he].click();
            $(sel.age).setValue(age.default);
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-027 Describe positive cases', function () {
            browser.refresh();
            inputValues4(name.default, gender.he, age.default, story.comedy)
            $(sel.submit).click();
            let tryAgainBtn = $(sel.tryAgain).isDisplayed();
            expect(tryAgainBtn).toEqual(true);
        });
    });

});