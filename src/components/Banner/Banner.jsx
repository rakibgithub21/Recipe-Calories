import backgroundImage from '../../assets/background.png';

const Banner = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
    }
    return (
        <div className="hero min-h-[600px] container mx-auto  md:rounded-2xl" style={divStyle}>
            <div className="hero-content text-center text-neutral-content ">
                <div>
                    <h1 className="mb-7 lg:text-5xl md:text-3xl font-bold lg:w-[900px] text-lg  mx-auto">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-7 md:text-base lg:w-[970px] mx-auto">Led by our team of experienced and passionate chefs, each session is an opportunity to learn from the best. From mastering essential techniques to exploring innovative flavor combinations, our instructors provide expert insights and practical tips to elevate your culinary prowess.</p>
                    <div className="flex justify-center gap-10">
                        <button className="bg-[#0BE58A] md:text-xl px-6 py-4 text-black font-semibold rounded-full">Explore Now</button>
                        <button className="border border-white px-6 py-4 rounded-full font-semibold md:text-xl">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;