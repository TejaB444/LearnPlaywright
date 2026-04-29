
function placeOrder(item, callback)
{
    console.log("placing an order")
    callback();  // function call
    
}

//define function
function  print()
{
    console.log("normal function -- done with the order")
}

function bill()
{
    console.log("Bring the bill")
}

//firstway
placeOrder("burger", bill)


//second way
placeOrder("burger", function(){
    console.log("Am also a function without name")
})

//third way
placeOrder("burger", () => {
    console.log("Arrow function - Am also a function without name")
});