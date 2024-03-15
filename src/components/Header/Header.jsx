import { FaRegUserCircle } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
    return (
        <div className="container mx-auto py-10 ">
            <nav className="flex justify-between items-center">
                <h1 className="md:text-3xl text-2xl font-medium md:font-bold text-[#150B2B]">Recipe Calories</h1>
                <div className="text-[#150b2bb3] hidden md:flex gap-12 ">
                    <a className="hover:text-orange-400" href="">Home</a>
                    <a className="hover:text-orange-400" href="">Recipes</a>
                    <a className="hover:text-orange-400" href="">About</a>
                    <a className="hover:text-orange-400" href="">Search</a>
                </div>
                <div className="md:flex hidden gap-3 items-center">
                    <label className="input input-bordered flex items-center gap-2 bg-[#150b2b0d] rounded-3xl">
                        <input type="text" className="grow " placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <p className="text-3xl bg-[#0BE58A] p-2 rounded-full"><FaRegUserCircle /></p>
                </div>
                <div className="text-3xl md:hidden">
                    <VscThreeBars />
                </div>
            </nav>
        </div>
    );
};

export default Header;