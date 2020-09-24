import Flag from 'react-flagkit';
import ApplyBtn from "./ApplyBtn"
import { Job, FavJob } from "../models/Job"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import showdown from "showdown"
import { useState } from 'react';
import { data } from 'autoprefixer';

function Jobinfo(props) {

    const [star, setStar] = useState(() => {
        if (props.data) {
            const checkList = (list) => {
                if (list.slug === props.data.job.slug) {
                    if (list.company.slug == props.data.job.company.slug) {
                        return list
                    }
                }
            }
            const idx = props.list.jobs.findIndex(checkList)

            if (idx >= 0) {
                return true
            } else {
                false
            }
        }
    })

    function favbutton() {
        console.log("Fav button clicked")
        if (!star) {

            props.list.add(Job.create({
                title: props.data.job.title,
                id: props.data.job.id,
                slug: props.data.job.slug,
                tags: [
                    {
                        name: props.data.job.tags[0] ? props.data.job.tags[0].name : ""
                    },
                    {
                        name: props.data.job.tags[1] ? props.data.job.tags[1].name : ""
                    },
                    {
                        name: props.data.job.tags[2] ? props.data.job.tags[2].name : ""
                    },
                    {
                        name: props.data.job.tags[3] ? props.data.job.tags[3].name : ""
                    },
                ],
                company: {
                    name: props.data.job.company.name,
                    slug: props.data.job.company.slug,
                    logoUrl: props.data.job.company.logoUrl ? props.data.job.company.logoUrl : "",
                    websiteUrl: props.data.job.company.websiteUrl,
                },
                cities: [
                    {
                        name: props.data.job.cities[0] ? props.data.job.cities[0].name : "",
                        country:
                        {
                            isoCode: props.data.job.cities[0] ? props.data.job.cities[0].country.isoCode : "",
                            name: props.data.job.cities[0] ? props.data.job.cities[0].country.name : ""
                        }
                    }
                ],
                commitment: {
                    title: props.data.job.commitment.title
                },
                description: props.data.job.description,
                applyUrl: props.data.job.applyUrl,
                postedAt: props.data.job.postedAt
            }))

            setStar(true)

        } else {
            console.log("Cant add item")
        }
    }

    function unfavbutton() {
        console.log("removing from list")
        const removeItem = getIndex();
        console.log("clickign un fav")
        props.list.remove(removeItem)
        setStar(false)
    }

    function getIndex() {
        const checkList = (list) => {
            if (list.slug === props.data.job.slug) {
                if (list.company.slug == props.data.job.company.slug) {
                    return list
                }
            }
        }
        const rmv =  props.list.jobs.findIndex(checkList)
        console.log(rmv)
        return rmv
    }

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

    function checkFav() {

    }

    return (
        <div className="text-primary">
            <div className="flex items-center justify">
                <div className="box-content h-6 w-6 rounded-lg p-4 border-1 border-gray-400 bg-gray-200 bg-cover" style={{ backgroundImage: "url(" + `${props.data.job.company.logoUrl ? props.data.job.company.logoUrl : "https://logo.clearbit.com/" + props.data.job.company.websiteUrl + "?size=200/"}` + ")" }}>
                </div>
                <div className="ml-6 w-auto text-2xl font-semibold">
                    <p><strong>{props.data.job.company.name} </strong>is hiring {isVowel(props.data.job.title)}</p>
                </div>
            </div>
            <div className="text-5xl md:text-6xl mt-5 font-black w-auto md:w-1/2 leading-tight break-words">
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
                                <div className="flex" key={id}>
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
                    <div className="pb-4">
                        {star ? <span className="font-bold">Saved</span> : <span className="font-bold">Unsave</span>}
                        <span className="font-bold"></span>
                        <div>
                            <button className="text-yellow-400 outline-none" onClick={star ? unfavbutton : favbutton}>
                                {
                                    star ? <AiFillStar></AiFillStar> : <AiOutlineStar></AiOutlineStar>
                                }
                            </button>
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