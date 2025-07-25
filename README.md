# YouTube Clone - Draggable

A single-page YouTube clone built with HTML, CSS, and JavaScript, featuring a draggable video grid, the official YouTube logo, and local thumbnail images. This project is designed for educational purposes and showcases a responsive, interactive frontend interface.

## Overview

This project replicates the YouTube homepage with a fixed header, sidebar navigation, and a scrollable video grid that can be dragged up and down using mouse or touch input. It uses Tailwind CSS for styling, includes the official YouTube logo, and displays custom video thumbnails stored locally.

## Features

- **Draggable Video Grid**: Scroll through videos by dragging with the mouse or swiping on touch devices.
- **Official YouTube Logo**: Includes the YouTube logo (stored locally as `images/youtube-logo.svg`) in the header.
- **Responsive Design**: Adapts to different screen sizes with a flexible grid layout (1-4 columns).
- **Search Functionality**: Redirects to YouTube search results when a query is entered.
- **Sidebar Navigation**: Toggleable sidebar with Home, Subscriptions, and Library links.
- **Custom Thumbnails**: Uses local images (`tech1.jpg`, `tech2.jpg`, `tech3.jpg`, `tech4.jpg`) for video previews.
- **Styling**: Features a YouTube-inspired gradient header, Roboto font, and fade-in animations.

## Prerequisites

- **Visual Studio Code**: Install from [code.visualstudio.com](https://code.visualstudio.com/).
- **Live Server Extension**: Install the "Live Server" extension by Ritwick Dey in VS Code for local hosting.
- **Web Browser**: Any modern browser (Chrome, Firefox, Edge) for testing.

## Installation

1. **Clone the Repository**:
   - If using Git, run:
     ```
     git clone https://github.com/khushbukumar12/youtube-clone-draggable.git
     ```
   - Alternatively, download the ZIP file from the repository and extract it.

2. **Navigate to Project Directory**:

   cd youtube-clone-draggable

3. **Verify Images**:
- Ensure the `images` folder contains `logo.png`, `tech1.jpg`, `tech2.jpg`, `tech3.jpg`,`tech3.jpg`,`tech4.jpg`,`tech5.jpg`,`tech6.jpg`,`tech7.jpg`,`tech8.jpg`,`tech9.jpg`,`tech10.jpg`,`tech11.jpg`,`tech12.jpg`, and `tech13.jpg`.
- If missing, download the official YouTube logo from [YouTube Brand Resources](https://www.youtube.com/howyoutubeworks/resources/brand-resources/) and add your own thumbnail images.

4. **Initialize Project**:
- Run `npm init -y` if `package.json` is not present.

## Usage

1. **Start Live Server**:
- Open the project in VS Code.
- Right-click `index.html` and select "Open with Live Server" to launch at `http://localhost:5500`.

2. **Interact with the Clone**:
- Drag the video grid up/down to scroll.
- Use the search bar to redirect to YouTube search results.
- Toggle the sidebar on mobile-sized screens via the menu button.
- Hover over video cards to see scaling and brightness effects.

## File Structure

youtube-clone/├── images/│   ├── youtube-logo.svg│   ├── tech1.jpg│   ├── tech2.jpg│   ├── tech3.jpg│   ├── tech4.jpg├── index.html├── styles.css├── script.js├── package.json

## Troubleshooting

- **Logo Not Displaying**: Ensure `images/youtube-logo.svg` exists and the filename matches exactly (case-sensitive). Redownload from the branding page if needed.
- **Images Not Loading**: Check the `images` folder for `tech1.jpg` to `tech4.jpg`. Verify paths in `index.html` (e.g., `images/tech1.jpg`).
- **Dragging Issues**: Ensure `script.js` is loaded and test in a supported browser. Adjust the `walk` multiplier in `script.js` for scroll speed.
- **Console Errors**: Open browser developer tools (F12) to diagnose 404 or JavaScript errors.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make changes and commit (`git commit -m "Description of changes"`).
4. Push to the branch (`git push origin feature-name`).
5. Submit a pull request.

## License

This project is for personal learning purposes only. The YouTube logo is used under fair use for educational demonstration. For commercial use, obtain permission from YouTube/Google.

## Acknowledgments

- Inspired by YouTube’s design and functionality.
- Built with assistance from xAI’s Grok,google,youtube videos.
- Uses Tailwind CSS and the Roboto font from Google Fonts.
