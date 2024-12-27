{
    // Problem-1
    const sumArray = (array: number[]): number => array.reduce((param1, param2) => param1 + param2, 0);

    const result = sumArray([1, 2, 3, 4, 5]);

    console.log(result); // 15
}