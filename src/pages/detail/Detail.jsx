import React,{useState, useEffect} from 'react';
import "./detail.scss";
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import {API_KEY, BASE_URL} from '../../components/api/api';
import Tracks from '../../components/tracks/Tracks';
import Albums from "../../components/albums/Albums";
const Detail = () => {
    const {mbid} = useParams()
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${BASE_URL}/?method=artist.gettopalbums&mbid=${mbid}&api_key=${API_KEY}&format=json `)
            setAlbums(response)
        }
        const fetchData2 = async () => {
            const response = await axios.get(`${BASE_URL}/?method=artist.gettoptracks&mbid=${mbid}&api_key=${API_KEY}&format=json `)
            setTracks(response)
        }
        fetchData()
        fetchData2()
    }, [mbid])
    console.log(albums)
    return (
        <div className="detail">
            <div className="detail-header">
                <img src="https://images.unsplash.com/photo-1671811636280-ffd59649e424?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80" alt=""/>
                <span>{albums?.data?.topalbums?.["@attr"]?.artist}</span>
            </div>
            <div className="detail-bottom">
                <div className="detail-bottom-albums">
                    <h1>top albums</h1>
                    {
                        albums?.data?.topalbums?.album?.map((item,i) => (
                            <Albums
                                key={i}
                                name={item.name}
                                img={item.image[1]["#text"]}
                                playcount={item.playcount}
                                artist={item.artist.name}/>
                        ))
                    }
                </div>
                <div className="detail-bottom-tracks">
                    <h1>top tracks</h1>
                    {
                        tracks?.data?.toptracks?.track?.map((item,i) => (
                            <Tracks
                                key={i}
                                name={item.name}
                                img={item.image[1]["#text"]}
                                artist={item.artist.name}
                                playcount={item.playcount}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Detail;
