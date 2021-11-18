const promptSync = require('prompt-sync');
const prompt = promptSync();

export function calcAreaSquare(sideLength: number): number {
    return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
    return width * height / 2;
}

function circle(){
    const pi:number = 3.14159265358979323
    
    const choice:string = prompt("Do you want to calculate circle area or circumference? a/c\n");
    if(choice = "a"){
        const radius:string = prompt("What is the radius of the circle?");
        (radius * radius) * pi
    }
}