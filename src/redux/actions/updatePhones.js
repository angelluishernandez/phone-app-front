import phonesService from "../../services/PhonesService";

export const updatePhones = dispatch => {
	return dispatch => {
		return phonesService
			.getPhones()
			.then(res => dispatch({ type: "UPDATE_PHONES", payload: res.data }))
			.catch(error => console.log(error));
	};
};




// =============================================================

// An action is pased to a reducer in order to change the state of the app
//

