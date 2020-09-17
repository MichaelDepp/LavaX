import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Namecard() {
    return (
        <div className="flex justify-center mt-16 flex space-x-4 text-primary">
            <p fontSize="md">Developed by Michael Depp</p>
            <a href="https://github.com/MichaelDepp" target="_blank">
                <button className="cursor-pointer">
                    <FaGithub></FaGithub>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/michael-singaram-murugan/" target="_blank">
                <button className="cursor-pointer">
                    <FaLinkedin></FaLinkedin>
                </button>
            </a>
        </div>
    )
}

export default Namecard