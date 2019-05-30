import React from "react";
import "./styles.less";

const Character: React.FC = () => {
	const [location, updateLocation] = React.useState({ x: 0, y: 0 });
	return (
		<div>
			<span>{`{${location.x}, ${location.y}}`}</span>
		</div>
	);
};

export default Character;
