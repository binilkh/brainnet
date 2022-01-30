import React from 'react';
import { HomePage } from '../home';
import { HomeLogin } from '../homeLogin';
import { Footer } from '../footer';
import { Booking } from '../booking';
import { Search } from '../search';
import './styles.css';

class Layout extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			outerStyle:{display:'grid'},
			innerStyle:{display:'none'}
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.clearBox = this.onSubmit.bind(this);
  	}
  	componentDidMount() {
	
	}
	onSubmit(){
		const userId = document.getElementById('username').value;
		const userPaswd = document.getElementById('userpaswd').value;
		// const outer = document.getElementById('outerdiv');
		// const inner = document.getElementById('innerdiv');
		if((userId==='brain') && (userPaswd==='brain')){
			this.setState({
				outerStyle:{display:'none'},
				innerStyle:{display:'block'}
			}
			)
		}
	}

	render() {
		//var imgUrl = 'http://www.kretha.net/fnature/api/carousel/kollam-innerbanner-boatjetty.jpg'
		//var divStyle = {
            //backgroundImage: 'url(' + backImagage + ')'
		//};
		return (
			<div>
				<div className="mainLogin" id="outerdiv" name="outerdiv" style={this.state.outerStyle}>
					<div className="headerMain">
						<HomeLogin />
					</div>
					<div className="login">
						<form>
							<div>
								<label>UserName&nbsp;&nbsp;&nbsp;</label>
								<input type="text" id="username" name="username"></input>
							</div>
							<div>
								<label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
								<input type="password" id="userpaswd" name="userpaswd"></input>
							</div>
							<div className="fill">

							</div>
							<div>
								<button type="button" onClick={this.onSubmit}>Login</button>
								<button type="reset">Cancel</button>
							</div>
						</form>
					</div>
				</div>
				<div id="innerdiv" name="innerdiv" style={this.state.innerStyle}>
					<div className="main">
						<div className="headerMain">
						<HomePage />
						</div>
						<div className="bookingMain">
						<Booking fetchData={this.props.fetchData} uploadFile={this.props.uploadFile}/>
						</div>
						<div className="rightLabel">
						<Search searchDataList={this.props.searchData}/>
						</div>
					</div>
					<div>
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;