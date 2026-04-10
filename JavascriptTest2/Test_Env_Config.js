// Test Environment Config
// In CI/CD pipelines, tests run against different environments. 
// Write a JavaScript program using a switch statement that takes an environment name 
// stored in a variable and prints the base URL, API key pattern, and timeout. 
// Use const for fixed values and let for the assembled config.

// Environments: dev, staging, qa, production/prod. 
// Each has different base URL, API key prefix, timeout, and description.

// Input:
// envName = "staging"

// Output:
// Environment: STAGING 
// Base URL: https://staging-api.testingacademy.com 
// API Key: stg_key_xxxx-xxxx 
// Timeout: 8000ms 
// Description: Staging - Pre-production mirror

let envName = "STAGing"

let url,APIkey, Timeout, Description;

switch(envName.toLowerCase()) {
    case "dev":
        {
            url= "https://dev-api.testingacademy.com" 
            APIkey = "dev_key_xxxx-xxxx" 
            Timeout = 5000 
            Description= "Developer's environment - unit tests"
        }
    case "qa":
        {
            url= "https://qa-api.testingacademy.com" ;
            APIkey = "qa_key_xxxx-xxxx" ;
            Timeout = 6000; 
            Description= "QA envrionment for Testers";
            break;
        }
    case "staging":
        {
            url= "https://staging-api.testingacademy.com" ;
            APIkey = "stg_key_xxxx-xxxx" ;
            Timeout = 6500 ;
            Description= "Staging - Pre-production mirror";
            break;
        }
    case "uat":
        {
            url= "https://uat-api.testingacademy.com" 
            APIkey = "uat_key_xxxx-xxxx" 
            Timeout = 7000
            Description= "UAT environment - Client tests";
            break;
        }
    case "production":
        {
            url= "https://prod-api.testingacademy.com" ;
            APIkey = "prod_key_xxxx-xxxx"; 
            Timeout = 8000;
            Description= "Production Environment";
            break;
        }
    default:
        {
            envName = envName + " is Invalid.";
            url= "invalid url" ;
            APIkey = "invalid key" ;
            Timeout = 'invalid timeout' ;
            Description= "unvalid description";
        }
}
console.log("Environment: " + envName.toUpperCase());
console.log("Base URL: " + url);
console.log("API Key: " + APIkey);
console.log("Timeout: " + Timeout);
console.log("Description : " + Description);

