# Gemini Clone

A responsive React-based clone of Google's Gemini AI interface that integrates with the Google GenAI API to provide an interactive AI assistant experience.

## Features

-  Real-time AI interactions using Google's Gemini 1.5 Pro model
-  Chat interface with animated text responses
-  Clean, modern UI resembling the official Gemini interface

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **API Integration**: Google GenAI JavaScript SDK
- **Styling**: CSS with responsive design
- **Language**: JavaScript (JSX)

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- Google GenAI API key

### Installation

1. Clone the repository
   ```bash
   git clone https://your-repository-url.git
   cd gemini-clone
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```
   VITE_GENAI_API_KEY=your_api_key_here
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
gemini-clone/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and icons
│   ├── components/
│   │   ├── Main/         # Main chat interface
│   │   └── SideBar/      # Sidebar navigation
│   ├── config/
│   │   └── gemini.js     # Gemini API configuration
│   ├── context/          # React context for state management
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── index.html
└── vite.config.js
```

## Usage

1. Type your prompt in the input field at the bottom of the screen
2. Press the send button or hit Enter
3. View the AI's response, which appears with a typing animation
4. Create a new chat using the "+" button in the sidebar
5. Access your chat history from the sidebar

## API Usage

This project uses the Google GenAI API to interact with the Gemini 1.5 Pro model. For more information about the API and its capabilities, visit [Google AI for Developers](https://ai.google.dev/).

### Security Note

Be sure to protect your API key and never commit it directly to your repository. This project should be configured to use environment variables for sensitive information.

## Customization

You can customize various aspects of the application:

- Modify the theme and styling in the CSS files
- Add new prompt suggestions in the `Main.jsx` component
- Change the AI model by updating the `gemini.js` configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
