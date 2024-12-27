{
    // Problem-2
    type NumberArray = number[];

    const removeDuplicates = (array: NumberArray): NumberArray => Array.from(new Set(array));

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

    console.log(result); // [1, 2, 3, 4, 5]
}