import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Button from "../../components/Button";
import "./styles.css";
import { ProductContext } from "../../context/ProductContext";

const AddProduct = () => {
    const { createProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    const validationSchema = yup.object({
        name: yup.string().required("Digite um nome"),
        price: yup.number().required("Digite o preço"),
        stock: yup.number().required("Digite a quantidade em estoque")
    });

    const formik = useFormik({
        onSubmit: (values) => createProduct({
            name: values.name,
            price: values.price,
            stock: values.stock,
        }, navigate("/")),
        validationSchema,
        validateOnMount: true,
        initialValues: {
            name: '',
            price: 0,
            stock: 0,
        },
    });

    return (
        <div className="form-container">
            <h2>Cadastrar Produto</h2>
            <form>
                <div className="input-container">
                    <input
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        name="name"
                        required
                    />
                    <label>Nome</label>
                </div>
                <div className="input-container">
                    <input
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="number"
                        name="price"
                        required
                    />
                    <label>Preço</label>
                </div>
                <div className="input-container">
                    <input
                        value={formik.values.stock}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="number"
                        name="stock"
                        required
                    />
                    <label>Estoque</label>
                </div>
                <Button onClick={formik.handleSubmit}>
                    {formik.isSubmitting ? "Cadastando..." : "Cadastrar"}
                </Button>
            </form>
        </div>
    );
}

export default AddProduct;
