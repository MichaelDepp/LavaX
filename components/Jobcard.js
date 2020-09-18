import Link from 'next/link';
import Flag from 'react-flagkit';
import Empty from "../components/Empty"

function Jobcard(props) {
    console.log("printing from job")
    console.log(props.data)

    if (props.data.length <= 0) {
        return (
            <Empty></Empty>
        )
    }

    return (
        <>
            {props.data.map((job, id) => (
                <Link key={id} href={{ pathname: '/job', query: { job: job.slug, com: job.company.slug } }}>
                    <div key={id} className="flex h-auto items-center justify-between flex-wrap text-primary bg-dark-100 px-4 py-2 mt-2 cursor-pointer">
                        <div className="flex">
                            <div className="box-content h-10 w-10 rounded-lg p-4 bg-gray-200 bg-cover mr-6" style={{ backgroundImage: "url(" + `${job.company.logoUrl ? job.company.logoUrl : "https://logo.clearbit.com/" + job.company.websiteUrl + "?size=200/"}` + ")" }}>
                                {/* <img src={job.company.logoUrl ? job.company.logoUrl : "https://logo.clearbit.com/" + job.company.websiteUrl + "?size=200/"} /> */}
                            </div>
                            <div className="w-48 md:w-auto">
                                <div className="text-lg md:text-2xl font-bold text-primary">
                                    <p>{job.title}</p>
                                </div>
                                <div>
                                    <p>{job.company.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-center space-x-2 hidden sm:hidden md:flex lg:flex xl:flex">
                            {job.tags.slice(0, 4).map((tag, id) => (
                                <div key={id} className="border h-auto border-blue-400 text-blue-700 p-1 rounded relative">
                                    <span className="flex-wrap sm:inline text-gray-500">{tag.name}</span>
                                </div>
                            ))}
                        </div>
                        {
                            job.cities.slice(0, 1).map((city, id) => (
                                <div key={id} className="hidden sm:hidden md:flex lg:flex xl:flex">
                                    <div>
                                        {console.log(city.country.isoCode)}
                                        <Flag country={(city.country.isoCode).toUpperCase()}></Flag>
                                    </div>
                                    <p className="ml-2">{city.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </Link>
            ))}
        </>
    )
}

export default Jobcard