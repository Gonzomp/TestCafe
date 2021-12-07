import {Selector} from 'testcafe';

const triedTCCheck = Selector("input#tried-test-cafe")
const slider = Selector("div#slider")

fixture("Arrastrar elementos")
.page("http://devexpress.github.io/testcafe/example/")

    test("TC01 - Primera Prueba", async t => {
        await t
        .setTestSpeed(0.25)
        .click(triedTCCheck)
        .drag(slider,360,0,{offsetX:10,offsetY:0})
        .wait(20000)
    }).only
