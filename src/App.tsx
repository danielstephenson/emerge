import React, { useReducer, useCallback } from "react";
import Journal, { IEntry } from "./components/Journal";
import styles from "./App.module.css";

const App: React.FC = () => {
	const [model, dispatchModel] = useReducer(modelReducer, initialModel);

	const addEntries = (journalEntries: IEntry[]) => {
		dispatchModel({ action: "addEntries", data: { journalEntries } });
	};
	console.log("render");
	return (
		<div className={styles.app}>
			<Journal entries={model.journalEntries} addEntries={addEntries} />
		</div>
	);
};

const modelReducer = (state: IAppModel, { action, data }: { action: string; data: Partial<IAppModel> }) => {
	switch (action) {
		case "addEntries":
			return { ...state, journalEntries: [...state.journalEntries, ...data.journalEntries] } as IAppModel;
		default:
			throw new Error("no action found");
	}
};

type IAppModel = {
	journalEntries: IEntry[];
	milestones: { [x: string]: boolean };
};

const initialModel: IAppModel = {
	journalEntries: [],
	milestones: {},
};

export default App;
