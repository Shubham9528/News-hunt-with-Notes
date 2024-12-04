import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function Card({ search }) {
    const [news, setNews] = useState([]);
    console.log(search);
    

    useEffect(() => {
        
        console.log(process.env.API_KEY_MEDIASTACK);
        async function getNews() {
            try {
                
                const url = `https://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_API_KEY_MEDIASTACK}&languages=en&countries=us&categories=${search}&limit=100`;
                const response = await axios.get(url);
                // setNews(response.data.articles);//for news_api
                setNews(response.data.data);//for media_stack
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        }
        getNews();    
    }, [search]); 
    

    return (
        <div className="flex flex-wrap justify-center gap-8">
            {news.map((data, index) => (
                <div
                    className="bg-white shadow-lg rounded-3xl overflow-hidden w-96"
                    key={index}
                >
                    {data.image && (
                        <img
                            src={data.image}
                            alt="News"
                            className="h-48 w-full object-cover rounded-t-3xl"
                        />
                    )}
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2 text-gray-800">Channel: {data.author}</h2>
                        <p className="text-sm font-bold text-gray-600 mb-4">Title: {data.title}</p>

                        <marquee direction="up" scrollamount="1" className="text-gray-700">
                            <p className="text-sm text-gray-600 mb-4">{data.description}</p>
                            {/* {article.content} */}
                        </marquee>
                    </div>
                </div>
            ))}
        </div>
    );
}
