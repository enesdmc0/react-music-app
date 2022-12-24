import React from 'react';
import "./albums.scss";


const Albums = ({name, img, playcount, artist}) => {
    return (
        <div className="albums">
                <div className="albums-left">
                    <img  src={img} alt=""/>
                </div>
                <div className="albums-right">
                        <span className="albums-right-albumName">{name}</span>
                    <span className="albums-right-name">{artist}</span>
                    <span className="albums-right-plays">players : {playcount}</span>
                </div>
        </div>
    );
};

export default Albums;
