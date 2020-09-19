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

function isVowel(c) {
    let check = c.charAt(0)
    let res = ['a', 'e', 'i', 'o', 'u'].indexOf(check.toLowerCase()) !== -1
    if (res) {
        return "an"
    }
    else {
        return "a"
    }
}

function Jobinfo(props) {
    return (
        <div className="text-primary">
            <div className="flex items-center justify">
                <div className="box-content h-6 w-6 rounded-lg p-4 border-1 border-gray-400 bg-gray-200 bg-cover" style={{ backgroundImage: "url(" + `${props.data.job.company.logoUrl ? props.data.job.company.logoUrl : "https://logo.clearbit.com/" + props.data.job.company.websiteUrl + "?size=200/"}` + ")" }}>
                </div>
                <div className="ml-6 w-auto text-2xl font-semibold">
                    <p><strong>{props.data.job.company.name} </strong>is hiring {isVowel(props.data.job.title)}</p>
                </div>
            </div>
            <div className="text-5xl md:text-6xl mt-5 font-black w-1/2 sm:w-auto leading-tight sm:break-words">
                <p>{props.data.job.title}</p>
            </div>
            <div className="md:flex sm:block break-words">
                <div className="sm:w-full md:w-3/4">
                    <div className="md:mb-0 text-xl sm:mb-16">
                        <div className="settingcus text-justify mt-5" dangerouslySetInnerHTML={{ __html: convertHtml(props.data.job.description) }}>
                        </div>
                    </div>
                    <div className="hidden sm:pt-0 md:pt-10 lg:pt-10 xl:pt-10 md:flex lg:flex xl:flex">
                        <ApplyBtn link={props.data.job.applyUrl}></ApplyBtn>
                    </div>
                </div>
                <div className="md:ml-16 mt-6 space-y-6 text-xl sm:ml-0">
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
                    <div className="pt-2 text-center">
                        <ApplyBtn link={props.data.job.applyUrl}></ApplyBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobinfo