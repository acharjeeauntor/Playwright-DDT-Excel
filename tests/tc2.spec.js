const { test, expect } = require("@playwright/test");
import data from "../data.json"

//test.describe.configure({ mode: 'serial' });
test("TC 2", async ({ page }) => {
  await page.goto('https://computer-database.gatling.io/computers/');
    await page.locator('#searchbox').fill(data.value);
    console.log(data.value)
    //await page.pause()
});


// export class LoginTest{
//   readonly page: Page
//   constructor(page){
//     this.page = page
//   }
  
//   async loginFea () {
//     await this.page.goto('https://amqaapp0.dol.state.nj.us:7443/sso/XUI/#login/&realm=adinternalds&goto=https%3A%2F%2Fclaimsqaweb.dol.state.nj.us%3A443%2FclaimsDashboard%2F');
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
 
//   }
// }