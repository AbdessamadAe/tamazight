export const latinToTifinagh = {
  'gh': 'ⵖ', 'kh': 'ⵅ', 'sh': 'ⵛ', 'th': 'ⵟ', 'dh': 'ⴹ', 'zh': 'ⵥ',
  'a': 'ⴰ', 'b': 'ⴱ', 'g': 'ⴳ', 'd': 'ⴷ', 'e': 'ⴻ', 'f': 'ⴼ', 
  'k': 'ⴽ', 'h': 'ⵀ', 'ɛ': 'ⵄ', 'm': 'ⵎ', 't': 'ⵜ', 'č': 'ⵞ', 
  'ṭ': 'ⵟ', 's': 'ⵙ', 'z': 'ⵣ', 'ṛ': 'ⵕ', 'ḍ': 'ⴹ', 'n': 'ⵏ', 
  'l': 'ⵍ', 'r': 'ⵔ', 'ṣ': 'ⵚ', 'c': 'ⵛ', 'j': 'ⵊ', 'x': 'ⵅ', 
  'ḥ': 'ⵃ', 'w': 'ⵡ', 'ɣ': 'ⵖ', 'ʷ': 'ⵯ', 'ẓ': 'ⵥ', 'q': 'ⵇ', 
  'y': 'ⵢ', 'i': 'ⵉ', 'u': 'ⵓ', 'p': 'ⵒ', 'v': 'ⵠ'
};

export const tifinaghToLatin = Object.fromEntries(
  Object.entries(latinToTifinagh).map(([lat, tif]) => [tif, lat])
);