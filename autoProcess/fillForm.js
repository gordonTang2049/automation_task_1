"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillFormPromise = exports.fillForm = exports.existingPropertyStatusSwitcher = void 0;
const utils_1 = require("../utils");
const fillForm = (broswer, URL, propertyName) => __awaiter(void 0, void 0, void 0, function* () {
    const page = yield broswer.newPage();
    yield page.goto(URL);
    yield (0, utils_1.sleep)(30000);
    // property Name Field 
    yield page.$eval("#ctl00_Content_dlMauve_ctl00_dlColumn1_ctl00_ucField1_ucTextBox1_txtSingle", (el, pName) => {
        console.log(pName);
        el.hasAttribute("value") && el.setAttribute("value", pName);
    }, propertyName);
    yield page.click("#ctl00_Content_btnSave");
    yield (0, utils_1.sleep)(2000);
    yield page.close();
});
exports.fillForm = fillForm;
// Fill property Name 
// 
const fillFormPromise = (broswer, URL, propertyName) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const page = yield broswer.newPage();
            yield page.goto(URL);
            yield (0, utils_1.sleep)(10000);
            // property Name Field 
            yield page.$eval("#ctl00_Content_dlMauve_ctl00_dlColumn1_ctl00_ucField1_ucTextBox1_txtSingle", (el, pName) => {
                el.hasAttribute("value") && el.setAttribute("value", pName);
            }, propertyName);
            yield page.click("#ctl00_Content_btnSave");
            yield (0, utils_1.sleep)(2000);
            yield page.close();
            resolve();
        }
        catch (e) {
            console.log(e);
            reject(e);
        }
    }));
});
exports.fillFormPromise = fillFormPromise;
// switcher -> true (active) 
const existingPropertyStatusSwitcher = (broswer, URL, switcher = false) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const page = yield broswer.newPage();
            yield page.goto(URL);
            yield (0, utils_1.sleep)(10000);
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
            yield page.$$eval('#ctl00_Content_dlMauve_ctl02_dlColumn1_ctl00_ucField1_ucGridField1_rgGridControl_ctl00 > tbody > tr', (el) => {
                console.log(el);
            });
            // (Frame of services) ctl00_Content_dlMauve_ctl02_dlColumn1_ctl00_ucField1_ucGridField1_rgGridControl
            // child
            // {'enabled':true,'emptyMessage':'','validationText':'','valueAsString':'',
            // 'minDateStr':'1900-01-01-00-00-00','maxDateStr':'2300-12-31-00-00-00','lastSetTextBoxValue':''}
            // "{'enabled':true,'emptyMessage':'','validationText':'2022-08-31-00-00-00','valueAsString':'2022-08-31-00-00-00','minDateStr':'1900-01-01-00-00-00','maxDateStr':'2300-12-31-00-00-00','lastSetTextBoxValue':'8/31/2022'}"
        }
        catch (e) {
            console.log(e);
            reject(e);
        }
    }));
    // Check whether Corrigo Service being deactivated
    // disable Corrigo service
    // Check whether lease service being removed 
    // disable lease service
    // delete Lease admin
});
exports.existingPropertyStatusSwitcher = existingPropertyStatusSwitcher;
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
