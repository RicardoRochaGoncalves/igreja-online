import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import {
    carrosselImagemCreateReducer,
    carrosselImagemDeleteReducer,
    carrosselImagemDetailsReducer,
    carrosselImagemListReducer,
    carrosselImagemUpdateReducer,
} from "./reducers/carrosselImagemReducers";
import {
    categoriaNoticiaCreateReducer,
    categoriaNoticiaDeleteReducer,
    categoriaNoticiaDetailsReducer,
    categoriaNoticiaListReducer,
    categoriaNoticiaUpdateReducer,
} from "./reducers/categoriaNoticiaReducers";
import {
    categoriaPessoaCreateReducer,
    categoriaPessoaDeleteReducer,
    categoriaPessoaDetailsReducer,
    categoriaPessoaListReducer,
    categoriaPessoaUpdateReducer,
} from "./reducers/categoriaPessoaReducers";
import {
    estadoCivilCreateReducer,
    estadoCivilDeleteReducer,
    estadoCivilDetailsReducer,
    estadoCivilListReducer,
    estadoCivilUpdateReducer,
} from "./reducers/estadoCivilReducers";
import {
    eventoAoVivoCreateReducer,
    eventoAoVivoDeleteReducer,
    eventoAoVivoDetailsReducer,
    eventoAoVivoListReducer,
    eventoAoVivoUpdateReducer,
} from "./reducers/eventoAoVivoReducers";
import {
    eventoCreateReducer,
    eventoDeleteReducer,
    eventoDetailsReducer,
    eventoListReducer,
    eventoUpdateReducer,
} from "./reducers/eventoReducers";
import {
    generoCreateReducer,
    generoDeleteReducer,
    generoDetailsReducer,
    generoListReducer,
    generoUpdateReducer,
} from "./reducers/generoReducers";
import {
    igrejaCreateReducer,
    igrejaDeleteReducer,
    igrejaDetailsReducer,
    igrejaListReducer,
    igrejaUpdateReducer,
} from "./reducers/igrejaReducers";
import {
    noticiaCreateReducer,
    noticiaDeleteReducer,
    noticiaDetailsReducer,
    noticiaListReducer,
    noticiaUpdateReducer,
} from "./reducers/noticiaReducers";
import {
    pessoaCreateReducer,
    pessoaDeleteReducer,
    pessoaDetailsReducer,
    pessoaListReducer,
    pessoaUpdateReducer,
} from "./reducers/pessoaReducers";
import {
    profissaoCreateReducer,
    profissaoDeleteReducer,
    profissaoDetailsReducer,
    profissaoListReducer,
    profissaoUpdateReducer,
} from "./reducers/profissaoReducers";
import {
    versiculoCreateReducer,
    versiculoDeleteReducer,
    versiculoDetailsReducer,
    versiculoListReducer,
    versiculoUpdateReducer,
} from "./reducers/versiculoReducers";
import {
    categoriaAgendaCreateReducer,
    categoriaAgendaDeleteReducer,
    categoriaAgendaDetailsReducer,
    categoriaAgendaListReducer,
    categoriaAgendaUpdateReducer,
} from "./reducers/categoriaAgendaReducers";
import {
    agendaCreateReducer,
    agendaDeleteReducer,
    agendaDetailsReducer,
    agendaListReducer,
    agendaUpdateReducer,
} from "./reducers/agendaReducers";
import { cepFetchReducer } from "./reducers/cepReducers";

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    carrosselImagemList: carrosselImagemListReducer,
    carrosselImagemDetails: carrosselImagemDetailsReducer,
    carrosselImagemCreate: carrosselImagemCreateReducer,
    carrosselImagemUpdate: carrosselImagemUpdateReducer,
    carrosselImagemDelete: carrosselImagemDeleteReducer,
    categoriaNoticiaList: categoriaNoticiaListReducer,
    categoriaNoticiaDetails: categoriaNoticiaDetailsReducer,
    categoriaNoticiaCreate: categoriaNoticiaCreateReducer,
    categoriaNoticiaUpdate: categoriaNoticiaUpdateReducer,
    categoriaNoticiaDelete: categoriaNoticiaDeleteReducer,
    categoriaPessoaList: categoriaPessoaListReducer,
    categoriaPessoaDetails: categoriaPessoaDetailsReducer,
    categoriaPessoaCreate: categoriaPessoaCreateReducer,
    categoriaPessoaUpdate: categoriaPessoaUpdateReducer,
    categoriaPessoaDelete: categoriaPessoaDeleteReducer,
    estadoCivilList: estadoCivilListReducer,
    estadoCivilDetails: estadoCivilDetailsReducer,
    estadoCivilCreate: estadoCivilCreateReducer,
    estadoCivilUpdate: estadoCivilUpdateReducer,
    estadoCivilDelete: estadoCivilDeleteReducer,
    eventoAoVivoList: eventoAoVivoListReducer,
    eventoAoVivoDetails: eventoAoVivoDetailsReducer,
    eventoAoVivoCreate: eventoAoVivoCreateReducer,
    eventoAoVivoUpdate: eventoAoVivoUpdateReducer,
    eventoAoVivoDelete: eventoAoVivoDeleteReducer,
    eventoList: eventoListReducer,
    eventoDetails: eventoDetailsReducer,
    eventoCreate: eventoCreateReducer,
    eventoUpdate: eventoUpdateReducer,
    eventoDelete: eventoDeleteReducer,
    generoList: generoListReducer,
    generoDetails: generoDetailsReducer,
    generoCreate: generoCreateReducer,
    generoUpdate: generoUpdateReducer,
    generoDelete: generoDeleteReducer,
    igrejaList: igrejaListReducer,
    igrejaDetails: igrejaDetailsReducer,
    igrejaCreate: igrejaCreateReducer,
    igrejaUpdate: igrejaUpdateReducer,
    igrejaDelete: igrejaDeleteReducer,
    noticiaList: noticiaListReducer,
    noticiaDetails: noticiaDetailsReducer,
    noticiaCreate: noticiaCreateReducer,
    noticiaUpdate: noticiaUpdateReducer,
    noticiaDelete: noticiaDeleteReducer,
    pessoaList: pessoaListReducer,
    pessoaDetails: pessoaDetailsReducer,
    pessoaCreate: pessoaCreateReducer,
    pessoaUpdate: pessoaUpdateReducer,
    pessoaDelete: pessoaDeleteReducer,
    profissaoList: profissaoListReducer,
    profissaoDetails: profissaoDetailsReducer,
    profissaoCreate: profissaoCreateReducer,
    profissaoUpdate: profissaoUpdateReducer,
    profissaoDelete: profissaoDeleteReducer,
    versiculoList: versiculoListReducer,
    versiculoDetails: versiculoDetailsReducer,
    versiculoCreate: versiculoCreateReducer,
    versiculoUpdate: versiculoUpdateReducer,
    versiculoDelete: versiculoDeleteReducer,
    categoriaAgendaList: categoriaAgendaListReducer,
    categoriaAgendaDetails: categoriaAgendaDetailsReducer,
    categoriaAgendaCreate: categoriaAgendaCreateReducer,
    categoriaAgendaUpdate: categoriaAgendaUpdateReducer,
    categoriaAgendaDelete: categoriaAgendaDeleteReducer,
    agendaList: agendaListReducer,
    agendaDetails: agendaDetailsReducer,
    agendaCreate: agendaCreateReducer,
    agendaUpdate: agendaUpdateReducer,
    agendaDelete: agendaDeleteReducer,
    cepFetch: cepFetchReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

export const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
});

export default store;
