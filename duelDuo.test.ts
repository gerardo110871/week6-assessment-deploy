
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1000)
})

test('click see all bots button', async () => {
    const seeAll = await driver.findElement(By.xpath('//*[@id="see-all"]'))
    seeAll.click()
    await driver.sleep(3000)
})

test('click on draw button', async () => {
    const draw = await driver.findElement(By.id('draw'))
    draw.click()
    await driver.sleep(3000)
})

test('draw characters, pick two and duel', async () => {
    const draw = await driver.findElement(By.id('draw'))
    draw.click()
    await driver.sleep(3000)

    const pickOne = await driver.findElement(By.xpath('//*[@id="choices"]/div[1]/button'))
    pickOne.click()

    await driver.sleep(1000)

    const pickTwo = await driver.findElement(By.xpath('//*[@id="choices"]/div[2]/button'))
    pickTwo.click()

    await driver.sleep(2000)

    const duel = await driver.findElement(By.xpath('//*[@id="duel"]'))
    duel.click()
    await driver.sleep(3000)
})