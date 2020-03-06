import React from "react";
import phoneList from "../../phoneList.json";
import PhoneCard from "./PhoneCard.js";


const PhoneDetails = props => {
	console.log(props);
	const phone = phoneList.find(p => p.id === props.id);
	console.log(phone);
	return (
		<div className="PhoneDetail" style={{ marginTop: "100px" }}>
			<div className="container">
				<div className="row min-vh-100 justify-content-center">
					<div className="col-4">
						<img
							className="w-100"
							alt="..."
							src={require(`../../Images/${phone.imageFileName}`)}
						/>
					</div>
					<div className="col-4">
						<h1 className="text-left">{phone.name}</h1>
					</div>
					<div>
						<ul>
							<li>Manufactured by: {phone.manufacturer}</li>
							<li>Color: {phone.color}</li>
							<li>Price: €{phone.price}</li>
							<li>Color: {phone.color}</li>
							<li>Screen: {phone.screen}</li>
						</ul>
					</div>
					<div>
						<h1>Some more details</h1>
						<p>{phone.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhoneDetails;
