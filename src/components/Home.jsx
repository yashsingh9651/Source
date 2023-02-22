import React from 'react';
import { Article } from './Article';
import Articles from './Data/DataArticle'
import { Flash } from './Flash';

export const Home = () => {
  return (
    <>
        <div className="border-b border-black flex justify-between">
            <div className='m-4 md:my-28'>
                <h1 className='text-2xl font-bold md:text-6xl font-[Phudu]'>Stay Curious.</h1>
                <h1 className='w-[40vw] text-lg md:text-xl mt-4 font-medium'>Discover stories, thinking, and expertise from writers on any topic.</h1>
            </div>
            <div className='w-[50vw] md:w-[43vw] lg:w-[25vw] my-2 md:mt-12 md:mr-5 lg:mr-14'>
                <Flash/>
            </div>
        </div>
        <div className='lg:grid lg:grid-cols-2'>
            {Articles.map((article)=>{
                return <Article key={article.url} article={article}/>
            })}
        </div>
    </>
  )
}
