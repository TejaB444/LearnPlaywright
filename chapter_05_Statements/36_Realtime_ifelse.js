
let isLoggedin = true;
let userRole = "hacker";

if (isLoggedin)
{
    if (userRole === "admin")
    {
        console.log("Welcome, admin! You can manage the system.");
    } else if (userRole === "editor")
    {
        console.log("Welcome, editor! You can view/edit content.");
    }else if (userRole === "viewer")
    {
        console.log("Welcome, viewer! You can view content.");
    }else 
    {
        console.log(`Hello ${userRole}! You are not our user.`);
    }
}
else
{
    console.log("please log in ");
}