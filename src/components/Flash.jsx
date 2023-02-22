import React,{useState,useEffect} from 'react';
import DataFlash from './Data/DataFlash';
export const Flash = () => {
    const [text, setText] = useState(false);
    useEffect(() => {
        setInterval(() => {
            setText(true);
        }, 1500);
        setInterval(() => {
            setText(false);
        }, 833);
    }, [])
  return (
    <>
    <div className='grid grid-cols-4 gap-0'>
        {DataFlash.map((Flash)=>{
            return(
                <>
                <div key={Flash.id} className='text-sm md:text-3xl font-medium font-[Phudu]'>
                    <h1 className='my-2'>{Flash.name}<span className={`md:m-4 m-2 ${text?"hidden":"inline"}`}>{Flash.name2}</span><span className='mr-2'>{Flash.name3}</span></h1>
                    <h1 className='my-2'>{Flash.name}<span className={`md:m-4 m-2`}>{Flash.name2}</span><span className={`mr-2 ${text?"hidden":"inline"}`}>{Flash.name3}</span></h1>
                    <h1 className='my-2'>{Flash.name}<span className={`md:m-4 m-2 ${text?"hidden":"inline"}`}>{Flash.name2}</span><span className='mr-2'>{Flash.name3}</span></h1>
                    <h1 className='my-2'>{Flash.name}<span className={`md:m-4 m-2`}>{Flash.name2}</span><span className={`mr-2 ${text?"hidden":"inline"}`}>{Flash.name3}</span></h1>
                    <h1 className='my-2'>{Flash.name}<span className={`md:m-4 m-2 ${text?"hidden":"inline"}`}>{Flash.name2}</span><span className='mr-2'>{Flash.name3}</span></h1>
                    <h1 className='my-2'>{Flash.name}<span className={`md:m-4 m-2`}>{Flash.name2}</span><span className={`mr-2 ${text?"hidden":"inline"}`}>{Flash.name3}</span></h1>
                </div>
                </>
            )
        })}
    </div>
    </>
  )
}
