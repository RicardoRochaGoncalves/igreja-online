import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { generoListReducer, generoDeleteReducer } from "./reducers/generoReducers";
import { userLoginReducer } from "./reducers/userReducers";
import { categoriaListReducer, categoriaDeleteReducer, categoriaDetailsReducer } from "./reducers/categoriaReducers";
import { enderecoListReducer, enderecoDeleteReducer } from "./reducers/enderecoReducers";
import { estadoCivilListReducer, estadoCivilDeleteReducer } from "./reducers/estadoCivilReducers";
import { igrejaListReducer, igrejaDeleteReducer } from "./reducers/igrejaReducers";
import { pessoaListReducer, pessoaDeleteReducer } from "./reducers/pessoaReducers";
import { profissaoListReducer, profissaoDeleteReducer } from "./reducers/profissaoReducers";

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
