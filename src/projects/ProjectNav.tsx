import { Link } from "react-router-dom";
import styles from "./ProjectNav.module.css";
import Logo from "./Logo";

interface ProjectNavProps {
	project?: string; // This is the project passed from the parent (Layout)
  }

const ProjectNav = ({ project }: ProjectNavProps) => {
	const projectName: string = project || "";

	return (
		<div className={styles.ProjectNav}>
			<nav>
				<Logo />
				<ul>
					<li>
						<Link to={"/"}>Go Back</Link>
					</li>
					<li>
						<a
							href={`https://www.frontendmentor.io/challenges/${projectName}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							See challenge
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default ProjectNav;
