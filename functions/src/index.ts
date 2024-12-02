import * as functions from "firebase-functions";
import express from "express";
import * as path from "path";

const expressApp = express(); // Rename Express app instance to 'expressApp'

// Serve dynamic HTML for `/sabun`
expressApp.get("/sabuntable", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="bmstable" content="/assets/JSON/header.json">
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <title>SABUN Page</title>
      </head>
      <body>
        <script>
          window.location.href = "https://ctconnected.net/sabun";
        </script>
      </body>
    </html>
  `);
});

// Serve dynamic HTML for `/difftable`
expressApp.get("/alltable", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="bmstable" content="/assets/JSON/header2.json">
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <title>全譜面難易度表</title>
      </head>
      <body>
        <script>
          window.location.href = "https://ctconnected.net/difftable";
        </script>
      </body>
    </html>
  `);
});

// Fallback: Serve static files for other routes
expressApp.use(express.static(path.join(__dirname, "../public")));

// Export the Express app as an HTTPS Cloud Function
export const webApp = functions.https.onRequest(expressApp);
