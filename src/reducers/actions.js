import { SET_SPECTACLES } from "./actionTypes";

export const setSpectacles = spectacles => dispatch => {
    return dispatch({ type: SET_SPECTACLES, payload: spectacles });
};
