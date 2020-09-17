import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Namecard() {
    return (
        <div className="flex justify-center mt-16 flex space-x-4">
            <p fontSize="md">Developed by Michael Depp</p>
            <Link href="https://github.com/MichaelDepp" passHref={true}>
                <button className="cursor-pointer">
                    <FaGithub></FaGithub>
                </button>
            </Link>
            <Link href="https://www.linkedin.com/in/michael-singaram-murugan/" passHref={true} isExternal>
                <button className="cursor-pointer">
                    <FaLinkedin></FaLinkedin>
                </button>
            </Link>
        </div>
    )
}

export default Namecard