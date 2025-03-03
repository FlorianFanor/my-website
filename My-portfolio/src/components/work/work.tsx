import WorkItem from "./work-item";

const Work = () => {
    const data = [
        {
            year: 2023,
            title: "Technical Lead / Lead Experience Engineer",
            description: "Publicis Sapient",
            duration: "Until now",
            stack: "React, NextJS, Apollo GraphQL, Docker, Github, Figma, Splunk, Redpanda, Accessibility"
        },
        {
            year: 2022,
            title: "Senior Frontend Developer",
            description: "Publicis Sapient",
            duration: "1 year 10 months",
            stack: "React, NextJS, Apollo GraphQL, Azure, Jira, Confluence, Figma, Coremedia, Jest, RTL, Nx Monorepo"
        },
        {
            year: 2019,
            title: "Senior Fullstack Developer",
            description: "VII Origin",
            duration: "2 years 4 months",
            stack: "React, React Native, Python, Django, Gitlab, SQL, REST"
        },
        {
            year: 2019,
            title: "Fullstack Developer",
            description: "ELCA - Elca Informatique SA",
            duration: "9 months",
            stack: "Angular 7, .NET Core, SQL, REST"
        },
        {
            year: 2017,
            title: "Fullstack Developer",
            description: "Proximity BBDO",
            duration: "1 year 2 months",
            stack: "HTML5, CSS3, JS, JQuery, AJAX, .NET framework, MVC, REST, SQL"
        }
    ]


    return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 py-8">Work</h2>
        {data.map((item, index) => (
            <WorkItem key={index+item.year} data={item} />
        ))}
    </div>
    );
}
export default Work;