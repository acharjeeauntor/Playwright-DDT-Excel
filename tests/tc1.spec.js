const { test, expect } = require("@playwright/test");
const fs = require('fs');

//test.describe.configure({ mode: 'serial' });
test("TC 1", async ({ page }) => {
  await page.goto('https://computer-database.gatling.io/computers/');
const arry = ["ACE","ARRA","123456","APEXC"]
  var x = 0;

  while (true) {
    await page.locator('#searchbox').fill(arry[x]);
    await page.locator('#searchsubmit').click();
    await page.waitForLoadState("load");
    await page.waitForLoadState("networkidle");

    if (await page.locator(".well").isVisible()) {
      const valueToStore = arry[x];

      const jsonData = JSON.stringify({ value: valueToStore });
      fs.writeFileSync('data.json', jsonData, 'utf-8');
      await page.locator("#add").click();
      await expect(page.locator("#name")).toBeVisible();
      break;
    } else {
      x++;
    }
  }
});

// import { test, expect } from '@playwright/test';
// import { table } from 'console';
// import { chromium, ChromiumBrowser, Page } from "playwright";
// //const {getData} = require('/home/laowat3/poc/utils/read3');
// const XLSX = require('xlsx');
// const workbook = XLSX.readFile('data.xlsx');
// const sheetName = workbook.SheetNames[0];
// const worksheet = workbook.Sheets[sheetName];
// const userName = worksheet['B4'].v;
// const firstName = worksheet['B19'].v;
// const midInitial = worksheet['B20'].v;
// const lastName = worksheet['B21'].v;
// const suffix = worksheet['B22'].v;
// const DOB = worksheet['B23'].v;
// const resStreet = worksheet['B51'].v;
// const resCity = worksheet['B52'].v;
// const resZip = worksheet['B54'].v;
// const mainTel = worksheet['B61'].v;
// //const altTel = worksheet['B62'].v;
// const email = worksheet['B63'].v;
// const unionHallNum = worksheet['B65'].v;
// const unionHallName = worksheet['B66'].v;
// //const njEmpName = worksheet['B84'].v;
// //const njEmpFEIN = worksheet['B85'].v;
// //const njSynNum = worksheet['B86'].v;
// //const njAddrLine1 = worksheet['B87'].v;
// //const njAddrLine2 = worksheet['B88'].v;
// //const njAddrLine3 = worksheet['B89'].v;
// //const njZip = worksheet['B92'].v;
// const occupation = worksheet['B67'].v;
// var x = 600114020;
 

 
 
 
// //await page.getByText('No results were found with the search criteria entered').click();
// //await page.getByText('Claim already exists for this SSN, please check the search results').click();
 
 
// test('TC5', async ({ page }) => {
 
//   await page.goto('https://amqaapp0.dol.state.nj.us:7443/sso/XUI/#login/&realm=adinternalds&goto=https%3A%2F%2Fclaimsqaweb.dol.state.nj.us%3A443%2FclaimsDashboard%2F');
//   await chromium.launch({ headless: false, slowMo: 400 });
 
//   await page.getByPlaceholder('User Name').click();
//   await page.getByPlaceholder('User Name').fill(userName);
//   await page.getByPlaceholder('User Name').press('Tab');
//   await page.getByPlaceholder('Password').fill('Pach@_!23');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.getByRole('link', { name: 'Search / File a Claim' }).click();
 
 
  
 
//   while (true) {
//     await page.getByLabel('SSN', { exact: true }).click();
//     await page.getByLabel('SSN', { exact: true }).fill(x.toString());
//     await page.getByLabel('SSN', { exact: true }).press('Tab');
//     await page.getByLabel('Search', { exact: true }).click();
   
//     if (  await page.locator('.pagebanner').isVisible()) {
//       const valueToStore = x+1;
   
//       const jsonData = JSON.stringify({ value: valueToStore });
//       fs.writeFileSync('data.json', jsonData, 'utf-8');
//       await page.getByLabel('File a Claim').click();
//       break;
//     } else {
//       x++;
//     }
//   }
 
  
 
