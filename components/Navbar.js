import { FiSun, FiMoon } from "react-icons/fi";
import Link from "next/link"

function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0 text-txtlight mr-6">
                <a href="/">
                    <span className="font-sans font-bold text-xl text-primary cursor-pointer">LavaX</span>
                </a>
            </div>
            <div className="lg:w-auto">
                <div>
                    <button>
                        <a href="/job">
                            <FiMoon></FiMoon>
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;