const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Nicole J. Lacorte\n");
  res.write("BSIT - BA 4102 \n");
  res.write("The harder you work for something, the greater you’ll feel when you achieve it.\n");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});