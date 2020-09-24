import Jobinfo from "../components/Jobinfo"
import Navbar from "../components/Navbar"
import Namecard from "../components/Namecard"
import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"
import Spinner from "../components/Spinner"

const JOB_INFO = gql`
query findJob($ep: JobInput!) {
    job(input: $ep) {
        title
        id
        slug
        company{
          name
          slug
          logoUrl
          websiteUrl
        }
        tags{
          name
        }
        cities{
          name
          country{
            isoCode
            name
          }
        }
        commitment{
          title
        }
        description
        applyUrl
        postedAt
    }
  }
`;

function Job(props) {
  const router = useRouter()
  const ep = { jobSlug: router.query.job, companySlug: router.query.com }
  const { loading, error, data } = useQuery(JOB_INFO, {
    variables: { ep },
  });
  if (loading) return <Spinner></Spinner>
  if (error) return <p>Error Loading</p>
  return (
    <div className="bg-dark-200 min-h-screen">
      <div className="container p-6 bg-dark-200">
        <Navbar></Navbar>
        <div className="mt-16 sm:mt-20 md:mt-32">
          <Jobinfo data={data} list={props.list}></Jobinfo>
          <Namecard></Namecard>
        </div>
      </div>
    </div>
  )
}

export default Job