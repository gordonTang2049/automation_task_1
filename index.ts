import * as puppeteer from 'puppeteer';
import {login, twoFA} from "./autoProcess/authProcess"
import { existingPropertyStatusSwitcher } from './autoProcess/fillForm';
import { getCsvData, sleep, throttleReq } from './utils';

const main = async () => {
    const browser = await puppeteer.launch({ headless: false });
    
    const AUTHURL = `https://apps.jll.com/PortfolioTracker/OneView/Editor.aspx?nClientID=6503` +
    `&nType=0` +
    `&nActivityType=0` +
    `&nLeaseID=95836214` +
    `&nParentClientID=0` +
    `&nParentLeaseID=0&sSortOrder=&sAscDesc=ASC&PageID=1&status=`

    await login(browser, AUTHURL)

    // await twoFA(browser, AUTHURL)

    await sleep(3000)

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
        `&nParentLeaseID=0&sSortOrder=&sAscDesc=ASC&PageID=1&status=`

    await existingPropertyStatusSwitcher(browser, URL)

    // const PATH = __dirname + '/dataCsv/roadAbbr2.csv';
    // const data = await getCsvData(PATH)
    
    // await throttleReq(browser,data)


}


main()


