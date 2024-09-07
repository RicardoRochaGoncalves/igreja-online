import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createCategoriaAgenda } from "../../../store/actions/categoriaAgendaActions";

import { listCategoriasAgenda } from "../../../store/actions/categoriaAgendaActions";
import { listPessoas } from "../../../store/actions/pessoaActions";

import SelectFieldComponent from "../../../components/SelectFieldComponent";
import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import DateFieldComponent from "../../../components/DateFieldComponent";

function CategoriaAgendaCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categoriaAgendaList = useSelector((state) => state.categoriaAgendaList);
    const { categoriasAgenda } = categoriaAgendaList;

    const pessoaList = useSelector((state) => state.pessoaList);
    const { pessoas } = pessoaList;

    const [dataEvento, setDataEvento] = useState("");
    const [categoria, setCategoria] = useState("");
    const [dirigente, setDirigente] = useState("");
    const [pregador, setPregador] = useState("");
    const [ativo, setAtivo] = useState("");
    const [isEditing] = useState(true);

    useEffect(() => {
        dispatch(listCategoriasAgenda());
        dispatch(listPessoas());
    }
    , [dispatch]);

    const handleSaveClick = () => {
        dispatch(
            createCategoriaAgenda({
                data_evento: dataEvento,
                categoria: categoria,
                dirigente: dirigente,
                pregador: pregador,
                ativo: ativo,
            })
        );
        navigate("/categoriasagendas");
    };

    const fields = [
        {
            label: "Data do Evento",
            component: (
                <DateFieldComponent
                    value={dataEvento}
                    isEditing={isEditing}
                    onChange={(e) => setDataEvento(e.target.value)}
                />
            ),
        },
        {
            label: "Categoria",
            component: (
                <SelectFieldComponent
                    options={[{ id: "", nome: "Selecione uma categoria..." }, 
                        ...categoriasAgenda,
                    ]}
                    value={categoria}
                    isEditing={isEditing}
                    onChange={(e) => setCategoria(e.target.value)}
                />
            ),
        },
        {
            label: "Dirigente",
            component: (
                <SelectFieldComponent
                    options={[{ id: "", nome: "Selecione um dirigente..." }, 
                        ...pessoas,
                    ]}
                    value={dirigente}
                    isEditing={isEditing}
                    onChange={(e) => setDirigente(e.target.value)}
                />
            ),
        },
        {
            label: "Pregador",
            component: (
                <SelectFieldComponent
                    options={[{ id: "", nome: "Selecione um pregador..." }, 
                        ...pessoas,
                    ]}
                    value={pregador}
                    isEditing={isEditing}
                    onChange={(e) => setPregador(e.target.value)}
                />
            ),
        },
        {
            label: "Ativo",
            component: (
                <CheckboxFieldComponent
                    checked={ativo}
                    onChange={(e) => setAtivo(e.target.checked)}
                />
            ),
        },
    ];

    return (
        <DetailsComponent
            title="Criar Categoria de Agenda"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath={"/categoriasagendas"}
        />
    );
}

export default CategoriaAgendaCreatePage;
