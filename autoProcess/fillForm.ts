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
): Promise<void> => {
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

// switcher -> true (active) 

const existingPropertyStatusSwitcher = async (
    broswer: Browser,
    URL: string,
    switcher: boolean = false
): Promise<void> => {

    return new Promise(async (resolve, reject) => {
        try {
            const page = await broswer.newPage();
            await page.goto(URL);
            await sleep(10000)
            
            // if Activate a site
            // await page.$eval("#ctl00_Content_dlMauve_ctl01_dlColumn2_ctl01_ucField2_ucDropDown1_dlDropDown_ClientState", (el) => {
            //     const inputEvent = new Event('input', {'bubbles' : true})
            //     const activeScript = "{'logEntries':[],'value':'1981162514','text':'Active','enabled':true,'checkedIndices':[],'checkedItemsTextOverflows':false}"
            //     el.setAttribute("value", activeScript)
            //     el.dispatchEvent(inputEvent)
            // })

            // if deactivate a site
            // await page.$eval("#ctl00_Content_dlMauve_ctl01_dlColumn2_ctl01_ucField2_ucDropDown1_dlDropDown_ClientState", (el) => {
            //     const inputEvent = new Event('input', {'bubbles' : true})
            //     const deactivateScript = "{'logEntries':[],'value':'1981162515','text':'InActive','enabled':true,'checkedIndices':[],'checkedItemsTextOverflows':false}"
            //     el.setAttribute("value", deactivateScript)
            //     el.dispatchEvent(inputEvent)
            // })
            
            // await sleep(1000)
            
            // end date as today 
            // ===================================
            // 1. select the edit button
            // 2. Change date value in End date -> 2 input ID 
            // 3. Submit btn 
            // 4. save for the property
            
            await page.$$eval('#ctl00_Content_dlMauve_ctl02_dlColumn1_ctl00_ucField1_ucGridField1_rgGridControl_ctl00 > tbody > tr', (el)=>{
                console.log(el)
            })
            

            // (Frame of services) ctl00_Content_dlMauve_ctl02_dlColumn1_ctl00_ucField1_ucGridField1_rgGridControl
            // child
            
            // {'enabled':true,'emptyMessage':'','validationText':'','valueAsString':'',
            // 'minDateStr':'1900-01-01-00-00-00','maxDateStr':'2300-12-31-00-00-00','lastSetTextBoxValue':''}
            
            // "{'enabled':true,'emptyMessage':'','validationText':'2022-08-31-00-00-00','valueAsString':'2022-08-31-00-00-00','minDateStr':'1900-01-01-00-00-00','maxDateStr':'2300-12-31-00-00-00','lastSetTextBoxValue':'8/31/2022'}"

        } catch (e) {

            console.log(e)
            reject(e)

        }
    }) 

        // Check whether Corrigo Service being deactivated
        // disable Corrigo service
        // Check whether lease service being removed 
        // disable lease service
        // delete Lease admin
    

}

export {existingPropertyStatusSwitcher, fillForm, fillFormPromise }


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


// div contains services 
// ctl00_Content_dlMauve_ctl02_dlColumn1_ctl00_ucField1_ucGridField1_rgGridControl