import { tifinaghToLatin, latinToTifinagh } from './mappings.js';

// Transliterate Latin to Tifinagh
export function transliterateToTifinagh(text) {
    let output = '';
    let i = 0;

    while (i < text.length) {
        const twoChar = text.substring(i, i + 2);
        if (latinToTifinagh[twoChar]) {
            output += latinToTifinagh[twoChar];
            i += 2;
        } else {
            const oneChar = text[i];
            output += latinToTifinagh[oneChar] ?? oneChar; // Keep unknown chars unchanged
            i++;
        }
    }

    return output;
}

// Transliterate Tifinagh to Latin
export function transliterateToLatin(text) {
    let output = '';

    for (const char of text) {
        output += tifinaghToLatin[char] ?? char; // Keep unknown chars unchanged
    }

    return output;
}