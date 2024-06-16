const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

server.listen(PORT, () => {
  io.on("connection", (socket) => {
    console.log("HOPPAAAAAAAA");
    console.log(socket.id);
    //! Karşılama Mesajı Gönder...
    // io.in(roomID).emit()
    socket.emit("WELCOME_MESSAGE", ` ${socket.id} hosgeldiniz.`);
    socket.on("SEND_MESSAGE", (data) => {
      console.log("mesaj geldi", ` ${data}.`);
    });
    socket.on("NEW_BOOKMARK_EVENT", (bookmark) => {
      console.log("bookmark :>> ", bookmark);
      // io.emit("NEW_BOOKMARK_ADDED", bookmark);
      //! Gonderen hariç herkese bookmark bilgisini gonder..
      socket.broadcast.emit("NEW_BOOKMARK_ADDED", bookmark);
    });
  });
});
