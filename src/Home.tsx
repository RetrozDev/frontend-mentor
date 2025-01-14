import { useState } from "react";
import styles from "./Home.module.css";
import projectsData from "./projects.json";

interface Project {
	title: string;
	description: string;
	image: string;
}

interface ProjectsData {
	newbie: Project[];
	junior: Project[];
	intermediate: Project[];
	advanced: Project[];
	guru: Project[];
}

const Home = () => {
	const [activeDifficulty, setActiveDifficulty] =
		useState<keyof ProjectsData>("newbie");
	const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

	const handleDifficultyClick = (difficulty: keyof ProjectsData) => {
		setActiveDifficulty(difficulty);
		setCurrentProjectIndex(0);
	};

	const nextProject = () => {
		const nextIndex =
			(currentProjectIndex + 1) % projectsData[activeDifficulty].length;
		setCurrentProjectIndex(nextIndex);
	};

	const prevProject = () => {
		const prevIndex =
			(currentProjectIndex - 1 + projectsData[activeDifficulty].length) %
			projectsData[activeDifficulty].length;
		setCurrentProjectIndex(prevIndex);
	};

	const currentProject = projectsData[activeDifficulty][currentProjectIndex];

	return (
		<div className={styles.Home}>
			<nav className={styles.navbar}>
				{["newbie", "junior", "intermediate", "advanced", "guru"].map(
					(difficulty) => (
						<button
							key={difficulty}
							type="button"
							onClick={() =>
								handleDifficultyClick(difficulty as keyof ProjectsData)
							}
						>
							{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
						</button>
					),
				)}
			</nav>

			<main
				className={styles.projectDisplay}
				style={{ backgroundImage: `url(${currentProject.image})` }}
			>
				<div className={styles.projectInfo}>
					<h1>{currentProject.title}</h1>
					<p>{currentProject.description}</p>
				</div>

				<div className={styles.carouselControls}>
					<button type="button" onClick={prevProject}>
						&lt;
					</button>
					<button type="button" onClick={nextProject}>
						&gt;
					</button>
				</div>
			</main>
		</div>
	);
};

export default Home;
