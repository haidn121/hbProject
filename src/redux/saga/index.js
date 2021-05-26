import { call, all } from "redux-saga/effects";
import watchAddRequest from "./addRequest";
import watchAuth from "./auth";
import watchfilterRequest from "./filterRequest";
import watchListRequest from "./listRequest";


export default function* rootSaga() {
    yield all([
        call(watchAuth),
        call(watchListRequest),
        call(watchAddRequest),
        call(watchfilterRequest),
    ]);
}