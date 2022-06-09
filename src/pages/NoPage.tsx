import {Link} from "react-router-dom"

const NoPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold">Oops!</span>
                <span
                    className="text-xl mt-2 flex items-center gap-3">We couldn't find the page you were looking for.</span>
                <Link to="/"
                      className="bg-primary-100 text-neutral-100 transition-shadow duration-150 ease-out mt-5 hover:shadow-[0_0_10px_2px_rgb(61,81,250)] select-none flex items-center gap-3 px-5 py-2 ease-out rounded">
                    Go back to home
                </Link>
            </div>
        </div>
    );
};

export default NoPage;