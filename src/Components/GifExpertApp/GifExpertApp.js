import React, { useState } from  'react';
import { AddCategory } from '../AddCategory/AddCategory';
import GifGrid from '../GifGrid/GifGrid';

const GifExpertApp = () => {

    const [cats, setCats] = useState(['One Punch']);

    return (
        <>
            <h1>Gif Expert App</h1>
            <hr></hr>
            <AddCategory setCats={setCats}/>
            <ol>
                {
                    cats.map( cat => <GifGrid key={cat} categoria={cat} />)
                }
            </ol>
        </>
    );
};

export default GifExpertApp;