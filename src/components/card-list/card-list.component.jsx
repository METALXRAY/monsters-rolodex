// import { Component } from "react";

import "./card-list.styles.css";
import Card from "../card/card.component";
import "./card.styles.css";

const CardList = ({ monsters }) => (
	<div className='card-list'>
		{monsters.map((monster) => {
			return <Card monster={monster} />;
		})}
	</div>
);
export default CardList;
