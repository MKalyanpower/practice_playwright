import{test,expect} from "@playwright/test"

test('handling dropdown', async ({ page }) => {
    await page.goto("https://facebook.com/login");

await page.getByText('Create new account').click();
// Click the month dropdown
  await page.getByRole('combobox', { name: 'Select month' }).click();
  
  await expect(page.getByRole('option', { name: 'April' })) .toBeVisible();
  //also we can use    locator to find element and selectorOption to select month or        
  // Select April
  await page.getByRole('option', { name: 'April' }).click();
//click on Day
  await page.getByRole('combobox',{name:'Select day'}).click();
  //click on 15
  await page.getByRole('option',{name:'15'}).click();
});
