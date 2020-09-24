import Navbar from "../components/Navbar"
import Namecard from "../components/Namecard"
import Jobcard from "../components/Jobcard"
import {observer} from "mobx-react"

const Fav = (props) => {
    return (
        <div className="init bg-dark-200 min-h-screen">
            <div className="container p-6 bg-dark-200">
                <Navbar></Navbar>
                {/* <p className="text-primary font-black text-4xl text-center">Displays favourited jobs</p> */}
                <h2 className="font-black text-5xl text-center text-primary leading-tight py-12">Favourited jobs,<br></br>Don't miss the chance</h2>
                <Jobcard data={props.list.jobs}></Jobcard>
                <Namecard></Namecard>
            </div>
        </div>
    )
}

export default observer(Fav)