const { Component } = require("react");
import Layout from "../components/Layout"
import Jobcard from "../components/Jobcard"

class Indexcontent extends Component {

    constructor(props) {
        super(props)
        this.handleSearchOption = this.handleSearchOption.bind(this)
        this.findSearchedJob = this.findSearchedJob.bind(this)
        this.state = {
            job: "",
            exists: "",
            sortjob: [],
            error: undefined,
            found: undefined,
            loader: true
        }
    }

    componentWillReceiveProps() {
        this.setState({sortjob: this.props.data});
    }

    handleSearchOption(job) {
        this.setState({ error: undefined })
        this.setState.job = job;
        this.findSearchedJob(job)
    }

    findSearchedJob(key) {
        console.log("from search jobs " + key)
        const sort = this.props.data.jobs.filter(job => job.title.toLowerCase().includes(key))
        console.log(typeof(sortjob))
    }

    render() {
        return (
            <div className="bg-primary">
                <Layout handleSearchOption={this.handleSearchOption}>
                    <Jobcard data={this.props.data}></Jobcard>
                </Layout>
            </div>
        )
    }
}

export default Indexcontent