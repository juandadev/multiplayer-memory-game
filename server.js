const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const messages = [];

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    messages.push(data);
    socket.broadcast.emit("message", data);
  });
});

nextApp.prepare().then(() => {
  app.get("/messages", (req, res) => {
    res.json(messages);
  });

  app.get("*", (req, res) => nextHandler(req, res));

  server.listen(port, (err) => {
    if (err) process.exit(0);
    console.log(`Ready on ${process.env.ENDPOINT}:${port}`);
  });
});
