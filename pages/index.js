import Indexcontent from "../components/Indexcontent"
import { useQuery, gql } from "@apollo/client"

const RECENT_JOB = gql`
{
    jobs{
        title
        id
        company{
          name
          logoUrl
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
    if (loading) return <p>Loading</p>
    if (error) return <p>Error Loading</p>
    return (
        <Indexcontent data={data}></Indexcontent>
    )
}

export default Index