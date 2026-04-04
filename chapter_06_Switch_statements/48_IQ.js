let testscore=55;

switch(true)
{
    case (testscore >= 95):
        console.log("Grade: A ; Top Performer");
        break;
    case (testscore >= 85):
        console.log("Grade: B; Above expectations");
        break;
    case (testscore >= 70):
        console.log("Grade: C; Meets expectations");
        break;
    case (testscore >= 50):
        console.log("Grade: D; Needs Improvement");
        break;
    default:
        console.log("Grade: F ; Fail");
}