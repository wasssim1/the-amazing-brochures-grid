import React from 'react';
import PropTypes from 'prop-types';

const GridContainer = ({ data }) => {
    if (!data) {
        return null;
    }

    const {
        _embedded: { brochures = [] } = {},
        page,
    } = data;

    const dataFormatter = (dt) => {
        if (dt) {
            try {
                const res = new Date(dt);
                if (res !== 'Invalid Date') {
                    return res.toLocaleDateString('en-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                }
            } catch (err) {
                console.error('Unvalid Date!', { err });
            }
        }
        return '--';
    };

    return (
        <div className="row my-5 p-3">
            {
                brochures.slice(0, 12).map(({
                    id,
                    title,
                    validFrom,
                    validUntil,
                    _links,
                    brochureImages
                }) => (
                    <div
                        className="col-12 col-sm-6 col-md-4 card p-3 text-center"
                        key={id}
                    >
                        <a
                            href={_links.self.href}
                            target="_blank"
                        >
                            <strong>{title}</strong>
                        </a>
                        <img
                            src={brochureImages.thumbnails}
                            alt="brochure_thumbnail"
                        />
                        <small className="d-flex justify-content-between mt-auto py-3">
                            <div>{`Valid From: ${dataFormatter(validFrom)}`}</div>
                            <div>{`Valid Until: ${dataFormatter(validUntil)}`}</div>
                        </small>
                    </div>
                ))
            }
            <div></div>
        </div>
    );
};

GridContainer.protoTypes = {
    data: PropTypes.shape({
        _embedded: PropTypes.shape({
            brochures: PropTypes.array,
        }),
        page: PropTypes.array
    }).isRequired,
};

export default GridContainer;
