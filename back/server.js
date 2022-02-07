const express = require("express");
const router = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8081;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
// app.use(express.static(path.join(__dirname, 'build')));
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})