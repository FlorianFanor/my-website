import { useState, useRef } from "react";
import { WorkExperience } from "../types/work";

export const useWorkExperience = (data: WorkExperience[]) => {
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleToggle = (index: number) => {
        const newExpandedItem = expandedItem === index ? null : index;
        setExpandedItem(newExpandedItem);

        // If expanding, scroll to the item after a short delay to allow the DOM to update
        if (newExpandedItem !== null) {
            setTimeout(() => {
                itemRefs.current[index]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest'
                });
            }, 100);
        }
    };

    const timelineHeight = `${data.length * 380}px`;

    return {
        expandedItem,
        itemRefs,
        handleToggle,
        timelineHeight
    };
};
