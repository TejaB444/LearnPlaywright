

if ("hello") console.log("The condition is true");
if("") console.log("The condition is false");
if(null)    console.log("The condition is false");
if(0)       console.log("The condition is false");
if(undefined) console.log("The condition is false");
if(" ")      console.log("The condition is true");
if([])       console.log("The condition is true");
if (function () {}) console.log("The condition is true");
if(1)      console.log("The condition is true");
if(NaN)    console.log("The condition is false");
if({})      console.log("The condition is true");