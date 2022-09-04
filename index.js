"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const puppeteer = __importStar(require("puppeteer"));
const authProcess_1 = require("./autoProcess/authProcess");
const fillForm_1 = require("./autoProcess/fillForm");
const utils_1 = require("./utils");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer.launch({ headless: false });
    const AUTHURL = `https://apps.jll.com/PortfolioTracker/OneView/Editor.aspx?nClientID=6503` +
        `&nType=0` +
        `&nActivityType=0` +
        `&nLeaseID=95836214` +
        `&nParentClientID=0` +
        `&nParentLeaseID=0&sSortOrder=&sAscDesc=ASC&PageID=1&status=`;
    yield (0, authProcess_1.login)(browser, AUTHURL);
    // await twoFA(browser, AUTHURL)
    yield (0, utils_1.sleep)(3000);
    // test in 95836215 -> cat st
    // 17648410
    // 2 services
    // 17648647
    // try if only one service
    const URL = `https://apps.jll.com/PortfolioTracker/OneView/Editor.aspx?nClientID=6503` +
        `&nType=0` +
        `&nActivityType=0` +
        `&nLeaseID=17648410` +
        `&nParentClientID=0` +
        `&nParentLeaseID=0&sSortOrder=&sAscDesc=ASC&PageID=1&status=`;
    yield (0, fillForm_1.existingPropertyStatusSwitcher)(browser, URL);
    // const PATH = __dirname + '/dataCsv/roadAbbr2.csv';
    // const data = await getCsvData(PATH)
    // await throttleReq(browser,data)
});
main();
