export const loadState = () => {
	try {
		const savedState = localStorage.getItem("theme");
		if (savedState === null) {
			return "light";
		}
		return JSON.parse(savedState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const stateToBeSaved = JSON.stringify(state);
		localStorage.setItem("theme", stateToBeSaved);
	} catch (error) {
		return undefined;
	}
};
