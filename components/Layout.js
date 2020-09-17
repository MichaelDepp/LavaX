import Namecard from "../components/Namecard"
import Navbar from "../components/Navbar"
import Searchbar from "../components/Searchbar"

function Layout(props) {
    return (
        <div className="container p-6">
            <Navbar></Navbar>
            <Searchbar handleSearchOption={props.handleSearchOption}></Searchbar>
            {props.children}
            <Namecard></Namecard>
        </div>
    )
}

export default Layout