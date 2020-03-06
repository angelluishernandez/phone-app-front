import React from "react";
import phoneList from "../../phoneList.json";
import PhoneCard from "./PhoneCard.js";
class Home extends React.Component {
	state = {
		isLoading: true,
		phones: "",
	};
	componentDidMount() {
		this.setState({});
	}

	render() {
		console.log(this.props)
		return (
			<div className="Home row mt-5 mr-3 ml-3">
				{phoneList.map(phone => (
					<PhoneCard key={phone.id} image ={require(`../../Images/${phone.imageFileName}`)}{...phone} />
				))}
			</div>
		);
	}
}

export default Home;
