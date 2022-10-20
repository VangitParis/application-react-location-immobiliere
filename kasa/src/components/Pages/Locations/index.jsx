import React from 'react';
import { useParams } from 'react-router-dom';



export default function Locations(){
    const params = useParams()
    console.log(params);
    return(
        <div>
            <h1>
                Les logements se trouvent ici 🥳
            </h1>

        </div>
    )

}