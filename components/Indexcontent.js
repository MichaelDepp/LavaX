const { Component } = require("react");
import Layout from "../components/Layout"
import Jobcard from "../components/Jobcard"
import { data } from "autoprefixer";

class Indexcontent extends Component {

    constructor(props) {
        super(props)
        this.handleSearchOption = this.handleSearchOption.bind(this)
        this.findSearchedJob = this.findSearchedJob.bind(this)
        this.state = {
            job: "",
            exists: "",
            sortjob: this.props.data,
            error: undefined,
            found: undefined,
            loader: true
        }
    }

    handleSearchOption(job) {
        this.setState({ error: undefined })
        this.setState.job = job;
        this.findSearchedJob(job)
    }

    findSearchedJob(key) {
        console.log("from search jobs " + key)
        const sort = this.props.data.filter(job => job.title.toLowerCase().includes(key.toLowerCase()))
        this.setState({ sortjob: sort }, () => {
            console.log(this.state.sortjob, 'searched result');
        });
    }

    render() {
        return (
            <div className="bg-primary">
                <Layout handleSearchOption={this.handleSearchOption}>
                    {
                        this.state.sortjob ? <Jobcard data={this.state.sortjob}> </Jobcard> : <p>Loading</p>
                    }
                </Layout>
            </div>
        )
    }
}

export default Indexcontent