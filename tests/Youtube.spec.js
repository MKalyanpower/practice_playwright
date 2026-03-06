//Include playwright module 
const {test,expect}=require("@playwright/test")
//Write a test
test('Validate youtube_title',async({page})=>{
//go to url
await page.goto("https://www.youtube.com/");
// search with keywords
await page.getByRole('search').click();
await page.getByPlaceholder('Search').fill("cyprses by testers talk");

await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
await page.getByRole('button', { name: 'Search', exact: true }).click();
//Click on playlist
await page.locator("//h3[contains(@title,'Cypress by Testers Talk')]/a").click();
// validate t   he title
await page.waitForTimeout(3000);
const title=await page.title();
console.log(title);
await expect(page).toHaveTitle('Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube');
});

