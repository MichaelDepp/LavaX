import { MdFavorite } from "react-icons/md";
import Link from "next/link"

function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0 text-txtlight mr-6">
                <Link href="/">
                    <span className="font-sans font-bold text-xl text-primary cursor-pointer">LavaX</span>
                </Link>
            </div>
            <div className="lg:w-auto">
                <div>
                    <Link href="/fav">
                        <button className="text-primary">
                            <MdFavorite></MdFavorite>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;