import React from "react";
import {connect} from "react-redux"
import {updatePhones} from "../../redux/actions/updatePhones"

import PhoneCard from "./PhoneCard.js";
import { bindActionCreators } from "redux";


class Home extends React.Component  {


componentDidMount(){
	const {updatePhones} = this.props
	updatePhones()
}

render(){
	return (
		<div className="Home row mt-5 mr-3 ml-3">
			{/* {updatePhones.map(phone => (
				<PhoneCard key={phone.id} image ={require(`../../Images/${phone.imageFileName}`)}{...phone} />
			))} */}
		</div>
	);


}
		

}

const mapStateToProps = state => {
	console.log(state)
	return {
		phones: state
	}
}


const mapDispatchToProps = dispatch =>bindActionCreators(
	{
		updatePhones
	}, 
	dispatch

)
export default connect(mapStateToProps, mapStateToProps)(Home);
