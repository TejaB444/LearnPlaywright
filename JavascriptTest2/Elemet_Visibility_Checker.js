

let isPresent = false, isDisplayed = true, isEnabled = true;
let State=''; Severity='';

switch(true)
{
    case (isPresent == true && isDisplayed == true && isEnabled == true):
        {
            State='READY';
            Severity ='OK (all good)';
            console.log(`Status: ${State} Severity: ${Severity} Action: No action needed.`);
            break;
        }

    case (isPresent == true && isDisplayed == true && isEnabled == false):
        {
            State='DISABLED';
            Severity ='WARNING';
            console.log(`Status: ${State} Severity: ${Severity} Action: Element is visible but disabled. Wait for enable state or check preconditions.`);
            break;
        }
    case (isPresent == true && (isDisplayed == false || isEnabled == false)):
        {
            State='HIDDEN';
            Severity ='WARNING';
            console.log(`Status: ${State} Severity: ${Severity} Action: Element is Present but disabled or enabled. Wait for enable state or check preconditions.`);
            break;
        }
    default:
        {
           State='NOT FOUND'; 
           Severity ='CRITICAL';
           console.log(`Status: ${State} Severity: ${Severity} Action: Element not Present. Identify the right element`);
        }

}