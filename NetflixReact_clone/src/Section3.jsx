export default function Section1() {
    return (
        <div className="w-full bg-black h-[90vh] border-t-8 border-[#2c2c2c] flex justify-center">
            <div className="bg-black relative text-white flex w-[80vw] m-auto items-center justify-between max-[512px]:flex-col max-[512px]:w-[90vw] ">
                <div className="texts w-[50%] flex flex-col gap-8 max-[512px]:w-[90%]">
                    <div className="heading text-5xl font-extrabold">Enjoy on your TV</div>
                    <div className="sub-heading text-2xl font-normal ">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
                </div>
                <div className="sec3 relative">
                    <img src="/images/mac.png" alt="" />
                    <video data-uia="nmhp-card-animation-asset-video" autoPlay playsInline muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"/></video>
                </div>
            </div>
        </div>
    )
}