import axios from 'axios';
import { brochuresDB } from './brochuresAPI/brochuresDB.js';

const webCmsUrl = process.env.WEB_CMS_URL || 'http://127.0.0.1:8055';

export function requestDataCMS(elem, val, filterBy) {
    return new Promise((resolve, reject) => {
        const query = JSON.stringify({ [filterBy]: { _eq: val } });
        console.log(`Request for ${query}`);
        axios.get(`${webCmsUrl}/items/${elem}?filter=${query}`)
            .then((res) => resolve(res.data?.data?.[0] || null))
            .catch((err) => {
                if (err?.isAxiosError && err?.response?.status === 404) {
                    resolve({});
                }
                reject(err);
            });
    });
};

export function requestDataBonialInternalAPI() {
    return new Promise((resolve, reject) => {
        resolve(brochuresDB);
        // axios.get('/v1/brochures/search')
        //     .then((res) => resolve(res.data))
        //     .catch((err) => reject(err));
    });
};
