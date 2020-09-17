function Empty () {
    return (
        <div className=" block text-center flex-shrink-0 text-txtlight py-6 mt-6">
            <div className="flex justify-center pb-10">
                <img src="./result.svg" className="w-1/4"/>
            </div>
            <p className="text-xl">0 results found</p>
            <p className="text-2xl font-bold">Whooppsss!!</p>
            <p className="text-3xl font-bold">We couldn't find the job you searched</p>
            <p className="text-3xl font-bold">Try Searching the job with different Keywords.</p>
        </div>
    )
}

export default Empty