import Inputbox from "./Inputbox";

export default function Content(){
    return(
        <>
            <div className="content text-white w-[80vw] m-auto h-[80vh] flex flex-col justify-end items-center gap-8 text-center max-[512px]:justify-center max-[512px]:w-[95vw]">
                <p className="title-main text-5xl font-bold max-[512px]:text-[3rem] max-[512px]:font-extrabold">
                Unlimited movies, TV shows and more</p>
                <p className="title-sub text-2xl font-medium">Watch anywhere. Cancel anytime.</p>
                <p className="title-sub text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
                <Inputbox/>
            </div>
        </>
    )
}