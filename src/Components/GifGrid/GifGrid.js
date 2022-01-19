import React/*, { useState, useEffect }*/ from 'react';
import PropTypes from 'prop-types';
import useFetchGifs from '../../hooks/useFetchGifs';
import GridItem from '../GridItem/GridItem';

const GifGrid = ({ categoria }) => {

    const {data: images, loading} = useFetchGifs(categoria);

    return (
        <>
            <h2>{categoria}</h2>
            {loading && 'Cargando las imagenes...'}
            <div className="card-grid">
                {
                    images.map(img =>
                        <GridItem 
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    );
};

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}

export default GifGrid;