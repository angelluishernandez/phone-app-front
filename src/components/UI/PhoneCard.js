import React from "react";
import { Link } from "react-router-dom";

const PhoneCard = (props) => {
	return (
		<div className="PhoneCard col-sm-3 d-flex mb-5 card-container justify-content-center">
			<div className="card">
				<img src={props.image} className="card-image-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<Link
						to={`/${props.id}`}
						manufacturer={props.manufacturer}
						description={props.description}
						price={props.price}
						screen={props.screen}
						processor={props.processor}
						ram={props.ram}
					>
						Check this phone out
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PhoneCard;
