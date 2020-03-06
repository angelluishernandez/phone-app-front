import phonesService from "../../services/PhonesService"

export const UPDATE_PHONES = "UPDATE_PHONES";


const updatePhones = dispatch => {
	phonesService.getPhones()
		.then(res => res.json())
		.then(res => dispatch({ type: UPDATE_PHONES, payload: res.data }));
};

export default updatePhones;
