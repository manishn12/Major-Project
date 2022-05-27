const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
dotenv.config({path:"backend/config/config.env"});

// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: "dw4rhlctb",
  api_key: "932585358435954",
  api_secret: "Upz8OjwxYZRbYETIZEcxiAODxtA"
});

const server = app.listen(4000, () => {
  console.log(`Server is working on http://localhost:${4000 || process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
