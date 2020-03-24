import { UPDATE_PHONES } from "../actions/updatePhones";


const initialState = {
  phones: []
}


const phoneList = (state = initialState, { type, payload }) => {
	switch (type) {
		case "UPDATE_PHONES":
			return payload;

		default:
			return state;
	}
};

export default phoneList;
