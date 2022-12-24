import React,{useState,useEffect} from 'react';
import "./home.scss"
import {API_KEY, BASE_URL} from "../../components/api/api"
import MusicCart from '../../components/musicCart/MusicCart';
// import axios
import axios from 'axios';
const Home = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const newData = await axios.get(`${BASE_URL}/?method=chart.gettopartists&api_key=${API_KEY}&format=json`);
            setDatas(newData)
        }
        fetchData()
    }, [])

    return (
        <div className="home">
            <div className="home-title">
                <span>welcome to last top music...</span>
                <h1>top artists</h1>
            </div>
                {
                    datas?.data?.artists?.artist?.map((item , i) => (
                        <MusicCart key={i} img={item.image[0]["#text"]} name={item.name}
                                   playcount={item.playcount}
                                   listeners={item.listeners}
                                    mbid={item.mbid}/>
                    ))
                }

        </div>
    );
};

export default Home;
