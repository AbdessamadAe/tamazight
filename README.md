# Tamazight Transliterator

A JavaScript library that transliterates Latin-script Tamazight into Tifinagh and vice versa. This lightweight utility makes it easy to convert between Latin and Tifinagh scripts for the Tamazight (Berber) language.

## Installation

```sh
npm install tamazight
```

## Features

- Transliterate from Latin to Tifinagh script
- Transliterate from Tifinagh to Latin script
- Improves searchability of Amazigh content by enabling Latin-based search
- Works in Node.js and browser environments
- Command-line interface (CLI) included
- Simplifies development of websites with Tifinagh text


## Web Development Benefits

### Enhanced Website Accessibility

This library makes developing websites with Tifinagh text significantly easier:

- **Dynamic Text Conversion**: Convert user input on-the-fly for bilingual interfaces
- **Content Management**: Store content in Latin script and display in Tifinagh
- **Form Processing**: Accept input in either script and normalize for backend processing
- **Responsive Text**: Easily switch between scripts based on user preferences

### Search Engine Optimization for Amazigh Content

The transliteration capabilities provide significant SEO advantages:

- **Improved Discoverability**: Users can search using Latin characters and find Tifinagh content
- **Dual Indexing**: Search engines can index content in both scripts when properly implemented
- **Content Accessibility**: Makes Amazigh language content accessible to a wider audience
- **Metadata Enhancement**: Use both scripts in metadata to improve search engine visibility

Example implementation for SEO benefits:

```jsx
<!-- HTML example with SEO benefits -->
import React, { useState } from "react";
import { transliterateToTifinagh } from "tamazight";

function TamazightContent() {
  const [latinText] = useState("Tamazight tutlayt n Imazighen");

  // Transliterate the Latin text to Tifinagh
  const tifinaghText = transliterateToTifinagh(latinText);

  return (
    <article>
      {/* Tifinagh content for display */}
      <h1 className="tifinagh">{tifinaghText}</h1>
      
      {/* Hidden Latin text for SEO purposes */}
      <h1 data-latin={latinText} className="hidden-for-visual">
        {latinText}
      </h1>
    </article>
  );
}

export default TamazightContent;

```

## Usage

### In JavaScript (ES Modules)

```javascript
import { transliterateToTifinagh, transliterateToLatin } from 'tamazight';

// Latin to Tifinagh
const tifinaghText = transliterateToTifinagh('tamghart');
console.log(tifinaghText); // Outputs: ⵜⴰⵎⵖⴰⵔⵜ

// Tifinagh to Latin
const latinText = transliterateToLatin('ⴰⵖⵉⵍⴰⵙ');
console.log(latinText); // Outputs: aghilas
```

### In HTML

```html
<script type="module">
  import { transliterateToTifinagh, transliterateToLatin } from './path/to/tamazight/src/index.js';
  
  // Latin to Tifinagh
  const tifinaghText = transliterateToTifinagh('tamghart');
  
  // Tifinagh to Latin
  const latinText = transliterateToLatin('ⵜⴰⵎⵖⴰⵔⵜ');
</script>
```

### Command Line Interface

The package includes a CLI tool for quick transliteration:

```sh
# Install globally (optional)
npm install -g tamazight

# Latin to Tifinagh
tamazight-transliterate "tamghart" --to-tifinagh

# Tifinagh to Latin
tamazight-transliterate "ⵜⴰⵎⵖⴰⵔⵜ" --to-latin
```

## API Reference

### transliterateToTifinagh(text)

Converts Latin script Tamazight text to Tifinagh script.

- **Parameters**: `text` (String) - The Latin script text to convert
- **Returns**: String - The text converted to Tifinagh script

### transliterateToLatin(text)

Converts Tifinagh script text to Latin script Tamazight.

- **Parameters**: `text` (String) - The Tifinagh script text to convert
- **Returns**: String - The text converted to Latin script

## Character Mapping

The library uses the following character mappings:

### Latin to Tifinagh (sample)
- a → ⴰ
- b → ⴱ
- gh → ⵖ
- kh → ⵅ
- ...

See the `src/mappings.js` file for the complete mapping.

## Examples

See the `examples` directory for more usage examples:
- `example.js` - Node.js example
- `example.html` - Browser example

## Development

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Setting Up Development Environment

```sh
# Clone the repository
git clone https://github.com/yourusername/tamazight.git
cd tamazight

# Install dependencies
npm install

# Run tests
npm test
```

### Running Tests

```sh
npm test
```

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style

- Follow standard JavaScript conventions
- Add JSDoc comments for new functions
- Add tests for new features
- Update documentation as needed

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all contributors who have helped with the development
- Inspired by the need for better digital tools for Tamazight language

## Contact

Abdessamad Ait Elmouden - [GitHub Profile](https://github.com/Abdessamadae)

[Linkedin Profile](https://www.linkedin.com/in/abdessamad-ait-elmouden/)

