let userName= "John Doe";
let password = "password123";
let isAccountLocked = true;


if ((userName == "John Doe" &&  password == "password123") && !isAccountLocked) {
    console.log("Login successful");
}
else if (userName == "John Doe" && password != "password123") {
    console.log("Incorrect password");
} else if (userName != "John Doe") {
    console.log("User not found");
} else if (isAccountLocked) {
    console.log("Account is locked");
}else  if (userName == "John Doe" && password == "password123" && isAccountLocked) {
    console.log("Account is locked");
}
