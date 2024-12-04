import React, { useEffect, useState } from "react";
import axios from 'axios';

// const API_KEY_NEWS_API = "d9dfbc339aba4d978d9a4f47873e0f80";
const API_KEY_MEDIASTACK="26fafcb475df43e2254fcfed21fe74cd";
export default function Card({ search }) {
    const [news, setNews] = useState([]);
    console.log(search);
    

    useEffect(() => {
        let intervalId;

        async function getNews() {
            try {
                {/*Categories:business,technology,general,business,entertainment,health,science,technology,sports*/ }
                const url = `http://api.mediastack.com/v1/news?access_key=${API_KEY_MEDIASTACK}&languages=en&countries=us&categories=${search}&limit=100`; 
                const response = await axios.get(url);
                // setNews(response.data.articles);//for news_api
                setNews(response.data.data);//for media_stack
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        }

       
        getNews();
        // intervalId = setInterval(getNews, 60000);
           return () => {
            // clearInterval(intervalId);
        };
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
