const puppeteer = require('puppeteer');

getShot()
    .then(() => {
        console.log("Bajada ok");
    })
    .catch((err) => {
        console.log("Error en la descarga");
        console.dir(err);
    });

async function getShot() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://gabrielsule.github.io", {waitUntil: 'networkidle2'});


    const buffer = await page.screenshot({
		path: './screenshot.png'
    });

    await page.close();
    await browser.close();
}