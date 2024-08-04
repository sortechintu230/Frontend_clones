import rightarrow from "../assets/right_arrow.svg"
export default function Inputbox(){
    return(
        <div className="flex gap-8 items-center max-[512px]:flex-col">
           <input type="text" placeholder="Email Address" name="email" className="emailinp bg-black bg-opacity-50 border border-gray-500 rounded-md max-[512px]:w-[80vw]"/>
           <button className="getstartedbtn flex items-center font-medium text-2xl bg-red-600 rounded-md hover:bg-red-700 max-[512px]:justify-center max-[512px]:w-[60vw]">Get Started <img src={rightarrow} alt="" /></button>
        </div>
    )
}