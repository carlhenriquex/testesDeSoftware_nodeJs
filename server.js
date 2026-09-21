const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/api/status", (req, res) => {
    res.json({
        sistema: "online"
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}

module.exports = { app, usuarios };
