function List ({text}) {
    return (
        <>
            <div className="flex gap-10 text-white items-center font-semibold text-2xl">
                <p className="">{text}</p>
                <button className="bg-red-500 px-4 py-2 rounded-lg">Delete</button>
            </div>
            
        </>
    )
}

export default List