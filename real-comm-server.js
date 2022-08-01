const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8000 });
wss.on("connection", (ws) => {
    console.log("new client connected");

    ws.on('message', (data) => {
        console.log(`message recieved from user: ${data}`);
        ws.send("hi TANYA...!! How are youu...?")
    });


    ws.on("close", () => {
        console.log("client disconnected");
    })
});
   


