import Navbar from "../components/Navbar"
import Namecard from "../components/Namecard"

function Fav() {
    return (
        <div className="init bg-dark-200">
            <div className="container p-6 bg-dark-200">
                <Navbar></Navbar>
                <p className="text-primary font-black text-4xl text-center">Displays favourited jobs</p>
                <Namecard></Namecard>
            </div>
        </div>
    )
}

export default Fav