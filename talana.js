const {By, Key} = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const { chromeDriver } = require("./chromeconfig");
const assert = require("assert");

const driver = chromeDriver();

describe("Talanita automatica", function(){
  before(async function(){
    await driver.get("https://talana.com/es/remuneraciones/login-vue#/");
  });

  it('Te marca talana amigx', async function(){

    // AQUI VA TU USUARIO
    await driver.findElement(By.css("input[aria-label='Usuario, Email o Rut']")).sendKeys("USUARIO");
    await driver.sleep(2000);
    // AQUI VA TU CONTRASEÑA
    await driver.findElement(By.css("input[aria-label='Contraseña']")).sendKeys("CONTRASEÑA");
    await driver.findElement(By.css("input[aria-label='Contraseña']")).sendKeys(Key.ENTER);
    await driver.sleep(6000);

    await driver.findElement(By.xpath("//span[contains(text(), 'Marcar asistencia')]")).click();
    await driver.sleep(500);
    if(process.env.HORA === "salida"){
      await driver.findElement(By.xpath("//div[contains(text(), 'Salida')]")).click();
    }
    //await driver.findElement(By.xpath("//span[contains(text(), 'Marcar')]")).click();

    await driver.sleep(3000);
      
    assert.ok(true);
   
  });
  
  after(async function(){
    await driver.quit();
  });

});
