// import { test, expect } from '@playwright/test';
// import { chromium, ChromiumBrowser, Page } from "playwright";
// import { getQuestionData } from "./helper"


// test('has title', async ({ page }) => {

//   async function checkRadio(page, yesId, noId, value) {

//     const isYesChecked = await page.locator(yesId).getAttribute('checked')
//     const isNoChecked = await page.locator(noId).getAttribute('checked')
//     console.log(`isYesChecked:${isYesChecked}`)
//     console.log(`isNoChecked:${isNoChecked}`)
//     if (await isYesChecked == null && await isNoChecked == null) {
//       if (value == 'Yes') {
//         await page.locator(yesId).check()
//       } else if (value == 'No') {
//         await page.locator(noId).check()
//       }
//     }
//   }

//   await page.goto('https://claimsapp1dev.dol.state.nj.us:8443/claims-web-rcc?mock-LDAP_USER_ID=laowat3&mock-LDAP_GIVEN_NAME=William&mock-LDAP_LAST_NAME=Watkins');
//   await chromium.launch({ headless: false, slowMo: 400 });

//   await page.getByLabel('SSN', { exact: true }).click();
//   await page.getByLabel('SSN', { exact: true }).fill('100021979');
//   await page.getByLabel('Search', { exact: true }).selectOption()
//   await page.getByRole('link', { name: '10/15/2023' }).click();
//   await page.getByLabel('checkbox - completed').check();
//   await page.getByRole('button', { name: 'Save & Continue' }).click();
//   await checkRadio(page, '#radioCurrentlyResideInUsY', '#radioCurrentlyResideInUsN', getQuestionData().preliminaryQ1Radio)












//   await page.pause();
// });



// await this.page.getByLabel('Zip Code:').fill(outEmpZip.toString());