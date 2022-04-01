require("chromedriver");
const {Builder} = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome");

const chromeDriver = () => {
    let option = new chrome.Options();
    if(process.env.HEADLESS === "true") {
        option.addArguments("--headless")
      }
      option.addArguments("--window-size=1024,768");
    
      const driver = new Builder().forBrowser("chrome").setChromeOptions(option).build();

      return driver;
 };

 module.exports = {chromeDriver};
 