import {
  useEffect,
  useState
} from "react";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import ProductForm from "../products/ProductForm";

import {
  getProductById,
  updateProduct
} from "../services/productService";

function EditProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {

    const response =
      await getProductById(id);

    setProduct(response.data);
  };

  const onSubmit = async (data) => {

    try {

      setLoading(true);

      await updateProduct(id, data);

      navigate("/products");

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  if (!product) {
    return (
      <MainLayout>
        Loading...
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <h1 className="page-heading">
  Edit Product
</h1>

      <ProductForm
        defaultValues={product}
        onSubmit={onSubmit}
        loading={loading}
      />

    </MainLayout>
  );
}

export default EditProduct;