class car
{

    //constructor
    constructor(assigned_name){
        this.name=assigned_name;
        
    } 


    drive()
    {
        console.log("drive the car", this.name)
    }

    printDetailofCar()
    {
        console.log("details of the car", this.name)
    }
}

let hyundai_car = new car("i20")

hyundai_car.drive()