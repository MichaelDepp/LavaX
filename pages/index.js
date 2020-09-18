import Indexcontent from "../components/Indexcontent"
import { useQuery, gql } from "@apollo/client"
import Spinner from "../components/Spinner"

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
        createdAt
        postedAt
    }
}
`;

function Index() {
    const { loading, error, data } = useQuery(RECENT_JOB)
    if (loading) return <Spinner></Spinner>
    if (error) return <p>Error Loading</p>
    return (
        <Indexcontent data={data.jobs}></Indexcontent>
    )
}

export default Index