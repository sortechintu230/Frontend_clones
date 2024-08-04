export default function Section1() {
    return (
        <div className="w-full bg-black h-[90vh] border-t-8 border-[#2c2c2c] flex justify-center">
            <div className="bg-black relative text-white flex flex-row-reverse w-[80vw] m-auto items-center justify-between max-[512px]:flex-col max-[512px]:w-[90vw]">
                <div className="texts w-[50%] flex flex-col gap-8 max-[512px]:w-[90%]">
                    <div className="heading text-5xl font-extrabold">Create profiles for kids</div>
                    <div className="sub-heading text-2xl font-normal ">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</div>
                </div>
                <div className="img h-full">
                    <img src="/images/childs.png" alt="" />
                </div>
            </div>
        </div>
    )
}