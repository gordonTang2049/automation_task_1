import { Puppeteer, Browser } from "puppeteer"
import { sleep } from "../utils";

type GenericObj = Record<string, any>

const twoFA = async (
    broswer: Browser,
    URL: string
) => {

    const TWOFA = process.env.TWOFA 

    const page = await broswer.newPage();
    await page.goto(URL);
    await sleep(7000)

    TWOFA && await page.type('#input38', TWOFA)
    
    await page.click('#input46')
    await page.click('div.o-form-button-bar>input')
    await page.close()

}


const login = async (
    broswer: Browser,
    URL: string
) => {

    const USER = process.env.USERNAME
    const PASS = process.env.PASS
    const TWOFA = process.env.TWOFA


    const page = await broswer.newPage();
    await page.goto(URL);

    await sleep(20000)
    
    // Correct the el type
    
    
    USER && await page.type('#txtUser', USER)
    page.$eval('#txtUser', (el)=>{
        const inputEvent = new Event('input', {"bubbles":true})
        el.dispatchEvent(inputEvent)
    })

    PASS && await page.type('#txtPassword', PASS)
    page.$eval('#txtPassword', (el)=>{
        const inputEvent = new Event('input', {"bubbles":true})
        el.dispatchEvent(inputEvent)
    })
    
    await sleep(5000)

    await page.click('#loginButton')

    await sleep(6000)


    TWOFA && await page.type('#input38', TWOFA)
    
    await page.click('#input46')
    await page.click('div.o-form-button-bar>input')


    await sleep(6000)

    await page.close()
}


const loginwoFA = async (
    broswer: Browser,
    URL: string
) => {

}



export { login, twoFA };

