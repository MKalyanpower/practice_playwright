//Include playwright module 
const {test,expect}=require("@playwright/test")
//Write a test

/*HOOKS
beforeEach(), beforeAll(),afterEach(),afterAll()
*/
test.beforeEach("before each test",async({page})=>{
    console.log("before running each test");
//go to url
await page.goto("https://www.youtube.com/");
});

test.beforeAll('run before All test',async({})=>{
    console.log("running before All test......")
}) 
test.afterEach("after each test",async({page})=>{
    console.log("after running each test"); 
});

test.afterAll('run after All test',async({})=>{
    console.log("running after All test......")
})

test('Hooks in playwright',async({page})=>{

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

test('Hooks in playwright2',async({page})=>{

// search with keywords
await page.getByRole('search').click();
await page.getByPlaceholder('Search').fill("Api testing by testers talk");

await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
await page.getByRole('button', { name: 'Search', exact: true }).click();


});

