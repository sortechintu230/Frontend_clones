import logo from "../assets/logo.svg";
import lang from "../assets/lang.svg";
import '../App.css'

export default function Nav(){
    return(
        <>
            <nav className="flex flex-row justify-between items-center w-[80vw] m-auto max-[512px]:flex-col max-[512px]:gap-4">
                <div className="logo"><img src={logo} alt="logo" className="w-[150px] h-[50px]"/></div>
                <div className="btns flex items-center gap-8">
                    <div className="lang-btn flex items-center bg-black bg-opacity-30 rounded-md border border-gray-400">
                        <img src={lang} alt="" className="w-[20px] h-[20px]"/>
                        <select name="language" id="" className="">
                            <option value="English" style={{color:"black"}}>English</option>
                            <option value="Hindi" style={{color:"black"}}>Hindi</option>
                        </select>
                    </div>
                    <div className="sign-in-btn bg-red-600 rounded-md text-white font-medium cursor-pointer hover:bg-red-700">
                        Sign in
                    </div>
                </div>
            </nav>
        </>
    )
}