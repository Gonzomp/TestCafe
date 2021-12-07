import {Selector} from 'testcafe';

const fileUploadInput = Selector("input#file-upload")
const UploadButton   = Selector("input#file-submit")

fixture("Cargar Archivos")
    .page("https://the-internet.herokuapp.com/upload")

    test("TC01 - Primera Prueba", async t => {
        await t
        .setTestSpeed(0.5)
        .clearUpload(fileUploadInput)
        .setFilesToUpload(fileUploadInput,'../files/codorniz.png')
        .wait(20000)
        .click(UploadButton)
    })

    test("TC02 - Segunda Prueba", async t => {
        await t
        .setPageLoadTimeout(0)
    }).only
