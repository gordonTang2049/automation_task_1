import * as puppeteer from 'puppeteer';
import {login, twoFA} from "./autoProcess/authProcess"
import { getCsvData, sleep, throttleReq } from './utils';

const main = async () => {
    const browser = await puppeteer.launch({ headless: true });
    
    const AUTHURL = `https://apps.jll.com/PortfolioTracker/OneView/Editor.aspx?nClientID=6503` +
    `&nType=0` +
    `&nActivityType=0` +
    `&nLeaseID=95836214` +
    `&nParentClientID=0` +
    `&nParentLeaseID=0&sSortOrder=&sAscDesc=ASC&PageID=1&status=`

    await login(browser, AUTHURL)

    // await twoFA(browser, AUTHURL)

    await sleep(6000)

    const PATH = __dirname + '/dataCsv/roadAbbr2.csv';
    const data = await getCsvData(PATH)
    
    await throttleReq(browser,data)


}


main()


