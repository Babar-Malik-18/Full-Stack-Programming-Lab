# Lab 13 – API RESTful Deployment and Testing

This submission contains two professional Node.js + Express REST API projects with polished browser testing UIs:

1. **Task 1 – Weather Forecast API** using OpenWeatherMap
2. **Task 2 – News Headlines API** using NewsAPI.org

Both projects include:

- RESTful endpoints
- External API integration
- Structured JSON responses
- Error handling for invalid input, API key failure, API limits, and network issues
- Browser testing UI with modern animations
- Postman/browser test URLs
- Clean README files for each task

---

## Folder Structure

```text
lab_13_api_restful_deployment_and_testing_lab/
├── task1-weather-api/
│   ├── public/index.html
│   ├── src/routes/weatherRoutes.js
│   ├── src/controllers/weatherController.js
│   ├── src/services/weatherService.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── README.md
│
└── task2-news-api/
    ├── public/index.html
    ├── src/routes/newsRoutes.js
    ├── src/controllers/newsController.js
    ├── src/services/newsService.js
    ├── server.js
    ├── package.json
    ├── .env
    └── README.md
```

---

## Before Running

You need Node.js LTS installed.

You also need free API keys:

- OpenWeatherMap key: https://openweathermap.org/api
- NewsAPI key: https://newsapi.org/

---

## Run Task 1 – Weather Forecast API

Open terminal in this folder:

```bash
cd task1-weather-api
npm install
```

Open `.env` and replace:

```env
OPENWEATHER_API_KEY=YOUR_API_KEY_HERE
```

with your real key.

Start the server:

```bash
npm start
```

Open in browser:

```text
http://localhost:5000
```

Test API URLs:

```text
http://localhost:5000/api/weather/Karachi
http://localhost:5000/api/weather/Lahore
http://localhost:5000/api/weather/Islamabad/forecast
```

---

## Run Task 2 – News Headlines API

Open another terminal in this folder:

```bash
cd task2-news-api
npm install
```

Open `.env` and replace:

```env
NEWS_API_KEY=YOUR_API_KEY_HERE
```

with your real key.

Start the server:

```bash
npm start
```

Open in browser:

```text
http://localhost:6000
```

Test API URLs:

```text
http://localhost:6000/api/news/pk
http://localhost:6000/api/news/us?limit=5
http://localhost:6000/api/news/us/category/technology
http://localhost:6000/api/news/search/cricket
```

---

## Screenshots to Add in Your Word/PDF File

Add these screenshots before submitting to GCR:

1. Weather browser UI homepage
2. Weather current city result, for example Karachi
3. Weather 5-day forecast result, for example Islamabad
4. Weather Postman/browser JSON response
5. News browser UI homepage
6. News top headlines by country, for example Pakistan `pk`
7. News category result, for example `us/category/technology`
8. News Postman/browser JSON response
9. GitHub repository page URL

---

## GitHub Submission Steps

```bash
git init
git add .
git commit -m "Complete Lab 13 RESTful API deployment and testing"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Then add your instructor as collaborator using:

```text
sharifali.aulecturer@gmail.com
```

---

## Final Submission Document Should Include

- Lab title
- Student name and roll number
- GitHub repository URL
- All output screenshots
- Postman/browser testing screenshots
- Short explanation of both APIs

