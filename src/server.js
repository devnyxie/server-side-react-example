require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});
// Now you can import modules that use JSX syntax

import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/App";

const app = express();

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Server Side React</title>
    </head>
    <body>
    ${html}
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
