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