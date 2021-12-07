import {Selector} from 'testcafe';
const usernameInput = Selector ('input[name=usuario][type=text]');
const passwordInput = Selector ('input[name=clave][type=password]');

fixture("First Test Suite")

    .page("https://betapp.agilice.cl/Home/Login")

    test("TC00 - Login", async t => {
        await t
        .typeText(usernameInput,"renzo.mori@iconstruye.com")
        .typeText(passwordInput,"pruebapp")
        .click(Selector ('button[type=submit]'))
        //.pressKey('enter')
    })   