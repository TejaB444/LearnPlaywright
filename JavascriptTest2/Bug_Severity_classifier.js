// Bug Severity Classifier
// As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

// const frequency = ["always", "often", "rarely"] ;
// const impact = ["blocker", "major", "minor"];

let frequency = "often", impact = "major"

if(frequency === "always")
{
    if (impact === "blocker") console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: P0 - Critical: Stop release immediately`);
    else if (impact === "major") console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: P1 - High: Fix & release immediately`);
    else console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: P2 - Medium: Can proceed release but fix in Next release`);
}
else if(frequency === "often")
{
    if (impact === "blocker") console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: P1 - High: Fix & release immediately`);
    else if (impact === "major") console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: P2 - Medium: Can proceed release but fix in Next release`);
    else console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: P3 - Low: Can proceed release but fix in any later release`);
}
else if(frequency === "rarely")
{
    if (impact === "blocker") console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: P2 - Medium: Can proceed release but fix in Next release`);
    else if (impact === "major") console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: P3 - Low: Can proceed release but fix in any later release`);
    else console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: P4 - Very Low: Can proceed release but fix deferred for later release`);;
}


