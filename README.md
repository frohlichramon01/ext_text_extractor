# Text Extractor - Chrome Extension

A little Chrome extension for extracting some text (from HTML elements) on the current page and displaying it in a popup textarea. Ideal for quickly grabbing text content and inserting it in your premade texts.

## Features

- **Easy copy & paste** — built in copy to clipboard button.
- **Simple & intuitive UI** — click the extension icon, click the button, get the text and copy!
- **Lightweight implementation** — built with HTML, CSS and JavaScript only.
- **Data Privacy** - if the extension is not published on the Chrome Store, all data is handle inside your browser.

## Installation

### From source:

1. Clone this repository:

   ```bash
   git clone https://github.com/frohlichramon01/ext_text_extractor.git
   cd ext_text_extractor

   ```

2. Open Chrome and go to **chrome://extensions/**

3. Enable Developer mode (toggle in the top-right)

4. Click Load unpacked, select this project's root folder

5. Click the extension icon — it’s ready to use

### (Optional) Packaged ZIP:

- You can also download this repo as a ZIP and load it unpacked via Chrome’s Extensions page.

## Usage:

1. Navigate to any web page.

2. Click the extension icon in the Chrome toolbar.

3. A popup opens with the blank text area.

4. Click the button that you want and get the text.

5. Copy the text to your clipboard or edit as needed.

### Example:

![Example Video](https://github.com/frohlichramon01/ext_text_extractor/other/Get-text-extractor.gif)

## File Structure:

ext_text_extractor/
├── manifest.json # Chrome extension metadata & permissions
├── popup.html # User interface for the popup
└── popup.js # Logic to extract and display page text

- manifest.json = declares permissions and scripts

- popup.html = shows a textarea for extracted text

- popup.js = injects a content script to pull text (e.g., using document.body.innerText) and populates the popup

## Development

- To modify extraction behavior, update popup.js — e.g., target specific elements or filter out boilerplate.

- Popup UI is standard HTML/CSS — feel free to customize its design and add/edit/remove the buttons.

- No build step needed; just reload the extension in Chrome after making changes.

## License:

- This project is released under the MIT License. See the LICENSE file for details.
