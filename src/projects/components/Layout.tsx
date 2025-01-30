import { useParams } from "react-router-dom";
import ProjectNav from "../ProjectNav";

import Project1 from "../pages/Project1";

const projectsData = [
  { id: "project1", component: Project1 },
];

const Layout = () => {
  const { project } = useParams<{ project?: string }>(); 

  const selectedProject = projectsData.find((p) => p.id === project);

  if (!selectedProject) {
    return <div>Projet introuvable</div>;
  }

  const ProjectComponent = selectedProject.component;

  return (
    <>
      <ProjectNav project={project} />
      <main>
        <ProjectComponent />
      </main>
    </>
  );
};

export default Layout;
