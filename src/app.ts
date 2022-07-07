import cors from 'cors';
import express from 'express';
import router from './routers/index.js'
import "./config/setup.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

export default app;