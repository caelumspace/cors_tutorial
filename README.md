# 🌐 CORS Explained Visually – Code Companion

Welcome! This is the **official code repository** that accompanies the YouTube video:

🎥 [**“CORS Explained Visually (And How to Fix It in 5 Minutes)”**](#)  
(*Insert your YouTube link here*)

This repo includes a complete example demonstrating how **CORS errors** occur and how to **fix them properly** using:

- ✅ A simple **Express.js backend**
- ✅ A basic **React + Vite frontend**
- ✅ Clear examples of a CORS problem and solution
- ✅ Scene-by-scene documentation of how the tutorial was created

---

## 📦 What's Inside

cors-tutorial/ ├── client/ # React + Vite frontend using Yarn ├── server/ # Express backend with CORS support ├── scenes/ # Storyboard + script for the video └── README.md # You're here!


---

## 🚀 Getting Started

You’ll need **Node.js** and **Yarn** installed.

### Step 1: Clone the Repo

```bash
git clone https://github.com/your-username/cors-tutorial.git
cd cors-tutorial

cd server
yarn         # install Express and CORS middleware
yarn start   # starts the server on http://localhost:5000
📦 This server has one simple route:
GET /api/data → returns JSON like { message: "Hello from the server!" }

Step 3: Install & Start the Frontend
In a second terminal:

cd client
yarn         # install React and Vite
yarn dev     # starts Vite dev server at http://localhost:5173

🖱 Open your browser to http://localhost:5173
Click “Fetch Data from Server” and you’ll:

✅ See the data if CORS is correctly configured

❌ See a CORS error if the server is not allowing requests from the frontend

🔧 How to Trigger a CORS Error
To see the CORS error in action:

Go to server/index.js

2. Comment out the line:

app.use(cors({ origin: 'http://localhost:5173' }));

3. Restart the server:

yarn start

4. Refresh the frontend and click “Fetch Data from Server” again.

🎯 You’ll now get the dreaded CORS error:

“Access to fetch at 'http://localhost:5000/api/data' from origin 'http://localhost:5173' has been blocked by CORS policy…”

✅ How to Fix It
Uncomment the cors() configuration in server/index.js:

app.use(cors({
  origin: 'http://localhost:5173',
}));

Then restart the backend:

yarn start

Now everything works again. Boom. Fixed. 💥

🧠 Why This Works
CORS is a browser-enforced security layer. Your browser blocks frontend apps from making requests to another origin unless the server explicitly allows it.

This demo shows both sides:

The browser trying to fetch cross-origin data

The server either allowing or denying that request

📁 File Reference
Path	Description
server/index.js	Express server with CORS config
client/src/App.jsx	React component that fetches from backend
scenes/	Markdown docs for each scene of the video
🛠 Troubleshooting
Issue	Solution
❌ Fetch failed or CORS error	Make sure backend is running on port 5000 and cors() is configured
❌ localhost:5000 refused to connect	Start the backend: cd server && yarn start
❌ CORS error even with correct config	Check that the frontend is on http://localhost:5173 (Vite default) and update the origin in cors() to match
📚 Bonus – Using a Proxy (Dev-Only Hack)
You can also bypass CORS entirely in dev by setting up a proxy in Vite:

Edit client/vite.config.js:

export default {
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
};

2. Update your fetch URL in App.jsx:

fetch('/api/data')

🔒 Note: This works only in development. Do not use in production.

🎬 Behind the Scenes
Curious how the video was made?

Check out the /scenes folder for the full storyboard + script used to animate and explain each concept in the tutorial. It’s open-source and editable—great if you want to build your own tech explainer content.

❤️ Contribute / Remix
Want to build on this? Fork the repo and make it your own:

Add more HTTP methods (POST, PUT, etc.)

Simulate preflight requests

Visualize more complex CORS headers

🧪 Tech Stack
Express

cors

React

Vite

Yarn

📄 License
MIT License – use freely and share widely!

🔗 Links
🎥 YouTube Tutorial: [Insert Video Link Here]

🧠 CORS Docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

🛠 Express Docs: https://expressjs.com/

🧵 Twitter: @yourhandle


---

## ✅ After Setup

You can copy this `README.md` directly into your root repo. Just be sure to:

- Replace `your-username` in GitHub links.
- Add your **actual YouTube link** where noted.
- Replace any Twitter or personal links with your own if you want to drive traffic.

Let me know if you want a fancy `README` badge set or GitHub Pages for this repo too!
