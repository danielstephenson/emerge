export default [
	{
		story: "Book 1",
		storyId: "bk1",
		chapters: [
			{
				chapter: "Chapter 1",
				chapterId: "bk1.ch1",
				entries: {
					intro: [
						{
							key: "ch1.1",
							kind: "speech",
							time: 5000,
							display: "Hello there",
						},
					],
					"ch1.1": [
						{
							key: "ch1.2",
							kind: "info",
							time: 2000,
							display: "Welcome to this world.",
						},
						{
							key: "ch1.3",
							kind: "info",
							time: 4000,
							display: "I've been expecting you.",
						},
						{
							key: "ch1.4",
							kind: "info",
							time: 5000,
							display: "You can now move.",
							action: "enableMovement",
						},
					],
				},
			},
		],
	},
];
