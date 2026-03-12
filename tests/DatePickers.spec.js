import { test, expect } from "@playwright/test"
test('Datepickers handling', async ({page}) => {
    await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html');
    // await page.locator("#first_date_picker").fill('12/02/2025');
//todays data
await page.locator("#first_date_picker").click();
// await page.waitForLoadState('networkidle');
await page.locator(".ui-datepicker-today").click();

//Custome date value

// 1. Locate the <a> inside the default date <td>
const defaultDateAnchor = await page.locator('.ui-datepicker-today > a');

// 2. Get the text inside the <a> (this gives "12" in your screenshot)
let defaultDateValue = await defaultDateAnchor.textContent();
console.log('Default Date Text:', defaultDateValue);
const custom_date=(parseInt(defaultDateAnchor)+3);
const dateElement = page.locator(`//a[text()='${custom_date}']`);
await dateElement.click();



// 3. Optionally, get the data-date from the parent <td>
//let parentTD = await page.locator('.ui-datepicker-today');
// let defaultDataAttr = await parentTD.getAttribute('data-date'); if available we can use it
//console.log('Default Date Attribute:', defaultDataAttr);


await page.waitForTimeout(3000);




});