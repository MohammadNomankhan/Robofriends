import React from 'react'
import Robot from '../Components/Robots'

const CardList = ({details}) => {
	
	const cardList = details.map((element, i) => {

		return (
			<Robot 
				key={details[i].id} 
				id={details[i].id} 
				name={details[i].name} 
				email={details[i].email} 
			/>)

	});

	return (

		<div>
			{cardList}
		</div>

	);
}

export default CardList;