import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriaDetails } from "../actions/categoriaActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Details from "../components/Details";
import { Container } from "react-bootstrap";
import { Link, useParams, useNavigate  } from "react-router-dom";


function CategoriaDetailsScreen( ) {
  const {id} = useParams();

  const dispatch = useDispatch();

  const categoriaDetailsState = useSelector((state) => state.categoriaDetails);
  const { loading, error, categoria } = categoriaDetailsState;

  useEffect(() => {
    dispatch(categoriaDetails(id));
  }, [dispatch, id]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Details categoria={categoria} />
      )}
    </Container>
  );
}

export default CategoriaDetailsScreen;