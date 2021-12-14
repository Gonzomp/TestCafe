import {Selector} from 'testcafe';

const inputUsuario = Selector ("input").withAttribute("name","usuario")
const inputClave = Selector ("input").withAttribute("name","clave")
const buttonLogIn = Selector ("button").withAttribute("class","btn btn-lg btn-block btn-success")
const MainMenu = Selector ("#paso_dos")
const buttonEmitirDte = Selector ("a").withText("Emitir DTE")
const buttonFacturaElectronica = Selector ("a").withText("Factura electrónica")
const buttonBuscarEmisorDte = Selector ("#btnSearchCustomerByRut")
const inputSearchCustByRutAndSR = Selector ("#inputSearchCustByRutAndSR") 
const btnSearchCustByRutAndSR = Selector("#btnSearchCustByRutAndSR")
const RadioCustomerSelect = Selector ("#RadioCustomerSelect").withAttribute("value","27")
const btnSelectCustomer = Selector ("#btnSelectCustomer")

fixture("First Test Suite")
    .page("https://betapp.agilice.cl/Home/Login")

    test("TC01 - Primera Prueba", async t => {
        await t
        .typeText(inputUsuario,"Renzo.Mori@ICONSTRUYE.COM")
        .typeText(inputClave,"pruebapp")
        .click(buttonLogIn)
        .click(MainMenu)
        .click(buttonEmitirDte)
        .click(buttonFacturaElectronica)
        .click(buttonBuscarEmisorDte)
        .typeText(inputSearchCustByRutAndSR,"iconstruye")
        .click(btnSearchCustByRutAndSR)
        .click(RadioCustomerSelect)
        .click(btnSelectCustomer)

    })