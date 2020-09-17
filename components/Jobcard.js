import Link from 'next/link';
import Flag from 'react-flagkit';

function Jobcard(props) {
    console.log("printing from job")
    console.log(props.data)
    return (
        <>
            {props.data.map((job, id) => (
                <Link href="/job">
                    <div key={id} className="flex items-center justify-between flex-wrap text-gray-700 bg-gray-100 px-4 py-2 mt-2 cursor-pointer">
                        <div className="flex">
                            <div className="box-content h-10 w-10 rounded-lg p-4 border-1 border-gray-400 bg-gray-200">
                                <img src={job.company.logoUrl} />
                            </div>
                            <div className="ml-6">
                                <div className="text-2xl font-bold text-txtdark">
                                    <p>{job.title}</p>
                                </div>
                                <div>
                                    <p>{job.company.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-center space-x-2">
                            {job.tags.slice(0, 4).map((tag, id) => (
                                <div key={id} className="border h-auto border-blue-400 text-blue-700 p-1 rounded relative">
                                    <span className="flex-wrap sm:inline">{tag.name}</span>
                                </div>
                            ))}
                        </div>
                        {
                            job.cities.slice(0, 1).map((city, id) => (
                                <div key={id} className="flex">
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