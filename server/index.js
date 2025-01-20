const express = require("express");

const server = express();

server.use("/", express.static('client'))

server.get("/api", (request, response) => {

    response.setHeader("Content-type", "text/html;charset=utf-8");
    response.end("Я твой апи шатал")
})

server.listen(3000, () => {

    console.log(server.settings)
})