import { useState } from "react";
import styles from "./Home.module.css";
import projectsData from "./projects.json";
import type { ProjectsData } from "./types/Home";
import { Link } from "react-router-dom";

const Home = () => {
	const [activeDifficulty, setActiveDifficulty] =
		useState<keyof ProjectsData>("newbie");
	const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
	const [fade, setFade] = useState<boolean>(false);

	const handleDifficultyClick = (difficulty: keyof ProjectsData) => {
		setActiveDifficulty(difficulty);
		setCurrentProjectIndex(0);
		setFade(true);
		setTimeout(() => setFade(false), 300);
	};

	const changeProject = (direction: "next" | "prev") => {
		setFade(true); 
		setTimeout(() => {
			setCurrentProjectIndex((prevIndex) => {
				const length = projectsData[activeDifficulty].length;
				return direction === "next"
					? (prevIndex + 1) % length
					: (prevIndex - 1 + length) % length;
			});
			setFade(false); 
		}, 300);
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
				className={`${styles.projectDisplay} ${fade ? styles.fadeOut : styles.fadeIn}`}
				style={{ backgroundImage: `url(${currentProject.image})` }}
			>
				<div className={styles.projectInfo}>
					<h1>{currentProject.title}</h1>
					<p>{currentProject.description}</p>
					<Link to={`/projects/${currentProject.url}`}>See project</Link>
				</div>

				<div className={styles.carouselControls}>
					<button type="button" onClick={() => changeProject("prev")}>
						&lt;
					</button>
					<button type="button" onClick={() => changeProject("next")}>
						&gt;
					</button>
				</div>
			</main>
		</div>
	);
};

export default Home;
