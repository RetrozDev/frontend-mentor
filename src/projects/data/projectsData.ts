// Projects import
import Project1 from "../pages/Project1";

type ProjectData = {
  id: string;
  component: React.ComponentType;
};


export const projectsData: ProjectData[] = [
  { id: "project1", component: Project1 }
];
