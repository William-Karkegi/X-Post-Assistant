# X Post Assistant

This Next.js application generates 8 daily X posts about user-provided topics using OpenAI and Perplexity AI APIs. It uses Tailwind CSS for styling.

## Features

- Generate 8 unique X posts daily
- User-friendly interface for topic input
- Utilizes both OpenAI and Perplexity AI for diverse content generation
- Responsive design using Tailwind CSS

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- OpenAI API key
- Perplexity AI API key

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/William-Karkegi/x-post-assistant.git
   cd x-post-assistant
   ```

2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

3. Copy the `.env.example` file to `.env.local` and fill in your API keys:

   ```
   cp .env.example .env.local
   ```

4. Edit `.env.local` and add your OpenAI and Perplexity AI API keys.

## Usage

1. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a topic in the input field and click "Generate Posts".

4. View the generated X posts.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This project is for educational purposes only. Make sure to comply with X's terms of service and API usage policies when using generated content.
