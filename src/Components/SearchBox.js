import React from 'react'


const SearchBox = ({Searchfield,ChangeField}) => {

	return(
		<div className="pa3">
			<input 
				type="search" 
				placeholder="search robot" 
				className="pa3 ba b-green bg-lightest-blue"
				onChange = {ChangeField}
			/>
		</div>
	);

}

export default SearchBox;