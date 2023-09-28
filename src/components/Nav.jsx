import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, {useState} from "react"


const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };
return(
    <div className="flex items-center justify-between sm:flex-col sm:justify-normal sm:bg-[#F9F9F9] sm:w-[240px] 
    ">
        <h1 className="text-[#6F47EB] text-lg font-medium sm:pb-[69px] sm:pt-[24px] ">RIL MERGER</h1>
        <ul className="hidden sm:grid sm:gap-[24px]">
            <li className="bg-[#EDEDED] pr-4 pl-1 py-1 rounded-lg">Article Merger</li>
            <li>Refer friends</li>
            <li>Pricing</li>
            <li>Settings</li>
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" onClick={toggleMenu} className="sm:hidden"><style>svg</style><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
        
        {isMenuOpen && (
        <div className="absolute right-0 top-0 bg-[#F9F9F9] p-8 h-screen">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className="absolute right-4 top-6" onClick={toggleMenu}><style>svg</style><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
            <ul className="  grid gap-8  pt-12">
            <li className="bg-[#EDEDED] pr-4 pl-1 py-1 rounded-lg">Article Merger</li>
            <li>Refer friends</li>
            <li>Pricing</li>
            <li>Settings</li>
            </ul>
        </div>
    )}
    </div>
)
}

export default Nav