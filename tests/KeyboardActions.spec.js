
import { test, expect } from "@playwright/test"

test('Keyboard Actions', async ({ page }) => {
    await page.goto("https://google.com");
    // await page.locator("div.a4bIc").fill("playwright doc");


    // await page.locator(".gLFyf").first().click();
    // await page.locator(".gLFyf").first().fill("playwright by testers talk");
    // await page.locator("[aria-label='Search']").click();
    // await page.locator("[aria-label='Search']").fill("playwright by testers talk");

    await page.getByRole('combobox', { name: 'Search' }).first().click();
    // await page.getByRole('combobox', { name: 'Search' }).first().fill('api testing by testers talk');
    // //press enter 
    // await page.getByRole('combobox', { name: 'Search' }).press("Enter");
    // await page.waitForTimeout(3000);
    //press control+a & delete
    // await page.getByRole('combobox', { name: 'Search' }).first().click();
    // await page.getByRole('combobox', { name: 'Search' }).first().press('control+a');
    // await page.getByRole('combobox', { name: 'Search' }).first().press('Delete');

    //press tab
    await page.getByRole('combobox', { name: 'Search' }).press('Tab');  //(working)
    //await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);
});
