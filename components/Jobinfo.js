import Flag from 'react-flagkit';
import ApplyBtn from "../components/ApplyBtn"
import showdown from "showdown"

function getdur(dur) {
    var d = new Date();
    let duryear = parseInt(dur.substring(0, 4))
    let nowyear = parseInt(d.getFullYear())

    let yeardiff = nowyear - duryear

    if (yeardiff == 0) {
        return "Recently Posted"
    }
    else {
        return yeardiff + " Year Ago"
    }

}

function convertHtml(text) {
    const converter = new showdown.Converter()
    let html = converter.makeHtml(text);

    return html
}

function Jobinfo(props) {
    return (
        <div>
            <div className="flex items-center justify">
                <div className="box-content h-6 w-6 rounded-lg p-4 border-1 border-gray-400 bg-gray-200">
                    <img src={props.data.job.company.logoUrl} />
                </div>
                <div className="ml-6 text-2xl font-semibold">
                    <p><strong>{props.data.job.company.name} </strong>is hiring an</p>
                </div>
            </div>
            <div className="text-6xl font-black w-1/2 leading-tight">
                <p>{props.data.job.title}</p>
            </div>
            <div className="flex my-16">
                <div className="w-3/4">
                    <div className="mb-10 text-xl">
                        <div className="settingcus" dangerouslySetInnerHTML={{__html: convertHtml(props.data.job.description)}}>
                        </div>
                    </div>
                    <ApplyBtn link={props.data.job.applyUrl}></ApplyBtn>
                </div>
                <div className="ml-16 space-y-6 text-xl">
                    <div>
                        <span className="font-bold">Location</span>
                        {
                            props.data.job.cities.slice(0, 1).map((city, id) => (
                                <div className="flex">
                                    <Flag country={(city.country.isoCode).toUpperCase()}></Flag>
                                    <p className="ml-2">{city.name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <span className="font-bold">Posted</span>
                        <div>
                            <p>{getdur(props.data.job.postedAt)}</p>
                        </div>
                    </div>
                    <div className="pb-4">
                        <span className="font-bold">Commitment</span>
                        <div>
                            <p>{props.data.job.commitment.title}</p>
                        </div>
                    </div>
                    <ApplyBtn link={props.data.job.applyUrl}></ApplyBtn>
                </div>
            </div>
        </div>
    )
}

export default Jobinfo