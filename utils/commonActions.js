class CommonActions {
    constructor(page){
        this.page = page;
    }

    async waitForSeconds(seconds){
        await this.page.waitForTimeout(seconds * 1000);
    }

    async takeScreenshot(name){
        await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
    }
}

module.exports = CommonActions;