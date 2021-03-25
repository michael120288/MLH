import sel from '../../data/selectors'
import exp from '../../data/expected.json'
import data from '../../data/testData.json'
import * as http from "http:google.com";

describe('Name field positive cases', function (){

    // before('Open App',function (){
    //     browser.url('')// open base url
    // });

    it('TC-028 Name field placeholder = \'Hero\'s name"', function () {
        browser.url('');
        let field = $(sel.namePlaceHolder).getAttribute('placeholder')
        expect(field).toEqual(exp.namePlaceHolder)
    });

    it('TC-029 Name field accepts 1 symbol', function () {
        browser.url('');
        $(sel.name).setValue(data.oneSymbol)
        let field = $(sel.name).getValue(data.oneSymbol)
        expect(field).toEqual(data.oneSymbol)

    });

    it('TC-030 Name field accepts 70 symbols ', function () {
        browser.url('');
        $(sel.name).setValue(data.seventySymbols)
        let field = $(sel.name).getValue(data.seventySymbols)

        expect(field).toEqual(data.seventySymbols)
    });

    it('TC-031 Name field accepts letters ', function () {
        browser.url('');
        $(sel.name).setValue(data.name)
        let field = $(sel.name).getValue(data.name)
        expect(field).toEqual(data.name)
    });

    it('TC-032 Name field accepts lower case / upper case ', function () {
        browser.url('');
        $(sel.name).setValue(data.lowerUpperCases)
        let field = $(sel.name).getValue(data.lowerUpperCases)
        expect(field).toEqual(data.lowerUpperCases)
    });

    it('TC-033 Name field accepts digits ', function () {
        browser.url('');
        $(sel.name).setValue(data.digits)
        let field = $(sel.name).getValue(data.digits)
        expect(field).toEqual(data.digits)
    });

    it('TC-034 Name field accepts special symbols ', function () {
        browser.url('');
        $(sel.name).setValue(data.specialSymbols)
        let field = $(sel.name).getValue(data.specialSymbols)
        expect(field).toEqual(data.specialSymbols)
    });

    it('TC-035 Name field accepts letters with spaces ', function () {
        browser.url('');
        $(sel.name).setValue(data.nameWithSpaces)
        let field = $(sel.name).getValue(data.nameWithSpaces)
        expect(field).toEqual(data.nameWithSpaces)
    });

    it('TC-036 Name field accepts Russian letters ', function () {
        browser.url('');
        $(sel.name).setValue(data.russianLetters)
        let field = $(sel.name).getValue(data.russianLetters)
        expect(field).toEqual(data.russianLetters)
    });

    it('TC-037 Name field accepts Korean letters  ', function () {
        browser.url('');
        $(sel.name).setValue(data.koreanLetters)
        let field = $(sel.name).getValue(data.koreanLetters)
        expect(field).toEqual(data.koreanLetters)
    });

    // it('TC-038 Copy paste functionality  ', function () {
    //     browser.url('https://google.com');
    //     $(sel.google).setValue(data.name).keys(['command', 'a']).keys(['command', 'c'])
    //
    //     let field = $(sel.name).getValue(data.koreanLetters)
    //     expect(field).toEqual(data.koreanLetters)
    // });

    it('TC-039 Empty name field  ', function () {
        browser.url('');
        $(sel.name).click();
        $(sel.radioButtons).click();
        $(sel.age).setValue(data.age)
        $(sel.storyType).click()
        let field = $(sel.name).getValue(data.koreanLetters)
        expect(field).toEqual(data.koreanLetters)
    });

})