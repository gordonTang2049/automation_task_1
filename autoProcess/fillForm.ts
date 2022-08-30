import * as puppeteer from 'puppeteer';
import { Browser } from "puppeteer"
import { sleep } from '../utils';


const fillForm = async (
    broswer: Browser,
    URL: string,
    propertyName: string
) => {

    const page = await broswer.newPage();
    await page.goto(URL);
    await sleep(30000)

    // property Name Field 

    await page.$eval("#ctl00_Content_dlMauve_ctl00_dlColumn1_ctl00_ucField1_ucTextBox1_txtSingle", (el, pName) => {
        console.log(pName)
        el.hasAttribute("value") && el.setAttribute("value", pName)
    }, propertyName)

    await page.click("#ctl00_Content_btnSave")

    await sleep(2000)
    await page.close()

}


// Fill property Name 
// 
const fillFormPromise = async (
    broswer: Browser,
    URL: string,
    propertyName: string
) : Promise<void> => {
    return new Promise(async (resolve, reject) => {

        try {
            const page = await broswer.newPage();
            await page.goto(URL);
            await sleep(10000)

            // property Name Field 

            await page.$eval("#ctl00_Content_dlMauve_ctl00_dlColumn1_ctl00_ucField1_ucTextBox1_txtSingle", (el, pName) => {
                
                el.hasAttribute("value") && el.setAttribute("value", pName)
            }, propertyName)

            await page.click("#ctl00_Content_btnSave")

            await sleep(2000)
            await page.close()
            resolve()

        } catch (e) {
            console.log(e)
            reject(e)
        }
    })


}

export { fillForm ,fillFormPromise}



//     // // Property Info Form
//     // // =================================================================

// ctl00_Content_btnSave save btn

//     // //    id Property name
//     // // ctl00_Content_dlMauve_ctl00_dlColumn1_ctl01_ucField1_ucTextBox1_txtSingle   id Alternate Property Name
//     // // ctl00_Content_dlMauve_ctl00_dlColumn1_ctl02_ucField1_ucTextBox1_txtSingle id addr 1
//     // // ctl00_Content_dlMauve_ctl00_dlColumn1_ctl03_ucField1_ucTextBox1_txtSingle id addr 2
//     // // ctl00_Content_dlMauve_ctl00_dlColumn1_ctl04_ucField1_ucTextBox1_txtSingle id addr 3
//     // // ctl00_Content_dlMauve_ctl00_dlColumn1_ctl05_ucField1_ucTextBox1_txtSingle id addr 4
//     // // ctl00_Content_dlMauve_ctl00_dlColumn1_ctl06_ucField1_ucTextBox1_txtSingle id City
//     // // ctl00_Content_dlMauve_ctl00_dlColumn2_ctl01_ucField2_ucTextBox1_txtSingle id State
//     // // ctl00_Content_dlMauve_ctl00_dlColumn2_ctl04_ucField2_ucTextBox1_txtSingle id Post code
//     // // ctl00_Content_dlMauve_ctl00_dlColumn2_ctl05_ucField2_ucTextBox1_txtSingle id Time Zone
//     // // ctl00_Content_dlMauve_ctl00_dlColumn2_ctl07_ucField2_ucTextBox1_txtSingle id Latitude
//     // // ctl00_Content_dlMauve_ctl00_dlColumn2_ctl08_ucField2_ucTextBox1_txtSingle id Longitude

//     // // ctl00_Content_dlMauve_ctl01_dlColumn1_ctl00_ucField1_ucTextBox1_txtSingle id Client Property Code (PRY)
//     // // ctl00_Content_dlMauve_ctl01_dlColumn1_ctl07_ucField1_ucTextBox1_txtSingle id BU NUMBER
//     // // ctl00_Content_dlMauve_ctl01_dlColumn2_ctl05_ucField2_ucTextBox1_txtSingle id Site ID
