import sel from '../../data/selectors';
import selGen from '../../data/genderSelectors'
import exp from '../../data/expected.json';
import {gender,name,age} from '../../data/testData'

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

    it('TC-052 Verify that button "it" is enabled and she and he are disable', function (){
        browser.refresh()
        $$(selGen.gender)[gender.it].click();
        let itButton = $$(selGen.gender)[gender.it].isSelected()
        expect(itButton).toEqual(true)
        let heButton = $$(selGen.gender)[gender.he].isSelected()
        expect(heButton).toEqual(false)
        let sheButton = $$(selGen.gender)[gender.she].isSelected()
        expect(sheButton).toEqual(false)

    })

    it('TC-053 Verify that  user can switch the option from he -> she', function (){
        browser.refresh()
        $$(selGen.gender)[gender.he].click();
        $$(selGen.gender)[gender.she].click();
        let sheButton = $$(selGen.gender)[gender.she].isSelected()
        expect(sheButton).toEqual(true)

    })

    it('TC-054 Verify that  user can switch the option from he -> it', function (){
        browser.refresh()
        $$(selGen.gender)[gender.he].click();
        $$(selGen.gender)[gender.it].click();
        let sheButton = $$(selGen.gender)[gender.it].isSelected()
        expect(sheButton).toEqual(true)

    })

    it('TC-055 Verify that  user can switch the option from she -> he', function (){
        browser.refresh()
        $$(selGen.gender)[gender.she].click();
        $$(selGen.gender)[gender.he].click();
        let sheButton = $$(selGen.gender)[gender.he].isSelected()
        expect(sheButton).toEqual(true)

    })

    it('TC-056 Verify that  user can switch the option from she -> it', function (){
        browser.refresh()
        $$(selGen.gender)[gender.she].click();
        $$(selGen.gender)[gender.it].click();
        let sheButton = $$(selGen.gender)[gender.it].isSelected()
        expect(sheButton).toEqual(true)

    })

    it('TC-057 Verify that  user can switch the option from it -> he', function (){
        browser.refresh()
        $$(selGen.gender)[gender.it].click();
        $$(selGen.gender)[gender.he].click();
        let sheButton = $$(selGen.gender)[gender.he].isSelected()
        expect(sheButton).toEqual(true)

    })

    it('TC-058 Verify that  user can switch the option from it -> she', function (){
        browser.refresh()
        $$(selGen.gender)[gender.it].click();
        $$(selGen.gender)[gender.she].click();
        let sheButton = $$(selGen.gender)[gender.she].isSelected()
        expect(sheButton).toEqual(true)

    })

    it('TC-059 Verify that not chosen button "Gender" Required', function (){
        browser.refresh()
        $(sel.name).setValue(name.default)
        $(sel.age).setValue(age.default)
        $(sel.storyType).click()
        $(sel.storyList).click()
        let submitButton = $(sel.submit).isEnabled();
        expect(submitButton).toEqual(false)

    })

})