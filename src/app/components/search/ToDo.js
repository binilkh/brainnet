import React from 'react';
import PropTypes from 'prop-types';
import PopUp from './PopUp';
import './styles.css';

const SearchResult = ({ result }) => {
return(
<div>
	<div><hr></hr></div>
		<div className="serachResultData1">
			<div className="colZero">
				{result.brainNo}
			</div>
			<div className="colOne">
				&nbsp;&nbsp;{result.customer_name}
			</div>
			<div className="colTwo">
				&nbsp;&nbsp;{result.address}
			</div>
			<div className="colThree">
				&nbsp;&nbsp;{result.id_type}
			</div>
			<div className="colFour">
				&nbsp;&nbsp;{result.id_no}
			</div>
			<div className="colSix">
				&nbsp;&nbsp;{result.todate}
			</div>
			<div className="colSeven">
				&nbsp;&nbsp;<PopUp photo={result.photo} />	
			</div>
		</div>

</div>
);
}

SearchResult.propTypes = {
  result: PropTypes.object
};

export default SearchResult;