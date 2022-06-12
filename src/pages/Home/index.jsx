import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { TbTrash, TbEdit } from "react-icons/tb";
import { ProductContext } from "../../context/ProductContext";

const Home = () => {
    const { products, getProducts, deleteProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    const removeProduct = async(id) => {
        await deleteProduct(id);
    }

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return (
        <div className="container">
            <div className="products">
                <div className="products-header">
                    <h1 className="title">Produtos</h1>
                    <button className="btn-create" onClick={() => navigate("/add")}>+</button>
                </div>
                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Estoque</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.sort((a,b) => a.id - b.id).map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>R${product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <button 
                                            className="btn-trash" 
                                            onClick={() => removeProduct(product.id)}>
                                                <TbTrash />
                                        </button>
                                        <button 
                                            className="btn-edit" 
                                            onClick={() => navigate(`edit/${product.id}`)}>
                                                <TbEdit /> 
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;