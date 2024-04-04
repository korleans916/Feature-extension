# Full Stack Glimmer App

This Color Analysis Application is a web-based platform designed to provide personalized color analysis recommendations based on user-provided physical features. By combining AI technology and user inputs, the application aims to offer tailored fashion advice to enhance users' style choices. 

## Technologies used

- React: A JavaScript library for building user interface.
- Bard AI Integration: Integrates Gemini AI technology for generating personalized color analysis recommendations.
- VPN: Utilized to access Bard AI services from regions where it's not yet available. Please check supported countries and territories where the API is available: https://support.google.com/gemini/answer/13575153?hl=en
Node.js: A JavaScript runtime environment for server-side scripting.
Express.js: A web application framework for Node.js, facilitating server-side development.

## Setup

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm install` install dependencies related to React (the client).


### API Prep

Before calling the **Gemini API**, you need to set up your project, which includes setting up your API key, installing the SDK package, and initializing the model.

**Set up your API key**
To use the Gemini API, you'll need an API key. If you don't already have one, create a key in Google AI Studio: https://makersuite.google.com/app/apikey

**Secure your API key**
It's strongly recommended that you do not check an API key into your version control system. Instead, you should use a secrets store for your API key.

All the snippets in this tutorial assume that you're accessing your API key as an environment variable.

**Install the SDK package**
To use the Gemini API in your own application, you need to install the GoogleGenerativeAI package for Node.js:

`npm install @google/generative-ai`

### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 4000
- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.

## Usage

1. Upon accessing the application, users are presented with options to upload a photo and input their skin tone, hair color, and eye color.
2. After providing the necessary information, users can click the "Get my color analysis" button to generate personalized color recommendations.
3. The application will display the uploaded photo along with the color analysis results, providing insights into suitable clothing colors based on the user's physical features.

## Notes

- **VPN Usage:** Ensure that you have a VPN configured to access Bard AI services from regions where it's not yet available.
- **Bard AI Token:** Obtain a Bard AI token for API authentication and access to AI-generated recommendations.
- **Dependencies:** Make sure to install all required dependencies using npm install before running the application.

## Future Enhancements:

1. Implementation of a user account system to store analysis results and enable personalized recommendations.
2. Expansion of analysis sections to include undertones and visual validation through user-uploaded photos.
3. Integration of a Call-to-Action (CTA) for personalized paid analysis services by professional color fashion analysts.
4. Development of a clothing exchange platform to promote sustainable fashion practices and community engagement.

## Contributing:

Contributions to the Color Analysis Application are welcome! Feel free to submit pull requests for bug fixes, feature enhancements, or documentation improvements.

## Acknowledgments:

Special thanks to the Bard AI team for providing access to their cutting-edge technology.
Inspiration drawn from the fashion industry and community-driven initiatives promoting style empowerment and sustainability.