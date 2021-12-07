import {Selector} from 'testcafe';



fixture("Cargar Archivos")
    .page("https://the-internet.herokuapp.com/upload")

    test("TC01 - Primera Prueba", async t => {
        await t
        .settestspeed(0.5)
        
    })