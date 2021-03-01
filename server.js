const express = require('express');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// parse json request body
app.use(express.urlencoded({ extended: true }));
// parse urlencoded request body
app.use(express.json());

app.use("/api/todos", routes);
// app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})