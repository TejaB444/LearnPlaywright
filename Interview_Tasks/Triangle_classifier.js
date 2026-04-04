
// Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, 
// determine if the triangle is equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), or scalene (no sides are equal). 
// Use an if-else statement to classify the triangle.

let side1=13, side2=13, side3=13;

if(side1 == side2 && side2 ==side3 && side3 == side1)
{
    console.log("equilateral Traingle")
}
else if(side1 == side2 || side2 ==side3 || side3 == side1 )
{
    console.log("isosceles Traingle")
}
else
{
    console.log("Scalene traingle")
}
