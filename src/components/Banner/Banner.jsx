import banner from "../../assets/images/user.png"
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-4">
                    <img
                        src={banner}
                        className="max-w-sm rounded-lg w-full" />
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold">One Step Closer To Your <span className="text-blue-500">Dream Job</span></h1>
                        <p className="py-6">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg text-white font-bold p-3">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;