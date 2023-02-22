import React from 'react'

export const Article = (props) => {
  return (
    <>
    <div className="mx-3 my-1 p-1 bg-white rounded">
        <div className='flex justify-between'>
            <div>
                <img className='min-w-32 h-20 rounded' src={props.article.urlToImage} alt=""/>
            </div>
            <div>
                <h1 className='font-medium mx-1'>{props.article.title.slice(0,60)}</h1>
            </div>
        </div>
        <h1 className='lg:min-h-[110px]'>{props.article.description}</h1>
        <button className='w-full my-1'><a className='bg-blue-700 px-14 text-white py-1 rounded m-auto' href={props.article.url}>Open News</a></button>
    </div>
    </>
  )
}
