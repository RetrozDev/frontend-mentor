export interface Project {
	title: string;
	description: string;
	url: string;
	image: string;
}

export interface ProjectsData {
	newbie ?: Project[];
	junior ?: Project[];
	intermediate ?: Project[];
	advanced ?: Project[];
	guru ?: Project[];
}
