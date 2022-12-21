import express, { json } from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes.js";
import clientsRoutes from "./routes/clients.routes.js";

const app = express();
app.use(morgan("dev"));
app.use(json());

app.use(productsRoutes);
app.use(clientsRoutes);


const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
