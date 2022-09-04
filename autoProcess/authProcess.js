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
exports.twoFA = exports.login = void 0;
const utils_1 = require("../utils");
const twoFA = (broswer, URL) => __awaiter(void 0, void 0, void 0, function* () {
    const TWOFA = process.env.TWOFA;
    const page = yield broswer.newPage();
    yield page.goto(URL);
    yield (0, utils_1.sleep)(7000);
    TWOFA && (yield page.type('#input38', TWOFA));
    yield page.click('#input46');
    yield page.click('div.o-form-button-bar>input');
    yield page.close();
});
exports.twoFA = twoFA;
const login = (broswer, URL) => __awaiter(void 0, void 0, void 0, function* () {
    const USER = process.env.USERNAME;
    const PASS = process.env.PASS;
    const TWOFA = process.env.TWOFA;
    const page = yield broswer.newPage();
    yield page.goto(URL);
    yield (0, utils_1.sleep)(20000);
    // Correct the el type  
    // USER && await page.type('#txtUser', USER)
    // page.$eval('#txtUser', (el)=>{
    //     const inputEvent = new Event('input', {"bubbles":true})
    //     el.dispatchEvent(inputEvent)
    // })
    // PASS && await page.type('#txtPassword', PASS)
    // page.$eval('#txtPassword', (el)=>{
    //     const inputEvent = new Event('input', {"bubbles":true})
    //     el.dispatchEvent(inputEvent)
    // })
    // await sleep(5000)
    // await page.click('#loginButton')
    // await sleep(6000)
    // TWOFA && await page.type('#input38', TWOFA)
    // await page.click('#input46')
    // await page.click('div.o-form-button-bar>input')
    yield (0, utils_1.sleep)(6000);
    yield page.close();
});
exports.login = login;
const loginwoFA = (broswer, URL) => __awaiter(void 0, void 0, void 0, function* () {
});
