import { useState } from "react";

import { useNavigate } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import ProductForm from "../products/ProductForm";

import {
  createProduct
} from "../services/productService";

function CreateProduct() {

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const onSubmit = async (data) => {

    try {

      setLoading(true);

      await createProduct(data);

      navigate("/products");

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <MainLayout>

      <h1 className="page-heading">
        Create Product
      </h1>

      <ProductForm
        defaultValues={{
          productName: "",
          description: "",
          category: "",
          price: "",
          quantity: "",
          status: "Active"
        }}
        onSubmit={onSubmit}
        loading={loading}
      />

    </MainLayout>
  );
}

export default CreateProduct;