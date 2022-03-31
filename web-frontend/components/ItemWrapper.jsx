import React from 'react';
import PropTypes from 'prop-types';

const ItemWrapper = ({ itemName, data }) => (
    <div className="card p-3 w-100 text-center">
        <div>
            <strong>{`${itemName}: `}</strong>
            {
                data
                    ? `${data.name} (${data.description || 'No description!'})`
                    : <small style={{ color: 'red' }}>{`The selected ${itemName} does not exist!`}</small>
            }
        </div>
    </div>
);

ItemWrapper.protoTypes = {
    itemName: PropTypes.string.isRequired,
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};

export default ItemWrapper;
