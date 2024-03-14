const httpServer = require("http-server");
const path = require("path");

const server = httpServer.createServer({
    root: path.join(__dirname, '/'),
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on http://localhost:3000');
});
