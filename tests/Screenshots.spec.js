import { test, expect } from '@playwright/test';

test('take screenshot', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //element screenshot
     const timestamp = Date.now();

    // await page.locator('#page-header').screenshot({
    //     path: `./screenshots/element_${timestamp}.png`
    // });

    // //page screenshot 
    // await page.screenshot({
    //     path: `./screenshots/element.png`
    // });

    // //full page Screenshot
    // await page.screenshot({ path: `./screenshots/element.png`, fullPage: true });

const username = page.getByPlaceholder('Username');

await username.evaluate((el) => {
    el.style.border = "3px solid red";
});

await username.screenshot({ 
    path: `./screenshots/username-highlight_${timestamp}.png`
});

    await page.waitForTimeout(3000);
});