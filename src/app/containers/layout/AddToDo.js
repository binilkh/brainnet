import React from 'react';
import { connect } from 'react-redux';
import { fetchData, changePage } from './actions';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { messages } from './messages';

let AddToDo = ({ dispatch }) => {
  	var searchQuery = '';
  return (
	<div>
		<Form
		  onSubmit={e => {
			e.preventDefault();
			 const form = e.target.elements;
			 const searchDateFrom = form.formGridDateFromYear.value+'-'+form.formGridDateFromMonth.value+'-'+form.formGridDateFromDay.value;
			const searchDateTo = form.formGridDateToYear.value+'-'+form.formGridDateToMonth.value+'-'+form.formGridDateToDay.value;
			searchQuery = {
				ueln: form.equineNumbr.value,
				dateFrom: searchDateFrom,
				dateTo: searchDateTo,
			};
			dispatch(fetchData(searchQuery));
			dispatch(changePage(true));
			form.equineNumbr.value = '';
			form.formGridDateFromYear.value = '';
			form.formGridDateFromMonth.value = '';
			form.formGridDateFromDay.value = '';
			form.formGridDateToYear.value = '';
			form.formGridDateToMonth.value = '';
			form.formGridDateToDay.value = '';
		  }}
		>
		  
				
		  <Form.Group controlId="equineNumbr">
				<div className="number">
					Enter UELN, Passport or MicroChip Number
				</div>
				<div>
					<input className="numbetText" type="text" id="equineNumbr" placeholder="Enter one of above number" />
				</div>
			</Form.Group>
			<div className="messageLineOuter">
				<div className="messageLine1">
					{messages.text1}
				</div>
				<div className="messageLine2">
					{messages.text2}
				</div>
			</div>
			<div className="dateLabel">
				<div className="fromDate">
					From Date
				</div>
				<div className="toDate">
					To Date
				</div>
			</div>
			<div className="dateOuter"> 
				<Form.Label>Day</Form.Label>
				<Form.Label>Month</Form.Label>
				<Form.Label>Year</Form.Label>
				<Form.Label></Form.Label>
				<Form.Label>Day</Form.Label>
				<Form.Label>Month</Form.Label>
				<Form.Label>Year</Form.Label>
			</div>
			<div className="dateOuter1"> 
				<div><input className="txtTwoDigits" id="formGridDateFromDay" type="text" placeholder="01" /></div>
				<div><input className="txtTwoDigits" id="formGridDateFromMonth" type="text" placeholder="01" /></div>
				<div><input className="txtFourDigits" id="formGridDateFromYear" type="text" placeholder="2019" /></div>
				<div>to</div>
				<div><input className="txtTwoDigits" id="formGridDateToDay" type="text" placeholder="01" /></div>
				<div><input className="txtTwoDigits" id="formGridDateToMonth" type="text" placeholder="01" /></div>
				<div><input className="txtFourDigits" id="formGridDateToYear" type="text" placeholder="2019" /></div>
			</div>
			<div className="btnHolder">
				<button type="submit" className="searchBtn">SEARCH NOW &nbsp;&nbsp;&#62;</button>
			</div>
		</Form>
	</div>
  );
};
AddToDo = connect()(AddToDo);

export default AddToDo;