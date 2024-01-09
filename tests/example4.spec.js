// @ts-check
const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');
const workbook = XLSX.readFile('data.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const cell = worksheet['A5'].v;

test.only(`get started link for Data: ${cell}`, async ({ page }) => {
    await page.goto('https://letcode.in/edit');
    console.log(cell)
    await page.locator("#fullName").fill(cell);
  });



