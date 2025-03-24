#!/usr/bin/env node
import { transliterateToTifinagh, transliterateToLatin } from '../src/transliterator.js';

const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Usage: tamazight-transliterate '<text>' [--to-latin | --to-tifinagh]");
    process.exit(1);
}

const text = args.slice(0, -1).join(" ");
const option = args[args.length - 1];

if (option === '--to-latin') {
    console.log(transliterateToLatin(text));
} else if (option === '--to-tifinagh') {
    console.log(transliterateToTifinagh(text));
} else {
    console.log("Invalid option. Use --to-latin or --to-tifinagh.");
}