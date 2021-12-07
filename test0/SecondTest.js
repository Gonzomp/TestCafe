import {Selector} from 'testcafe';

const iniciarSessionButton = Selector ("a").withAttribute("class","nav-link-ic-dark mx-auto");
const username = Selector ("input").withAttribute("name","txtUsername")
const password = Selector ("input").withAttribute("name","txtPassword")
const iniciarSession2Button = Selector("button").withAttribute("type", "submit")
const menuButton = Selector ("span").withText("Menú")
const menuCotizaciones = Selector ("#CZ")
const descargarExcelButton = Selector("Button").withAttribute("class","btn btn-default btn-xs pull-right")
const iframeTourCZ = Selector ("#frame")
const cerrarTourCZ = Selector("span").withText("×")
const cerrarOneSignal = Selector ("#onesignal-slidedown-cancel-button")

fixture("First Test Suite")
    .page("https://marketplace.iconstruye.com/")

    test("TC01 - Primera Prueba", async t => {
        await t
        .click(iniciarSessionButton)    
        .typeText(username,"nelson.lorca@iconstruye.com")    
        .typeText(password,"aBgpoKsj") 
        .click(iniciarSession2Button)
        .click(menuButton)   
        .click(menuCotizaciones) 
        .debug()
        .switchToIframe (iframeTourCZ)
        .click(cerrarTourCZ)
        .click(descargarExcelButton)
    })      