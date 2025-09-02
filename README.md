# Video Proxy for Blogger

This is a simple proxy API for video downloader websites.  
It can be deployed on [Render](https://render.com) for free and used inside Blogger.

## 🚀 Deploy Steps
1. Upload this repo to your GitHub.
2. Go to Render → New Web Service → Connect GitHub.
3. Build command: `npm install`
4. Start command: `npm start`
5. Render will give you a live URL (example: `https://your-proxy.onrender.com`).

## 📌 Usage in Blogger
```html
<script>
async function getVideo() {
  let inputUrl = document.querySelector("#videoLink").value;
  let apiUrl = `https://your-proxy.onrender.com/api?url=${encodeURIComponent(inputUrl)}`;
  let res = await fetch(apiUrl);
  let data = await res.text();
  document.querySelector("#result").innerHTML = data;
}
</script>

<input type="text" id="videoLink" placeholder="Paste Video Link">
<button onclick="getVideo()">Download</button>
<div id="result"></div>
```
