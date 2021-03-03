const express = require('express');
const { todoRoutes, htmlRoutes, userRoutes } = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3001;

// parse json request body
app.use(express.urlencoded({ extended: true }));
// parse urlencoded request body
app.use(express.json());

app.use("/", htmlRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);
// app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})