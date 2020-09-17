function ApplyBtn(props) {
    return (
        <a href={props.link} target="_blank">
            <button className="bg-button hover:bg-blue-700 text-txtlight font-bold py-2 px-10 rounded">
                Apply
            </button>
        </a>
    )
}

export default ApplyBtn