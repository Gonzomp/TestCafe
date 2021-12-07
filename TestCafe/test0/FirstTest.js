import {Selector} from 'testcafe';

const developername = Selector ("#developer-name")
const macOsRadio = Selector ("#macos")

fixture("First Test Suite")
    .page("http://devexpress.github.io/testcafe/example/")

    test("TC01 - Primera Prueba", async t => {
        await t
        .typeText(developername,"Renzo Mori")

    })
    test("TC02 - Segunda Prueba", async t => {
        await t

        .click("#remote-testing")
        .click("#background-parallel-testing")
        .click("#traffic-markup-analysis")
        .click("#tried-test-cafe")
    })

        test("TC03 - Cuarta Prueba", async t => {
        await t

        .click(macOsRadio)

    })
    test("TC04 - Cuarta Prueba", async t => {
        await t
        .click("#submit-button")
    })

    test.page("www.google.com").only
    ("TC05 - Quinta Prueba", async t => {
        await t
    })