import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchCityProductGrid } from '../../services/CityProductService';
import ItemWrapper from '../../components/ItemWrapper';
import GridContainer from '../../components/GridContainer';

const Item = () => {
    const router = useRouter();
    const { city, product } = router.query;

    const [data, setData] = useState({});

    useEffect(async () => {
        if (city && product) {
            const resp = await fetchCityProductGrid(city, product);
            setData(resp);
        }
    }, [city, product]);

    return (
        <div>
            <div className="d-flex justify-content-around">
                <ItemWrapper
                    itemName="City"
                    data={data.city}
                />
                <ItemWrapper
                    itemName="Product"
                    data={data.product}
                />
            </div>
            <div>
                <GridContainer data={data.brochuresData} />
            </div>
        </div>
    );
};

export default Item;
