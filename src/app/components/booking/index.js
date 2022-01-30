import React, { Component } from 'react';
import {
    LocalForm,Control
  } from 'react-redux-form';
import './styles.css';

export class Booking extends Component{
    constructor(props) {
        super(props);
        this.state ={
            file:null
          }
          this.onSubmit = this.onSubmit.bind(this)
          this.onChange = this.onChange.bind(this)
          this.uploadFile = this.uploadFile.bind(this)
    }
    async onSubmit(e){
        e.preventDefault();
        const custId = document.getElementById('custId').value;
        const custName = document.getElementById('custName').value;
        const custIdType = document.getElementById('custIdType').value;
        const custIdNumber = document.getElementById('custIdNumber').value;
        const custAddress = document.getElementById('custAddress').value;
        const uploadData = {custId, custName, custAddress, custIdType, custIdNumber};
        //console.log('formdata', uploadData);
        //let res = await this.uploadFile(this.state.file);
        //console.log(res.data);
        this.uploadFile(this.state.file, uploadData);
        
    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }
    async uploadFile(file, uploadData){
        const formData = new FormData();
        formData.append('avatar',file)
        const dataUp ={ formData, uploadData };
        this.props.uploadFile(dataUp);
      }
    handleSubmit(model) {
        this.props.fetchData(model);
    }
    attachDispatch = (dispatch) => {
        this.formDispatch = dispatch;
      }
    render(){
        return(          
                <div className="bookingWrapper">
                    <div className="bookingContainer">
                    <div className="uploadData">
                        <LocalForm
                    getDispatch={(dispatch) => this.attachDispatch(dispatch)}
                    onSubmit={(values) => this.handleSubmit(values)}
                >
                            <div className="searchHead">
                                Search
                            </div>
                            <div className="nameText">
                                <Control.text className="txtBoxStyle" type="text" placeholder="Enter Name" model=".searchName"/>
                            </div>
                            <div className="idText" >
                                <Control.text className="txtBoxStyle" type="text" placeholder="Enter ID" model=".searchNumber"/>
                            </div>
                            <div className="submitSearch">
                                <button className="btnStyle" type="submit">Search</button>
                            </div>
                            <div className="submitSearch">
                                <button className="btnStyle" type="reset">Clear</button>
                            </div>
                            </LocalForm>
                        </div>
                        <div className="uploadData">
                            <form onSubmit={this.onSubmit}>
                                <div className="searchHead">Upload Data</div>
                                <div className="nameText">
                                    <input className="txtBoxStyle" type="text" placeholder="Enter Brainnet Id" name="custId" id="custId" />
                                </div>
                                <div className="nameText">
                                    <input className="txtBoxStyle" type="text" placeholder="Enter Name" name="custName" id="custName" />
                                </div>
                                <div className="nameText">
                                    <input className="txtBoxStyle" type="text" placeholder="Enter address" name="custAddress" id="custAddress" />
                                </div>
                                <div className="nameText">
                                    <input className="txtBoxStyle" type="text" placeholder="Enter ID Type:-DL/Aadhar..." name="custIdType" id="custIdType" />
                                </div>
                                <div className="nameText">
                                    <input className="txtBoxStyle" type="text" placeholder="Enter ID Number" name="custIdNumber" id="custIdNumber" />
                                </div>
                                <div className="nameLabel">
                                    <label>Photo</label>
                                </div>
                                <div>
                                    <input type="file" onChange={ this.onChange } />
                                </div>
                                <div className="spaceFillUpload"></div>
                                <button className="btnStyle" type="submit">Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
        );

    }
   
};
