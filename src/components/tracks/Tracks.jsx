import React from 'react';
import "./tracks.scss";
const Tracks = ({img, name, artist, playcount}) => {
    return (
        <div className="tracks">
            <div className="tracks-left">
                <img  src={img} alt=""/>
            </div>
            <div className="tracks-right">
                <span className="tracks-right-albumName">{name}</span>
                <span className="tracks-right-name">{artist}</span>
                <span className="tracks-right-plays">players : {playcount}</span>
            </div>
        </div>
    );
};

export default Tracks;
