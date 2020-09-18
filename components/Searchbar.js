import { Component } from "react"

class Searchbar extends Component {
    constructor(props) {
        super(props)
        this.handleSearchOption = this.handleSearchOption.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSearchOption(e) {
        e.preventDefault();
        const search = e.target.elements.search.value.trim();
        if (search) {
            this.props.handleSearchOption(search)
        }
    }

    handleChange(e) {
        e.preventDefault();
        const search = (e.target.value);
        if (search) {
            this.props.handleSearchOption(search)
        }
    }

    render() {
        return (
            <div className="block justify-center">
                <div className="text-primary mt-12">
                    <h2 className="font-black text-5xl text-center text-primary leading-tight">Find your dream jobs<br></br>with us easily</h2>
                </div>
                <div className="flex justify-center mt-6 mb-10">
                    <form onSubmit={this.handleSearchOption}>
                        <div className="border rounded border-transparent overflow-hidden flex bg-button">
                            <input type="text" className="w-auto px-4 py-2 bg-button text-txtlight outline-none" placeholder="Search..." name="search" onChange={this.handleChange}></input>
                            <button className="flex items-center justify-center px-4 border-0 outline-none">
                                <svg className="h-4 w-4 text-grey-dark" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Searchbar