import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';
import './styles.css';
const DataList = (props) => {
 if(props.searchDataList.length === 0){
	return(
	  
		<label> Sorry, There are no matches for the given search data.</label>
	  
	);
}else{
return(
	<div>
		<div className="serachResultData1">
			<div className="colZero">
				Brain-ID
			</div>
			<div className="colOne">
				Name
			</div>
			<div className="colTwo">
				Address
			</div>
			<div className="colThree">
				ID Type
			</div>
			<div className="colFour">
				ID, DOB
			</div>
			<div className="colSix">
				Date
			</div>
			<div className="colSeven">
				Photo
			</div>
		</div>
		<div className="searchList">
			{props.searchDataList.map((toDo, index) => (
					<ToDo key={index} result={toDo} />
			))} 
		</div>
	</div>
);
}
}

DataList.propTypes = {
  searchDataList: PropTypes.any,
  searchDataError: PropTypes.any,
  searchData: PropTypes.any,
};

export default DataList;