const JobCategory = ({ category }) => {
    const { logo, category_name, availability } = category
    return (
        <div className="card bg-base-200 shadow-xl">
            <figure className="p-8">
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default JobCategory;