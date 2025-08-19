export interface WorkExperience {
  year: number;
  title: string;
  company: string;
  duration: string;
  stack: string;
  details: {
    overview: string;
    accomplishments: string[];
    responsibilities: string[];
  };
}

export interface WorkItemProps {
  data: WorkExperience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}
