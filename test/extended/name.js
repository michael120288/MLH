import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name,gender,age,story} from '../../data/testData'



describe('Name field positive and negative cases', function (){

    it('TC-028 Name field placeholder = \'Hero\'s name"', function () {
        browser.url('');
        let field = $(sel.namePlaceHolder).getAttribute('placeholder')
        expect(field).toEqual(exp.namePlaceHolder)
    });

    it('TC-029 Name field accepts 1 symbol', function () {
        browser.url('');
        $(sel.name).setValue(name.oneSymbol)
        let field = $(sel.errorMessage).isDisplayed()
        expect(field).toEqual(false)

    });

    it('TC-030 Name field accepts 70 symbols ', function () {
        browser.url('');
        $(sel.name).setValue(name.seventySymbols)
        let field = $(sel.errorMessage).isDisplayed()
        expect(field).toEqual(false)
    });

    it('TC-031 Name field accepts letters ', function () {
        browser.url('');
        $(sel.name).setValue(name.name)
        let field = $(sel.errorMessage).isDisplayed()
        expect(field).toEqual(false)
    });

    it('TC-032 Name field accepts lower case / upper case ', function () {
        browser.url('');
        $(sel.name).setValue(name.lowerUpperCases)
        let field = $(sel.errorMessage).isDisplayed()
        expect(field).toEqual(false)
    });

    it('TC-035 Name field accepts digits ', function () {
        browser.url('');
        $(sel.name).setValue(name.digits)
        let field = $(sel.errorMessage).isDisplayed()
        expect(field).toEqual(false)
    });

    it('TC-036 Name field accepts special symbols ', function () {
        browser.url('');
        $(sel.name).setValue(name.specialSymbols)
        let field = $(sel.errorMessage).isDisplayed()
        expect(field).toEqual(false)
    });

    it('TC-037 Name field accepts letters with spaces ', function () {
        browser.url('');
        $(sel.name).setValue(name.nameWithSpaces);
        let field = $(sel.errorMessage).isDisplayed();
        expect(field).toEqual(false)
    });

    it('TC-038 Verify that name field can accept spaces in the end of letters  ', function () {
        browser.url('');
        $(sel.name).setValue(name.spaceInTheEnd);
        let field = $(sel.errorMessage).isDisplayed();
        expect(field).toEqual(false)
    });

    it('TC-039 Verify that name field can accept spaces in the beginning of letters  ', function () {
        browser.url('');
        $(sel.name).setValue(name.spaceInTheBeginning);
        let field = $(sel.errorMessage).isDisplayed();
        expect(field).toEqual(false)
    });

    it('TC-040 Name field accepts Russian letters ', function () {
        browser.url('');
        $(sel.name).setValue(name.russianLetters)
        let field = $(sel.errorMessage).isDisplayed()
        expect(field).toEqual(false)
    });

    // it('TC-041 Copy paste functionality  ', function () {
    //     browser.url('https://google.com');
    //     $(sel.google).setValue(data.name).keys(['command', 'a']).keys(['command', 'c'])
    //
    //     let field = $(sel.name).getValue(data.koreanLetters)
    //     expect(field).toEqual(data.koreanLetters)
    // });

    it('TC-043 Verify that name field can\'t accept empty name field  ', function () {
        browser.url('');
        $(sel.name).setValue(name.emptyField)
        let field = $(sel.errorMessage).isDisplayed()
        expect(field).toEqual(false)
    });

    it('TC-043 Verify that name field can\'t accept 71 symbols', function () {
        browser.url('');
        $(sel.name).setValue(name.seventyOneSymbols)
        let field = $(sel.errorMessage).isDisplayed()
        expect(field).toEqual(true)
    });

    it('TC-044 Verify that name field can\'t accept 71 symbols', function () {
        browser.url('');
        $(sel.name).setValue(name.seventyOneSymbols)
        let field = $(sel.errorMessage).isDisplayed()
        expect(field).toEqual(true)
    });
});
