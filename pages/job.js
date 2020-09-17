import Layout from "../components/Layout"
import Jobinfo from "../components/Jobinfo"
import Navbar from "../components/Navbar"
import Namecard from "../components/Namecard"
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
    <div className="init bg-dark-200">
      <div className="container p-6 bg-dark-200">
        <Navbar></Navbar>
        <div className="mt-32">
          <Jobinfo data={data}></Jobinfo>
          <Namecard></Namecard>
        </div>
      </div>
    </div>
  )
}

export default Job