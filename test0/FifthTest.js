import {Selector} from 'testcafe';

const triedTCCheck = Selector("input#tried-test-cafe")
const slider = Selector("div#slider")
const populateButton = Selector("input#populate")
const developername = Selector ("#developer-name")
const submitButton = Selector("#submit-button")
const labelMessage = Selector("#article-header")
let nombre="Renzo Mori"

fixture("Assertions")
.page("http://devexpress.github.io/testcafe/example/")

    .beforeEach(async t => {
        await t 
        .setTestSpeed(0.25)
        .maximizeWindow();

    })

    test("TC01 - Expectation", async t => {
        await t
        .hover(populateButton)
        .expect(developername.value).eql('','input is empty')
        .typeText(developername,nombre)
        .expect(developername.value).eql(nombre,'input is not empty')
        console.log(developername.textContent);
        await t
        .click(submitButton)
        .expect(labelMessage.textContent).contains('Thank you')
    })
    