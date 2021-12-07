import {Selector} from 'testcafe';

const triedTCCheck = Selector("input#tried-test-cafe")
const slider = Selector("div#slider")
const populateButton = Selector("input#populate")

fixture("Arrastrar elementos")
.page("http://devexpress.github.io/testcafe/example/")

    .beforeEach(async t => {
        await t 
        .setTestSpeed(0.25)
        .maximizeWindow();

    })

    test("TC01 - Primera Prueba", async t => {
        await t 
        .click(triedTCCheck)
        .drag(slider,360,0,{offsetX:10,offsetY:0})
        .wait(20000)
    })

    test("TC02 - Hover", async t => {
        await t 
        .hover(populateButton)
    })
