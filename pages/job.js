import Layout from "../components/Layout"
import Jobinfo from "../components/Jobinfo"
import { useRouter} from "next/router"

function Job() {
    const router = useRouter()
    return (
        <Layout>
            <Jobinfo></Jobinfo>
        </Layout>
    )
}

export default Job