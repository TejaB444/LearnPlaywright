// Write a program that calculates and displays the letter grade for a 
// given numerical score (e.g., A, B, C, D, or F) based on the following 
// grading scale:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

let grade = 55; // Example numerical score
if (grade >=90 && grade <=100)
{
    console.log("Grade: A");
}
else if (grade >= 80 && grade <=89)
{
    console.log( "Grade : B");
}
else if (grade >= 70 && grade <=79)
{
    console.log( "Grade : C");
}
else if (grade >= 60 && grade <=69)
{
    console.log( "Grade : D");
}
else {
    console.log("Grade : F");
}

