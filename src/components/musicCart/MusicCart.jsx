import React from 'react';
import {Link} from 'react-router-dom';
import "./musicCart.scss"
const MusicCart = ({img, name, playcount, listeners, mbid}) => {

    return (
            <div className="musicCart">
                <div className="musicCart-left">
                    <img src={img} alt=""/>
                </div>
                <div className="musicCart-right">
                    <Link className="musicCart-right-link" to={`/music/${mbid}`}>
                    <span className="musicCart-right-link-name">{name}</span>
                    </Link>
                    <span className="musicCart-right-playcount">playcount : {playcount}</span>
                    <span className="musicCart-right-listeners">listeners : {listeners}</span>
                </div>
            </div>
    );
};

export default MusicCart;
