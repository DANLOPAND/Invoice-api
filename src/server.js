import express, { json } from "express";
import morgan from "morgan";
import productsRoutes from "./routes/product.routes.js";
import clientsRoutes from "./routes/client.routes.js";
import invoicesRoutes from "./routes/invoice.routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(json());

app.use(productsRoutes);
app.use(clientsRoutes);
app.use(invoicesRoutes);


const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
