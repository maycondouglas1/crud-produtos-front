import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./styles.css";

const EditProduct = () => {
    return (
        <div className="form-container">
            <h2>Editar Produto</h2>
            <form>
                <div className="input-container">
                    <input type="text" name="name" required />
                    <label>Nome</label>
                </div>
                <div className="input-container">
                    <input type="number" name="price" required />
                    <label>Preço</label>
                </div>
                <div className="input-container">
                    <input type="number" name="stock" required />
                    <label>Estoque</label>
                </div>
                <Button>Salvar</Button>
            </form>
        </div>
    );
}

export default EditProduct;