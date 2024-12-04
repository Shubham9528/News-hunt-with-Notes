import React from "react";
import React, { useEffect, useState } from "react";


const API_KEY = "d9dfbc339aba4d978d9a4f47873e0f80";
export default function ApiCall() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function getNews() {
            try {
                const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
                const response = await axios.get(url);
                console.log(response.data.content); // Log the response for debugging
                setNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        }

        getNews();
    }, []); // Empty dependency array ensures this runs once on mount
    console.log(news);
     
    return (
        <div>
            <div className="flex flex-row gap-8 flex-wrap justify-center">
                {news.map((article, index) => (
                    <div
                        className="bg-slate-500 text-2xl h-80 w-96 flex justify-center items-center  rounded-3xl overflow-y-auto custom-scrollbar p-"
                        key={index}>
                        <marquee direction="up" scrollamount="1" className="h-80 w-96">
                            <ul className="text-base text-white">
                                <li className="mb-2">{article.content}</li>
                            </ul>
                        </marquee>
                    </div>
                ))}
            </div>
        </div>
    );
    
}