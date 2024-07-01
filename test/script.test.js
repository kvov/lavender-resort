const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

describe('Selenium Test Suite', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        console.log("Driver initialized");
    }, 30000); 

    afterAll(async () => {
        await driver.quit();
        console.log("Driver quit");
    }, 30000);

    test('Form Validation: Arrival Date', async () => {
        await driver.get('http://127.0.0.1:5504/reservations.html');
        console.log("Navigated to Reservations page");

        // Ensure that the datepicker is ready and clear the arrival date field
        const datepicker = await driver.wait(until.elementLocated(By.id('datepicker')), 10000);
        await datepicker.clear();
        console.log("Cleared arrival date");

        // Submit the form
        const submitButton = await driver.wait(until.elementLocated(By.id('book')), 10000);
        await submitButton.click();
        console.log("Clicked submit button");

        // Wait for the validation message to appear and verify it
        const arrivalDateError = await driver.wait(until.elementLocated(By.css('#datepicker + span')), 10000);
        const errorText = await arrivalDateError.getText();
        expect(errorText).toBe("Select arrival date");
        console.log("Arrival date validation message verified");
    }, 30000); 

    test('Phone Number Validation: Invalid Format (Incorrect format)', async () => {
        await driver.get('http://127.0.0.1:5504/reservations.html');
        console.log("Navigated to Reservations page");

        // Enter an invalid phone number
        const phoneInput = await driver.wait(until.elementLocated(By.id('phone')), 10000);
        await phoneInput.clear();
        await phoneInput.sendKeys('1234567890');
        console.log("Entered invalid phone number");

        // Submit the form
        const submitButton = await driver.wait(until.elementLocated(By.id('book')), 10000);
        await submitButton.click();
        console.log("Clicked submit button");

        // Wait for the validation message and verify it
        const phoneError = await driver.wait(until.elementLocated(By.css('#phone + span')), 10000);
        const errorText = await phoneError.getText();
        expect(errorText).toBe("Must be 999-999-9999 format");
        console.log("Phone number validation message verified");
    }, 30000); 

    test('Fee Calculation: Number of Rooms', async () => {
        await driver.get('http://127.0.0.1:5504/reservations.html');
        console.log("Navigated to Reservations page");

        // Set the number of rooms and submit the form
        const roomsInput = await driver.wait(until.elementLocated(By.id('rooms')), 10000);
        await roomsInput.clear();
        await roomsInput.sendKeys('3');
        console.log("Entered number of rooms");

        const submitButton = await driver.wait(until.elementLocated(By.id('book')), 10000);
        await submitButton.click();
        console.log("Clicked submit button");

        // Wait for the fee calculation to update
        await driver.sleep(1000);

        // Check the fee value
        const feeInput = await driver.wait(until.elementLocated(By.id('fee')), 10000);
        const fee = await feeInput.getAttribute('value');
        expect(fee).toBe('30');
        console.log("Fee calculation verified");
    }, 30000); 
});
