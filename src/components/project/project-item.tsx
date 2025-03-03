
const ProjectItem = ({ image, title, link}) => {
    return (
        <a href={link} target="_blank" className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group focus:bg-gradient-to-r hover:bg-gradient-to-r from-[#001b5e] to-gray-500">
            <img src={image} alt="" className="rounded-xl group-hover:opacity-10 group-focus:opacity-10" />
            <div className="hidden group-hover:block group-focus:block absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <h3 className="text-2xl font-bold text-white tracking-wider text-center m-4">{title}</h3>
                <p className="text-center p-3 rounded-lg bg-white text-gray-700 font bold cursor-pointer text-lg">Open</p>
            </div>     
        </a>
    ); 
}
export default ProjectItem;