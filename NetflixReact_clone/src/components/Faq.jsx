import { useState } from 'react';
import '../App.css';


export default function Faq({faq}) {
    const [IsVisible,setVisible] = useState(false);
    const handleclick = ()=>{
        setVisible(prevIsvisble => !prevIsvisble);
    }
    return (
        <>
            <div className="box w-[70vw] m-1 flex flex-col gap-0.5 max-[512px]:w-[90vw]">
                <div className="faq_head text-white flex justify-between items-center"  onClick={handleclick}>
                    <h3 className="text-2xl">
                        {faq.que}
                    </h3>
                    <button className="text-6xl font-extralight">+</button>
                </div>
                {IsVisible &&(
                    <div className="faq_body text-white text-xl">
                    {faq.ans}
                </div>
                )}
            </div>
        </>
    )
}