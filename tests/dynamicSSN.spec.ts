// import { Page } from "@playwright/test";
// import * as fs from 'fs';
// const ENV = process.env.ENV
// const SSN = process.env.SSN
// import { testConfig } from "../testConfig";
// const XLSX = require('xlsx');
// const workbook = XLSX.readFile('data.xlsx');
 
// const sheetName = workbook.SheetNames[0];
// const worksheet = workbook.Sheets[sheetName];
 
// export class LoginTest2 {
//     readonly page: Page
//     constructor(page) {
//         this.page = page
//     }
 
//     async loginFea() {
//         console.log('Loading Claims Test URL..')
//         if (ENV === "ClaimsTest") {
//             await this.page.goto(testConfig.ClaimsTest);
//             await this.page.getByPlaceholder('User Name').click();
//             console.log('Enter user name..')
//             await this.page.getByPlaceholder('User Name').fill('laowat3');
//             await this.page.getByPlaceholder('User Name').press('Tab');
//             console.log('Enter password..')
//             await this.page.getByPlaceholder('Password').fill('Pach@_!234');
//             await this.page.getByRole('button', { name: 'Log in' }).click();
//             console.log('Search/File a claim..')
//             await this.page.getByRole('link', { name: 'Search / File a Claim' }).click();
 
//         } else if (ENV === "ClaimsApp1Dev") {
//             await this.page.goto(testConfig.ClaimsApp1Dev);
//             //await this.page.locator('[name="mock-LDAP_USER_ID"]').fill("laowat3")
//             //await this.page.locator("[value='Submit']").click()
//         } else if (ENV === "ClaimsApp2Dev") {
//             await this.page.goto(testConfig.ClaimsApp2Dev);
//             //await this.page.locator('[name="mock-LDAP_USER_ID"]').fill("laowat3")
//             //await this.page.locator("[value='Submit']").click()
//         }
 
//         console.log('Enter SSN:')
//         //console.log(data.value)
 
//             await this.page.getByLabel('SSN', { exact: true }).fill(`${SSN}`);
//             await this.page.getByLabel('SSN', { exact: true }).press('Tab');
//             await this.page.getByLabel('Search', { exact: true }).click();
//             await this.page.waitForLoadState("load");
//             await this.page.waitForLoadState("networkidle");
 
           
//         }
 
//     }