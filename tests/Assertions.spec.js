import { test, expect } from "@playwright/test";
import { takeScreenshot } from "../Utils/ScreenshotUtils.js";

// Listener-like hook
test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {
        await takeScreenshot(page, testInfo);
    }

});

test('Assertion_Handling', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // assert visible
    await expect(page.getByAltText("company-branding")).toBeVisible({ timeout: 5000 });

    // assert editable
    await expect(page.getByPlaceholder("Username")).toBeEditable();
    await expect(page.getByPlaceholder("Username")).toBeEmpty();

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    await page.locator("//button[text()=' Login ']").click();

    await page.getByRole('link', { name: 'Admin' }).click();

    await expect(page.locator(".oxd-checkbox-input oxd-checkbox")).toHaveCount(51);

    await page.waitForTimeout(5000);

});