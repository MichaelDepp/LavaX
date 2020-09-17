import Namecard from "../components/Namecard"
import Navbar from "../components/Navbar"
import Searchbar from "../components/Searchbar"

function Layout(props) {

    let bg;
    if (props.mode === "dark") {
        bg = "bg-dark"
    } else {
        bg = "bg-primary"
    }

    return (
        <div className="init bg-dark-200">
            <div className="container p-6 bg-dark-200">
                <Navbar></Navbar>
                <Searchbar handleSearchOption={props.handleSearchOption}></Searchbar>
                {props.children}
                <Namecard></Namecard>
            </div>
        </div>
    )
}

export default Layout