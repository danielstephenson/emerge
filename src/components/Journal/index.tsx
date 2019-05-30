import React, { useState, useEffect, useCallback } from "react";
import stories from "../../content/stories";
import styles from "./styles.module.css";

interface IStory {
	story: string;
	storyId: string;
	chapters: IChapter[];
}

interface IChapter {
	chapter: string;
	chapterId: string;
	entries: { [key: string]: IEntry[] };
}

export interface IEntry {
	key: string;
	kind: string;
	time: number;
	display: string;
	action?: string;
}

interface IJournalProps {
	entries: IEntry[];
	addEntries: (entries: IEntry[]) => void;
}

let _stories: IStory[];
const Journal: React.FC<IJournalProps> = ({ entries, addEntries }) => {
	const [initialized, setInitialized] = useState(false);

	const addEntry = useCallback(
		(entry: IEntry) => {
			addEntries([entry]);
		},
		[addEntries],
	);

	useEffect(() => {
		if (!initialized) {
			_stories = stories;
			beginGame(_stories, addEntry);
			setInitialized(true);
		}
	}, [initialized, entries, addEntry]);
	console.log("journal render");
	return (
		<div className={styles.entries}>
			{entries.map(entry => (
				<span key={entry.key}>{entry.display}</span>
			))}
		</div>
	);
};

const beginGame = (stories: IStory[], addEntry: (entry: IEntry) => void) => {
	const firstStory = stories[0];
	if (firstStory) {
		startStory(firstStory, addEntry);
	} else {
		console.warn("No initial story in data");
	}
};

const startStory = (story: IStory, addEntry: (entry: IEntry) => void) => {
	const firstChapter = story.chapters[0];
	if (firstChapter) {
		firstChapter.entries.intro.forEach((entry: IEntry) => {
			setTimeout(() => postEntry(entry, firstChapter.entries, addEntry), entry.time);
		});
	} else {
		console.warn(`No chapters in story: ${story.storyId}`);
	}
};

const postEntry = (entry: IEntry, entries: { [key: string]: IEntry[] }, addEntry: (entry: IEntry) => void) => {
	addEntry(entry);
	const nextEntries = entries[entry.key];
	if (nextEntries && nextEntries.length) {
		nextEntries.forEach((nextEntry: IEntry) => {
			setTimeout(() => postEntry(nextEntry, entries, addEntry), nextEntry.time);
		});
	}
};

export default Journal;
