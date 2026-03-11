import { test, expect } from "@playwright/test"

test('Handling iframes', async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

    const iframe_element = page.frameLocator('.demo-frame').first();
    const dragElement = iframe_element.locator("[class='ui-widget-header']").first();
    const dropElement = iframe_element.locator("div#trash");

    //drag and drop element
    await dragElement.dragTo(dropElement);
    await page.waitForTimeout(3000);

}); 