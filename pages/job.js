import Layout from "../components/Layout"
import Jobinfo from "../components/Jobinfo"
import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"

const JOB_INFO = gql`
query findJob($ep: JobInput!) {
    job(input: $ep) {
        title
        company{
          name
          logoUrl
        }
        cities{
          name
          country{
            isoCode
          }
        }
        commitment{
          title
        }
        description
        applyUrl
        postedAt
        tags{
          name
        }
    }
  }
`;

function Job() {
    const router = useRouter()
    const ep = { jobSlug: router.query.job, companySlug: router.query.com }
    const { loading, error, data } = useQuery(JOB_INFO, {
        variables: { ep },
    });
    if (loading) return <p>Loading</p>
    if (error) return <p>Error Loading</p>
    console.log(data)
    return (
        <Layout>
            <Jobinfo data={data}></Jobinfo>
        </Layout>
    )
}

export default Job