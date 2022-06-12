import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import Button from "../../components/Button";
import "./styles.css";

const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState("");
    const { updateProduct, getProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    const validationSchema = yup.object({
        name: yup.string().required("Digite um nome"),
        price: yup.number().required("Digite o preço"),
        stock: yup.number().required("Digite a quantidade em estoque")
    });

    const formik = useFormik({
        onSubmit: (values) => updateProduct({
            name: values.name,
            price: values.price,
            stock: values.stock,
        }, id, navigate("/")),
        validationSchema,
        validateOnMount: true,
        initialValues: {
            name: '',
            price: 0,
            stock: 0,
        },
    });

    useEffect(() => {
        const res = getProduct(id);
        setProduct(res);
    }, [getProduct, id]);

    return (
        <div className="form-container">
            <h2>Editar Produto</h2>
            <form>
                <div className="input-container">
                    <input 
                        type="text" 
                        name="name"
                        value={product.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required 
                    />
                    <label>Nome</label>
                </div>
                <div className="input-container">
                    <input 
                        type="number" 
                        name="price"
                        value={product.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required 
                    />
                    <label>Preço</label>
                </div>
                <div className="input-container">
                    <input 
                        type="number" 
                        name="stock"
                        value={product.stock}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required 
                    />
                    <label>Estoque</label>
                </div>
                <Button onClick={formik.handleSubmit}>
                    {formik.isSubmitting ? "Salvando..." : "Salvar"}
                </Button>
            </form>
        </div>
    );
}

export default EditProduct;