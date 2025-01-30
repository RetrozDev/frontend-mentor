import { Outlet, Link, useParams } from "react-router-dom";
import styles from "./ProjectPage.module.css";
import Logo from "./Logo";

const ProjectPage = () => {
    const { project } = useParams<{ project?: string }>();
    const projectName: string = project || "";
    
	return (
		<div className={styles.ProjectPage}>
			<nav>
				<Logo />
				<ul>
					<li>
						<Link to={"/"}>Go Back</Link>
					</li>
					<li>
						<Link to={`https://www.frontendmentor.io/challenges/${projectName}`}>See challenge</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export default ProjectPage;
