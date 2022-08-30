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
exports.throttleReq = exports.getCsvData = exports.sleep = void 0;
const fs = __importStar(require("fs"));
const fillForm_1 = require("./autoProcess/fillForm");
const csv = require('csv-parser');
const sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(0);
        }, time);
    });
};
exports.sleep = sleep;
const getCsvData = (path) => {
    const results = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(path)
            .on("error", (error) => {
            reject(error);
        })
            .pipe(csv())
            .on("data", (data) => {
            results.push(data);
        })
            .on("end", () => { resolve(results); });
    });
};
exports.getCsvData = getCsvData;
//extends Record<keyof K, V> ? Partial<T> : undefined
//  extends Record<keyof K, V>
// 1. Pass 
// 1. Promise function -> for request 
const throttleReq = (browser, data) => __awaiter(void 0, void 0, void 0, function* () {
    const OVCPTYPECHECK = 'OVCP_ID';
    for (let i = 0; i < data.length; i++) {
        let ops = [];
        for (let j = 0; j < 5; j++) {
            let count = j + i * 5;
            if (count < data.length) {
                data[count].hasOwnProperty(OVCPTYPECHECK) && console.log(count, data[count].OVCP_ID, data[count].new_pHub);
                const URL = `https://apps.jll.com/PortfolioTracker/OneView/Editor.aspx?nClientID=6503` +
                    `&nType=0` +
                    `&nActivityType=0` +
                    `&nLeaseID=${data[count].OVCP_ID}` +
                    `&nParentClientID=0` +
                    `&nParentLeaseID=0&sSortOrder=&sAscDesc=ASC&PageID=1&status=`;
                const op = (0, fillForm_1.fillFormPromise)(browser, URL, data[count].new_pHub);
                ops.push(op);
            }
        }
        yield Promise.all(ops);
    }
    //   OVCP_ID: '17648928',
    // E1_BU: '4849800529',
    // Property_Name: 'NSW - THE ROCK - 16 Day Street',
    // new_pHub: 'NSW - THE ROCK - 16 Day St',
    // Address_2: 'The Rock Medical Centre',
    // Property_Status: 'Active'
});
exports.throttleReq = throttleReq;
