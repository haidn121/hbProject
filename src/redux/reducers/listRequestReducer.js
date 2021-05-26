import * as types from "../../constants/type";

const initialState = {
    loading: false,
    error: "",
};

const listRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_REQUEST:
            return {
                ...state,
            };
        case types.START_GET_LIST_REQUEST:
            return {
                ...state,
                loading: action.payload
            };
        case types.GET_LIST_REQUEST_SUCCESS:
            console.log({ state })
            return {
                ...state,
                data: {...action.payload },
                error: "",
            };
        case types.GET_LIST_REQUEST_FAIL:
            return {
                ...state,
                data: {},
                error: action.payload.error,
            };
        case types.ADD_REQUEST:
            return {
                ...state,

            }
        case types.ADD_REQUEST_SUCCESS:
            console.log("add_request_success: ", action)
            console.log({ state })
            return {
                ...state,
                data: {...state.data, ...action.payload }
            }
        case types.FILTERS_REQUEST:
            console.log("filter_request: ", action)
            return {
                ...state,
            }
        case types.FILTERS_REQUEST_SUCCESS:
            console.log("filter_request: ", action.payload)
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
};
export default listRequestReducer;