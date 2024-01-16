// @ts-check
const { test, expect } = require('@playwright/test');
const {getData} = require("../helper/excelHandler")

const { radioValue, dropdownValue } = getData()

test(`Radio button test`, async ({ page }) => {
    await page.goto('https://letcode.in/radio');
    console.log(radioValue)
    var firstRadioOptionLabelLocator = await page.locator("[class='control']").nth(0).locator('.radio')
    var firstRadioOptionInputLocator = await page.locator("[class='control']").nth(0).locator('input')
    for(var i=0;i<await firstRadioOptionLabelLocator.count();i++){
      const value = await firstRadioOptionLabelLocator.nth(i).textContent()
      if(value?.includes(radioValue)){
        await firstRadioOptionInputLocator.nth(i).check()
      }
    }
  });

  test(`DropDown test`, async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns');
    console.log(dropdownValue)
    await page.locator("#fruits").selectOption(dropdownValue)
  });


