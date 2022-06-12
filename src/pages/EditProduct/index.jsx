import React, { useContext, useEffect, useCallback } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import Button from "../../components/Button";
import "../AddProduct/styles.css";

const EditProduct = () => {
    const { id } = useParams();
    const { updateProduct, getProduct, product } = useContext(ProductContext);
    const navigate = useNavigate();

    const validationSchema = yup.object({
        name: yup.string().required("Digite um nome"),
        price: yup.number().required("Digite o preço"),
        stock: yup.number().required("Digite a quantidade em estoque")
    });

    const formik = useFormik({
        onSubmit: (values) => updateProduct({
            name: values.name || product.name,
            price: values.price || product.price,
            stock: values.stock || product.stock,
        }, id, navigate("/")),
        validationSchema,
        validateOnMount: true,
        initialValues: {
            name: null,
            price: null,
            stock: null,
        },
    });

    const getData = useCallback(async () => {
        await getProduct(id);
    }, [getProduct, id]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div className="form-container">
            <h2>Editar Produto</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="input-container">
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name !== null ? formik.values.name : product.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <label>Nome</label>
                </div>
                {(formik.touched.name && formik.errors.name) && (
                    <span className="error">{formik.errors.name}</span>
                )}
                <div className="input-container">
                    <input
                        type="number"
                        name="price"
                        value={formik.values.price !== null ? formik.values.price : product.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <label>Preço</label>
                </div>
                {(formik.touched.name && formik.errors.name) && (
                    <span className="error">{formik.errors.name}</span>
                )}
                <div className="input-container">
                    <input
                        type="number"
                        name="stock"
                        value={formik.values.stock !== null ? formik.values.stock : product.stock}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <label>Estoque</label>
                </div>
                {(formik.touched.name && formik.errors.name) && (
                    <span className="error">{formik.errors.name}</span>
                )}
                <Button onClick={formik.handleSubmit}>
                    {formik.isSubmitting ? "Salvando..." : "Salvar"}
                </Button>
            </form>
        </div>
    );
}

export default EditProduct;