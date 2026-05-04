enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}

function launchBrowser(browser: Browser) {
    switch (browser) {
        case Browser.Chrome:
            console.log("launching chrome")
            break;
        case Browser.Edge:
            console.log("launching Edge")
            break;
        case Browser.Firefox:
            console.log("launching Firefox")
            break;
        case Browser.Safari:
            console.log("launching Safari")
            break;
    }

}

launchBrowser(Browser.Chrome)
launchBrowser(Browser.Edge)
launchBrowser(Browser.Firefox)
launchBrowser(Browser.Safari)
