const { test, expect } = require('@playwright/test');


test('Claims : Date range', async ({ browser }) => {

    const firstAutoGeneratedMessage = `Hi Floralu! I’m Sunny, your virtual assistant, and I’m here to help!`
    const secondAutoGeneratedMessage = `Do you know the date of the service, provider/member name, or claim type (medical/pharmacy)?`
    const inputText = "Q100000952766018"
    const date = "02/15/2022"
    const status = "Processed"

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://vivr-stga.bcbsfl.com/member/?p=99999999-9999-9999-9999-99999999999&cipid=46250004249&contract=H16378922&intent=claims_status&language=en&memberbox=yes");
    await page.waitForLoadState("load")
    await page.waitForLoadState("networkidle")
    await page.waitForLoadState("domcontentloaded")
    await page.locator(".simpleMsg").nth(0).waitFor({ state: "visible", timeout: 30000 })
    await page.locator(".simpleMsg").nth(1).waitFor({ state: "visible", timeout: 30000 })
    expect(await page.locator(".simpleMsg").nth(0).textContent()).toBe(firstAutoGeneratedMessage)
    expect(await page.locator(".simpleMsg").nth(1).textContent()).toBe(secondAutoGeneratedMessage)
    await page.locator("#chatbotInput").fill(inputText);
    await page.getByRole('button', { name: 'Send Message' }).click();
    await page.locator(".claimsDateDiv").nth(0).waitFor({ state: "visible", timeout: 30000 })
    expect(await page.locator(".claimsDateDiv").nth(0).textContent()).toBe(date)
    expect(await page.locator(".claimsDateDiv").nth(2).textContent()).toBe(status)
    console.log("Date : ", date)
    console.log("Status : ", status)
    await page.getByRole('button', { name: 'More details' }).click();
    await page.getByRole('button', { name: 'Costs' }).click();
    await expect(page.getByText('Copay: $15.00')).toBeVisible()
    await expect(page.getByText('Deductible: $0.00')).toBeVisible()
    await expect(page.getByText('Coinsurance: $0.00')).toBeVisible()
    await expect(page.getByText('Limits/Exclusions: $0.00')).toBeVisible()
    await expect(page.getByText('Florida Blue Discount: $0.00')).toBeVisible()
    await expect(page.getByText('Amount My Plan Paid: $90.31')).toBeVisible()
    await expect(page.getByText('Member Responsibility: $15.00')).toBeVisible()
    await expect(page.getByText('Florida Blue Responsibility: $90.31')).toBeVisible()
    await expect(page.getByText('Total Cost: $150.00')).toBeVisible()
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByRole('button', { name: 'Find Something Else' }).click();
    await page.getByRole('button', { name: 'That\'s All I Need' }).click();
    await page.getByRole('button', { name: 'like', exact: true }).click();

 const ERILocator = await page.locator(`#selectEriCode [value="7"]`)
 var value = await ERILocator.textContent()
 console.log(value.trim())
    await expect(ERILocator).toHaveAttribute("selected")

    // if (await this.page.locator('.pagebanner').isVisible()) {
    //                 const valueToStore = this.x + 1;


     
    //                 const jsonData = JSON.stringify({ value: valueToStore });
    //                 await fs.writeFile('data.json', jsonData, 'utf-8');
    //                 //console.log('No claim for this SSN -> File a claim')
    //                 await this.page.getByLabel('File a Claim').click();
    //                 break;
    //             } else {
    //                 //console.log('Claim exists for this SSN, try again with new SSN..')
    //                 this.x++;
    //             }

});