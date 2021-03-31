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
        browser.pause(2000)
        expect(heButton).toEqual(true)

    })

})