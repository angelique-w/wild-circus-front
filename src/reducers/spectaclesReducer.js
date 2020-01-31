import { SET_SPECTACLES } from "./actionTypes";

const initialSpectaclesState = {
    spectacles: []
};

const spectaclesReducer = (state = initialSpectaclesState, action) => {
    switch (action.type) {
        case SET_SPECTACLES:
            return { spectacles: action.payload };
        default:
            return state;
    }
};

export default spectaclesReducer;
