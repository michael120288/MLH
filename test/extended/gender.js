import sel from '../../data/selectors';
import selGen from '../../data/genderSelectors'
import exp from '../../data/expected.json';
import {gender} from '../../data/testData'

describe('Gender suite with radio buttons', function (){

    before('Open app', function (){
        browser.url('');
    })

    it('TC-047 Verify that button "he" is enabled', function (){
        browser.refresh()
        $$(selGen.gender)[gender.he].click();
        let heButton = $$(selGen.gender)[gender.he].isEnabled()
        expect(heButton).toEqual(true)

    })

    it('TC-048 Verify that button "she" is enabled', function (){
        browser.refresh()
        $$(selGen.gender)[gender.she].click();
        let sheButton = $$(selGen.gender)[gender.she].isEnabled()
        expect(sheButton).toEqual(true)

    })

    it('TC-049 Verify that button "it" is enabled', function (){
        browser.refresh()
        $$(selGen.gender)[gender.it].click();
        let itButton = $$(selGen.gender)[gender.it].isEnabled()
        expect(itButton).toEqual(true)

    })

    it('TC-050 User can choose only one button at the time: "he"', () => {
         browser.refresh()
        let elem = $$(selGen.gender)[gender.he]
        let isEnabled = elem.isEnabled();
        console.log(isEnabled); // outputs: true

        elem = $$(selGen.gender)[gender.she]
        isEnabled = elem.isEnabled();
        console.log(isEnabled); // outputs: false

        elem = $$(selGen.gender)[gender.it]
        isEnabled = elem.isEnabled();
        console.log(isEnabled); // outputs: false
    });

    it('TC-051 User can choose only one button at the time: "she"', () => {
        browser.refresh()
        let elem = $$(selGen.gender)[gender.she]
        let isEnabled = elem.isEnabled();
        console.log(isEnabled); // outputs: true

        elem = $$(selGen.gender)[gender.he]
        isEnabled = elem.isEnabled();
        console.log(isEnabled); // outputs: false

        elem = $$(selGen.gender)[gender.it]
        isEnabled = elem.isEnabled();
        console.log(isEnabled); // outputs: false
    });
})