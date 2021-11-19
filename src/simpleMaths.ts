const promptSync = require('prompt-sync');
const prompt = promptSync();

export function calcAreaSquare(sideLength: number): number {
    return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
    return width * height / 2;
}

export function calcAreaCircle(radius: number): number {
    const pi = 3.14
    return pi * (radius * radius)
}