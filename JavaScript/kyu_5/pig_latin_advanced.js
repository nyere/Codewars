// https://www.codewars.com/kata/533c46b140aafec05b000d31

const translate = (sentence) => {
    const vowels = ['a', 'e', 'u', 'o', 'i', 'A', 'E', 'U', 'O', 'I'];
    const words = sentence.split(' ');

    const isPunctuation = (word) => {
        const regex = /[?.!,:]+/;
        const found = word.match(regex);
        return found;
    };

    const results = words.map((word) => {
        const hasPunctuation = isPunctuation(word);

        // DONE handle vowels
        if (vowels.includes(word[0])) {
            if (hasPunctuation) {
                const punctuationMark = hasPunctuation[0];
                return `${word
                    .split('')
                    .slice(0, word.length - punctuationMark.length)
                    .join('')}way${punctuationMark}`;
            }
            return `${word}way`;
        }

        // handle consonants
        const isUpperCase = word[0] === word[0].toUpperCase();

        let index = 1;
        let foundVowel = false;
        let vowelIndex;

        while (!foundVowel) {
            if (vowels.includes(word[index])) {
                vowelIndex = index;
                foundVowel = true;
            }
            index++;
        }

        const consonants = word.slice(0, vowelIndex).toLowerCase();
        let modifiedWord = word;
        let punctuationMark = '';
        if (hasPunctuation) {
            punctuationMark = hasPunctuation[0];
            modifiedWord = word.slice(0, word.length - punctuationMark.length);
        }
        modifiedWord =
            modifiedWord.slice(vowelIndex) +
            consonants +
            'ay' +
            punctuationMark;

        if (isUpperCase) {
            return modifiedWord.charAt(0).toUpperCase() + modifiedWord.slice(1);
        }
        return modifiedWord;
    });
    return results.join(' ');
};
