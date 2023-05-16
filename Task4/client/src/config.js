let BASE_URL = "https://post-it-heroku.herokuapp.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:4000/";
}

export { BASE_URL };
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
P