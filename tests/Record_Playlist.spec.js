import { test, expect } from '@playwright/test';

test('Record and playlist', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('api testting by testers talk');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
   await page.getByRole('link', { name: 'API Testing by Testers Talk☑️', exact: true }).click();
   
  await expect(page.locator('#header-description')).toContainText('API Testing by Testers Talk☑️');

});