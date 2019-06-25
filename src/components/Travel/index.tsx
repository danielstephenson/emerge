import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
interface IMapConfig {
	width: number;
	height: number;
}

interface ITravelProps {
	map: string;
	mapConfig?: IMapConfig;
}

const Travel: React.FC<ITravelProps> = ({ map, mapConfig }) => {
	const config = { ...defaultConfig, ...mapConfig };
	const mapStyle = {
		"--mapWidth": tileSize.width * config.width,
		"--mapHeight": tileSize.height * config.height,
	} as CSSProperties;

	return (
		<div className={styles.mapContainer} style={mapStyle}>
			{map}
		</div>
	);
};

interface IRect {
	width: number;
	height: number;
}

const tileSize: Readonly<IRect> = { width: 20, height: 20 }; // width and height for each tile in pixels
const defaultConfig: Readonly<IMapConfig> = { width: 20, height: 20 }; // width and height for map in # of tiles

export default Travel;
