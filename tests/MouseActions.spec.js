import { test, chromium } from '@playwright/test';

test('Mouse Actions', async ({page}) => {
await console.log("Mouse Actions is runnning");
await page.goto("https://www.demoblaze.com/");

// await page.waitForTimeout(5000);
//click
// await page.getByRole('link', { name: 'Testers Talk' }).first().click();
// //double click -->dblclick()

// await page.getByRole('link', { name: 'Testers Talk' }).first().dblclick();
// //mouse right click--> 
await page.getByRole('link',{name:'Contact '}).click({button:'right'});

//mouse middle click
//await page.getByRole('link',{name:'Contact '}).click({button:'middle'});

//mouse left click
//await page.getByRole('link',{name:'Contact'}).first().click({button:'left'});

//mouse hover
//await page.getByRole('link',{name:'Home '}).hover();
await page.waitForTimeout(3000);
});