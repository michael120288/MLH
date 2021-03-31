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

    it('TC-050 Verify that button "he" is enabled and she and it are disable', function (){
        browser.refresh()
        $$(selGen.gender)[gender.he].click();
        let heButton = $$(selGen.gender)[gender.he].isSelected()
        expect(heButton).toEqual(true)
        let sheButton = $$(selGen.gender)[gender.she].isSelected()
        expect(sheButton).toEqual(false)
        let itButton = $$(selGen.gender)[gender.it].isSelected()
        expect(itButton).toEqual(false)

    })

    it('TC-051 Verify that button "she" is enabled and he and it are disable', function (){
        browser.refresh()
        $$(selGen.gender)[gender.she].click();
        let sheButton = $$(selGen.gender)[gender.she].isSelected()
        expect(sheButton).toEqual(true)
        let heButton = $$(selGen.gender)[gender.he].isSelected()
        expect(heButton).toEqual(false)
        let itButton = $$(selGen.gender)[gender.it].isSelected()
        expect(itButton).toEqual(false)

    })


})