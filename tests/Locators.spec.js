const { test, expect } = require("@playwright/test");

test('Locators test', async ({ page }) => {

    //await page.goto("http://Demoblaze.com");
    //by role
    // await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    // await page.waitForTimeout(2000);

    //by label
    /*await page.goto("http://google.com");
     await page.getByLabel('Search', { exact: true }).fill("Api tesing by testers talk");
     await page.getByLabel('Search', { exact: true}).press('Enter');
     await page.waitForTimeout(10000);*/

    // by alt text
    // await  page.goto("https://github.com/BakkappaN");
    // await page.getByAltText("View BakkappaN's full-sized avatar").click();

    //get by test id
    // await page.goto("http://github.com/login");
    // await page.getByTestId("username").fill("Api testers talk");//set autocomplete attribute in config file 
    // await page.waitForTimeout(3000);

    // //by text(partial)
    // await page.goto("https://www.youtube.com/@testerstalk");
    // await page.getByText("Cypress by ").click();
    // await page.waitForTimeout(3000);

    //by text
    // await page.goto("https://www.youtube.com/@testerstalk");
    // await page.getByText("Cypress by Testers Talk☑️").click();
    // await page.waitForTimeout(3000);

    //by title
    // await page.goto("https://www.youtube.com/@testerstalk");
    // await page.getByTitle("Cypress by Testers Talk☑️").click();
    // await page.waitForTimeout(3000);

    //xpath

    await page.goto("https://www.youtube.com/@testerstalk");
    await page.locator("//input[@name='search_query']").click();
    await page.locator("//input[@name='search_query']").fill("api testing by testers talk");
    await page.locator("//input[@name='search_query']").press("Enter");
    await page.waitForTimeout(3000);

    //in same way use css selector

        

});