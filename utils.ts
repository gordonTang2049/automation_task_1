import * as fs from "fs";
import { Browser } from "puppeteer"
import { fillForm, fillFormPromise } from "./autoProcess/fillForm";


const csv = require('csv-parser')

const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, time);
  });
};

const getCsvData = <T>(path: fs.PathLike): Promise<Array<T>> => {
  const results: Array<T> = []

  return new Promise((resolve, reject) => {

    fs.createReadStream(path)
      .on("error", (error) => {
        reject(error);
      })
      .pipe(csv())
      .on("data", (data: any) => {
        results.push(data)
      })
      .on("end", () => { resolve(results) });
  });


}

//extends Record<keyof K, V> ? Partial<T> : undefined
//  extends Record<keyof K, V>
// 1. Pass 
// 1. Promise function -> for request 

const throttleReq = async <T, K, V>(
  browser: Browser,
  data: Array<Partial<T> & Record<keyof K, V> & any>) => {

  const OVCPTYPECHECK = 'OVCP_ID'

  for (let i = 0; i < data.length; i++) {

    let ops = []

    for (let j = 0; j < 5; j++) {

      let count = j + i * 5

      if (count < data.length) {

          data[count].hasOwnProperty(OVCPTYPECHECK) && console.log(count, data[count].OVCP_ID, data[count].new_pHub)

          const URL = `https://apps.jll.com/PortfolioTracker/OneView/Editor.aspx?nClientID=6503` +
            `&nType=0` +
            `&nActivityType=0` +
            `&nLeaseID=${data[count].OVCP_ID}` +
            `&nParentClientID=0` +
            `&nParentLeaseID=0&sSortOrder=&sAscDesc=ASC&PageID=1&status=`

          const op = fillFormPromise(browser, URL, data[count].new_pHub)
          ops.push(op)
      }
          

    }
    await Promise.all(ops)

  }




  //   OVCP_ID: '17648928',
  // E1_BU: '4849800529',
  // Property_Name: 'NSW - THE ROCK - 16 Day Street',
  // new_pHub: 'NSW - THE ROCK - 16 Day St',
  // Address_2: 'The Rock Medical Centre',
  // Property_Status: 'Active'
}




export { sleep, getCsvData, throttleReq }




