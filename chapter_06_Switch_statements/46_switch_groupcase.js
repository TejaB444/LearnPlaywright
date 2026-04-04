let browser="Safari";

switch(browser)
{
    case "Edge":
    case "Chrome":
    case "Brave":
    case "Opera":
        console.log("You are using Chromium based browser");
        break;
    case "Firefox":
        console.log("You are using Mozilla Firefox");
        break;
    case "Safari":
        console.log("Apple browser");
        break;
    default:
        console.log("Unknown browser");
}