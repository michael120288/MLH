import sel from "../../data/selectors";
import {name} from "../../data/testData";


it('TC-029 Name field accepts 1 symbol', function () {
    browser.url('');
    $(sel.name).setValue(name.oneSymbol)
    let field = $(sel.errorMessage).isDisplayed()
    expect(field).toEqual(false)

});