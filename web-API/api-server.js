
import express from 'express';
import expressAsyncHandler from "express-async-handler";
import dotenv from 'dotenv';
import cors from 'cors';
import { requestDataBonialInternalAPI, requestDataCMS } from './utils.js';

dotenv.config();

const app = express();
// apply middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.post('/city-product-grid', expressAsyncHandler(async (req, res) => {
    const { body: { city, product } } = req;
    if (!city || !product) {
        res.status(400).send({ message: 'City and Product parameters must be provided!' });
    } else {
        const cityCMS = await requestDataCMS('cities', city, 'url_representation');
        const productCMS = await requestDataCMS('products', product, 'url_representation');
        const brochuresData = await requestDataBonialInternalAPI();
        res.send({
            city: cityCMS,
            product: productCMS,
            brochuresData,
        });
    }
}));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`API Server app is listening on port ${port}`);
});
