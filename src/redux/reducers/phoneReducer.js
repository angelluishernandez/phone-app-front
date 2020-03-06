import { UPDATE_PHONES } from "../actions/updatePhones";

const phoneList = (state = {}, { type, payload }) => {
	switch (type) {
		case UPDATE_PHONES:
			return payload;

		default:
			return state;
	}
};

export default phoneList;
