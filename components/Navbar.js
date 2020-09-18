import { MdFavorite } from "react-icons/md";
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
                    <button className="text-primary">
                        <Link href="/fav">
                            <MdFavorite></MdFavorite>
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;