import Indexcontent from "../components/Indexcontent"
import { useQuery, gql } from "@apollo/client"
import Spinner from "../components/Spinner"
import { Job, FavJob } from "../models/Job"
import { data } from "autoprefixer"



const RECENT_JOB = gql`
{
    jobs{
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
        cities {
            name
            country{
              name
              isoCode
            }
        }
        postedAt
    }
}
`;

function Index(props) {
    const { loading, error, data } = useQuery(RECENT_JOB)
    console.log(props.list.printlogo())
    if (loading) return <Spinner></Spinner>
    if (error) return <p>Error Loading</p>
    return (
        <Indexcontent data={data.jobs}></Indexcontent>
    )
}

export default Index