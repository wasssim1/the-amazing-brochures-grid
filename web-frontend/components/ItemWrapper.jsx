import React from 'react';
import PropTypes from 'prop-types';

const ItemWrapper = ({ itemName, data }) => data
    ? (
        <div className="card p-3 w-100 text-center">
            <div>
                <strong>{`${itemName}: `}</strong>
                {`${data.name} (${data.description || 'No description!'})`}
            </div>
        </div>
    )
    : null;

ItemWrapper.protoTypes = {
    itemName: PropTypes.string.isRequired,
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};

export default ItemWrapper;
