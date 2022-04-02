export const randomValueFromArray = <T>(arr: T[]): T  => {
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    return randomElement;
}