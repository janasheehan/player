import React, { useState, useEffect} from "react";

const AlbumArt = ({image, album, artist}) => {

    const [showDefault, setShowDefault] = useState(false)
    const defaultImage = '/images/unavailable.jpg';
    const text = `Vinyl cover look for ${album} by ${artist}`;

    const handleError = () => {
        setShowDefault(true);
    }

    useEffect(() => {
        setShowDefault(false);
    },[artist])

    return  <img
        className="album-cover"
        src={ showDefault ? defaultImage : image }
        alt={text}
        onError={handleError}
    />
}

export default AlbumArt;
