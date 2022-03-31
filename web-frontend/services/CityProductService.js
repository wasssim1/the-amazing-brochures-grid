const apiURL = process.env.WEB_API_URL || 'http://127.0.0.1:8080';

export async function fetchCityProductGrid(city, product) {
    //fetch(`${apiURL}/city-product-grid`, {})
    //.then((res) => console.log({res}))
    //.catch(err => console.log({err}));
    return new Promise((resolve, reject) => {
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ city, product }),
        };
        fetch(`${apiURL}/city-product-grid`, request)
            .then((res) => res.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });

    /*  const responseError = {
         type: 'Error',
         message: result.message || 'Something went wrong',
         data: result.data || '',
         code: result.code || '',
     };
 
     let error = new Error();
     error = { ...error, ...responseError };
     throw (error); */

};
