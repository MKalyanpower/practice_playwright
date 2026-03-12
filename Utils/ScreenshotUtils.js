export async function highlightAndScreenshot(locator, name) {
    const timestamp = Date.now();

    await locator.evaluate((el) => {
        el.style.border = "3px solid red";
    });

    await locator.screenshot({
        path: `./screenshots/${name}_${timestamp}.png`
    });
}