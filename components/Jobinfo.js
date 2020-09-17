import Link from "next/link"
import ApplyBtn from "../components/ApplyBtn"

function Jobinfo() {
    return (
        <div>
            <div className="flex items-center justify">
                <div className="box-content h-6 w-6 rounded-lg p-4 border-1 border-gray-400 bg-gray-200">
                    <img src="./logo.png" />
                </div>
                <div className="ml-6 text-2xl font-semibold">
                    <p><strong>Theorem </strong>is hiring an</p>
                </div>
            </div>
            <div className="text-6xl font-black w-1/2 leading-tight">
                <p>Experienced Backend Engineer - Go</p>
            </div>
            <div className="flex my-16">
                <div className="w-3/4">
                    <div className="mb-10">
                        <h2>Overview </h2>
                        <p>At Segment, we believe companies should be able to send their customer data wherever they want, whenever they want, with no fuss. We make this easy with a single pipeline that collects, stores, filters, transforms, and sends data to hundreds of business tools with the flip of a switch. Historically, we’ve built integrations with more than 250 different customer data tools ourselves(think Mixpanel, Google Analytics, Stripe).This March, we opened up our Developer Center. For the first time, new companies could build integrations upon Segment data, using our self-service workflow. In that time, we’ve onboarded 60 separate companies, each of whom built endpoints to work with our spec. We're now looking for a Senior Fullstack Engineer to help us expand our platform…we want to offer every kind of developer (partners, customers, and indie devs) the means to use Segment data. </p>
                    </div>
                    <Link href="/">
                        <ApplyBtn></ApplyBtn>
                    </Link>
                </div>
                <div className="ml-16 space-y-6">
                    <div>
                        <span className="font-bold">Location</span>
                        <div>
                            <p>San Franciso</p>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold">Posted</span>
                        <div>
                            <p>a year ago</p>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold">Commitment</span>
                        <div>
                            <p>Full-time</p>
                        </div>
                    </div>
                    <Link href="/">
                        <ApplyBtn></ApplyBtn>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Jobinfo