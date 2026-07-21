const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
=========================================
🚀 Traiger Backend Started Successfully
=========================================
Server : http://localhost:${PORT}
Mode   : ${process.env.NODE_ENV || "development"}
=========================================
`);
});