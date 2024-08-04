export default function Section2() {
    return (
        <div className="w-full bg-black h-[90vh] border-t-8 border-[#2c2c2c] flex justify-center">
            <div className="bg-black relative text-white flex flex-row-reverse w-[80vw] m-auto items-center justify-between max-[512px]:flex-col max-[512px]:w-[90vw] ">
                <div className="texts w-[50%] flex flex-col gap-8 max-[512px]:w-[90%]">
                    <div className="heading text-5xl font-extrabold">Download your shows to watch offline</div>
                    <div className="sub-heading text-2xl font-normal ">Save your favourites easily and always have something to watch..</div>
                </div>
                <div className="sec2-img relative">
                    <img src="/images/mobile.jpg" alt=""/>
                    <div className="sec2box rounded-lg bg-black">
                        <img src="/images/postermobile.png" alt="" />
                        <div className="txts flex flex-col items-center justify-center h-full">
                            <p className="font-semibold">Stranger Things</p>    
                            <p className="text-blue-700">Downloading...</p>    
                        </div>
                        <img src="/images/download-icon.gif" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}