//   await page.locator('#radioCurrentlyResideInUsY').check();
//   await page.locator('input[name="workInLast18Months"]').nth(1).check();
//   await page.locator('#radioMilitaryWorkLast18MonthsN').check();
//   await page.getByRole('link', { name: 'Alert ' }).click();
//   await page.locator('#radioFederalWorkLast18MonthsN').check();
//   await page.locator('#radioNonMilitaryWorkOtherStateN').check();
//   await page.locator('#radioMaritimeWorkLast18MonthsN').check();
//   await page.locator('#radioCurrentlyDisabledIndN').check();
//   await page.getByRole('button', { name: 'Save & Continue' }).click();
//   await page.getByRole('textbox', { name: 'First Name:' }).click();
//   await page.getByRole('textbox', { name: 'First Name:' }).fill(firstName);
//   await page.getByRole('textbox', { name: 'First Name:' }).press('Tab');
//   await page.getByLabel('Middle Initial:').press('Tab');
//   await page.getByRole('textbox', { name: 'Last Name:' }).fill(lastName);
//   await page.getByRole('textbox', { name: 'Last Name:' }).press('Tab');
//   await page.getByLabel('Personal Information:').getByLabel('Suffix:').press('Tab');
//   await page.getByLabel('Personal Information:').locator('a').click();
//   await page.getByLabel('Date of Birth:').click();
//   await page.getByLabel('Date of Birth:').fill(DOB);
//   await page.locator('#selectGender').selectOption('1');
//   await page.getByLabel('Race:').selectOption('6');
//   await page.getByLabel('Ethnicity:').selectOption('3');
//   await page.getByLabel('Educational Level:').selectOption('1');
//   await page.locator('#radioMainWageEarnerYes').check();
//   await page.locator('#radioInterpreterReqNo').check();
//   await page.locator('#noFederalTaxWithheld').check();
//   await page.locator('#radioGroupAgentIvrQuesDependencies').click();
//   await page.locator('#noAgentIvrQuesDependencies').check();
//   await page.locator('#radioLivedOutOfStateNo').check();
//   await page.locator('#radioFiledInOtherStateNo').check();
//   await page.getByLabel('Citizenship and Work Authorization').getByRole('radio', { name: 'Yes' }).check();
//   await page.getByLabel('Country or Territory:', { exact: true }).selectOption('US');
//   await page.getByRole('textbox', { name: 'Street:' }).click();
//   await page.getByRole('textbox', { name: 'Street:' }).fill(resStreet);
//   await page.getByRole('textbox', { name: 'Street:' }).press('Tab');
//   await page.getByRole('textbox', { name: 'City:' }).fill(resCity);
//   await page.getByRole('textbox', { name: 'City:' }).press('Tab');
//   await page.getByLabel('Residence Address').getByLabel('State:').selectOption('NJ');
//   await page.getByLabel('residence Zip', { exact: true }).click();
//   await page.getByLabel('residence Zip', { exact: true }).fill(resZip);
//   // await page.locator('#ui-site div').filter({ hasText: 'Claimant Name: Claimant SSN: 610234294 Program Code: 10 Date of Claim: 12/03/202' }).first().click();
//   await page.getByRole('button', { name: 'Verify Address' }).click();
//   await page.getByLabel('Residence Address').getByRole('radio').check();
//   await page.getByLabel('Mailing Address').getByLabel('Yes').check();
//   await page.getByLabel('*  Country or Territory:').selectOption('US');
//   await page.getByLabel('Mailing Address').getByLabel('No').check();
//   await page.getByLabel('Main Telephone:').click();
//   await page.getByLabel('Main Telephone:').fill(mainTel);
//   await page.getByLabel('Union Information').getByLabel('No').check();
//   await page.getByLabel('What is your main occupation?').click();
//   await page.getByLabel('What is your main occupation?').fill(occupation);
//   await page.getByLabel('What is your job description?').click();
//   await page.getByLabel('What is your job description?').fill(occupation);
//   await page.getByLabel('What is your job description?').press('Tab');
 
//   await page.getByRole('button', { name: 'Search for Occupation' }).click();
//   await page.getByRole('row', { name: 'AIRCRAFT MECHANICS AND SERVICE TECHNICIANS DIAGNOSE, ADJUST, REPAIR, OR OVERHAUL AIRCRAFT ENGINES AND ASSEMBLIES, SUCH AS HYDRAULIC AND PNEUMATIC SYSTEMS.' }).locator('#occupation').check();
//   await page.getByRole('button', { name: 'Save & Continue' }).click();
 
//   await page.locator('#yesWillingToWorkFT').check();
//   await page.locator('#yesAvailToWork').check();
//   await page.locator('#noReceviedWorkersComp').check();
//   await page.locator('#noCurrentlyDisabled').check();
//   await page.getByLabel('School Information').getByLabel('No').check();
 
//   await page.getByRole('button', { name: 'Save & Continue' }).click();
 
//   await page.getByRole('button', { name: 'Save & Continue' }).click();
 
//   await page.getByRole('button', { name: 'Save & Continue' }).click();
 
//   await page.getByRole('button', { name: 'Save & Continue' }).click();
 
//   await page.getByRole('button', { name: 'Certify/Submit' }).click();
//   await page.getByRole('button', { name: 'Proceed' }).click();
 
 
//   await page.pause();


 
// });