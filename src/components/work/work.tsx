import WorkItem from "./work-item";
import { useWorkExperience } from "../../hooks/useWorkExperience";
import { WorkExperience } from "../../types/work";
import workExperienceData from "../../data/work-experience.json";

const Work = () => {
    const data: WorkExperience[] = workExperienceData;
    const { expandedItem, itemRefs, handleToggle, timelineHeight } = useWorkExperience(data);


    return (
        <section id="work" className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">Experience</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        My professional journey through different roles and technologies,
                        building innovative solutions and leading development teams.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line - hidden on mobile, visible on desktop */}
                    <div className="absolute hidden md:block left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-600 rounded-full opacity-30"
                        style={{ height: timelineHeight }}></div>

                    <div className="space-y-12">
                        {data.map((item, index) => (
                            <div
                                key={index + item.year}
                                ref={(el) => (itemRefs.current[index] = el)}
                                className="animate-fade-in-up scroll-mt-20"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <WorkItem
                                    data={item}
                                    index={index}
                                    isExpanded={expandedItem === index}
                                    onToggle={() => handleToggle(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Work;