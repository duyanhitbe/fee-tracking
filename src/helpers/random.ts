export function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomColor(){
    return `rgba(${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)}, 0.2)`;
}