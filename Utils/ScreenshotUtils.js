export async function takeScreenshot(page, testName) {

    const timestamp = new Date()
        .toISOString()
        .replace(/[:.]/g, "-");

    const filePath = `Screenshots/${testName}-${timestamp}.png`;

    await page.screenshot({
        path: filePath,
        fullPage: true
    });

    console.log(`Screenshot saved at: ${filePath}`);

}
export async function screenshot_with_mark(locator, testName) {

    // Create timestamp
    const timestamp = new Date()
        .toISOString()
        .replace(/[:.]/g, "-");

    const filePath = `./screenshots/${testName}-${timestamp}.png`;

    // Highlight element
    await locator.evaluate((el) => {
        el.style.border = "3px solid red";
    });

    // Take screenshot of the element
    await locator.screenshot({
        path: filePath
    });

    console.log(`Screenshot saved at: ${filePath}`);
}