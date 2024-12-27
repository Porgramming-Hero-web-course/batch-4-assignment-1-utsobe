{
    // Problem-3
    type WordOccurrences = (sentance: string, word: string) => number;

    const countWordOccurrences : WordOccurrences = (sentance, word) => {
        // return sentance.split(word).length - 1;
        const regex = new RegExp(word, 'g');
        return (sentance.match(regex) || []).length;
    }

    const result = countWordOccurrences("I love typescript", "typescript");

    console.log(result); // 1
}