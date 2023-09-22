import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/userReducers";
import {
    generoListReducer,
    generoDeleteReducer,
    generoDetailsReducer,
    generoUpdateReducer,
    generoCreateReducer,
} from "./reducers/generoReducers";
import {
    categoriaListReducer,
    categoriaDeleteReducer,
    categoriaDetailsReducer,
    categoriaUpdateReducer,
    categoriaCreateReducer,
} from "./reducers/categoriaReducers";
import {
    enderecoListReducer,
    enderecoDeleteReducer,
    enderecoDetailsReducer,
    enderecoUpdateReducer,
    enderecoCreateReducer,
} from "./reducers/enderecoReducers";
import {
    estadoCivilListReducer,
    estadoCivilDeleteReducer,
    estadoCivilDetailsReducer,
    estadoCivilUpdateReducer,
    estadoCivilCreateReducer,
} from "./reducers/estadoCivilReducers";
import {
    igrejaListReducer,
    igrejaDeleteReducer,
    igrejaDetailsReducer,
    igrejaUpdateReducer,
    igrejaCreateReducer,
} from "./reducers/igrejaReducers";
import {
    pessoaListReducer,
    pessoaDeleteReducer,
    pessoaDetailsReducer,
    pessoaUpdateReducer,
    pessoaCreateReducer,
} from "./reducers/pessoaReducers";
import {
    profissaoListReducer,
    profissaoDeleteReducer,
    profissaoDetailsReducer,
    profissaoUpdateReducer,
    profissaoCreateReducer,
} from "./reducers/profissaoReducers";
import { cepFectchReducer } from "./reducers/cepReducers";

const reducer = combineReducers({
    generoList: generoListReducer,
    userLogin: userLoginReducer,
    categoriaList: categoriaListReducer,
    enderecoList: enderecoListReducer,
    estadoCivilList: estadoCivilListReducer,
    igrejaList: igrejaListReducer,
    pessoaList: pessoaListReducer,
    profissaoList: profissaoListReducer,
    categoriaDelete: categoriaDeleteReducer,
    enderecoDelete: enderecoDeleteReducer,
    estadoCivilDelete: estadoCivilDeleteReducer,
    generoDelete: generoDeleteReducer,
    igrejaDelete: igrejaDeleteReducer,
    pessoaDelete: pessoaDeleteReducer,
    profissaoDelete: profissaoDeleteReducer,
    categoriaDetails: categoriaDetailsReducer,
    categoriaUpdate: categoriaUpdateReducer,
    enderecoDetails: enderecoDetailsReducer,
    enderecoUpdate: enderecoUpdateReducer,
    estadoCivilDetails: estadoCivilDetailsReducer,
    estadoCivilUpdate: estadoCivilUpdateReducer,
    generoDetails: generoDetailsReducer,
    generoUpdate: generoUpdateReducer,
    igrejaDetails: igrejaDetailsReducer,
    igrejaUpdate: igrejaUpdateReducer,
    pessoaDetails: pessoaDetailsReducer,
    pessoaUpdate: pessoaUpdateReducer,
    profissaoDetails: profissaoDetailsReducer,
    profissaoUpdate: profissaoUpdateReducer,
    categoriaCreate: categoriaCreateReducer,
    enderecoCreate: enderecoCreateReducer,
    estadoCivilCreate: estadoCivilCreateReducer,
    generoCreate: generoCreateReducer,
    igrejaCreate: igrejaCreateReducer,
    pessoaCreate: pessoaCreateReducer,
    profissaoCreate: profissaoCreateReducer,
    cepFetch: cepFectchReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

export const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});

export default store;
