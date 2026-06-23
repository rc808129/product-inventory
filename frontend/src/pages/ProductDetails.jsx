import {
useEffect,
useState
} from "react";

import {
useParams
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import {
getProductById
} from "../services/productService";

function ProductDetails() {

const { id } = useParams();

const [product, setProduct] =
useState(null);

useEffect(() => {


loadProduct();


}, []);

const loadProduct =
async () => {


const response =
  await getProductById(id);

setProduct(response.data);


};

if (!product) {

return (
  <MainLayout>
    <div className="loading-container">
      Loading...
    </div>
  </MainLayout>
);


}

return (


<MainLayout>

  <div className="product-details-card">

    <h1 className="product-title">
      {product.productName}
    </h1>

    <div className="product-details-content">

      <p className="product-detail-item">
        <strong className="product-detail-label">
          Description:
        </strong>
        {product.description}
      </p>

      <p className="product-detail-item">
        <strong className="product-detail-label">
          Category:
        </strong>
        {product.category}
      </p>

      <p className="product-detail-item">
        <strong className="product-detail-label">
          Price:
        </strong>
        ₹{product.price}
      </p>

      <p className="product-detail-item">
        <strong className="product-detail-label">
          Quantity:
        </strong>
        {product.quantity}
      </p>

      <p className="product-detail-item">
        <strong className="product-detail-label">
          Status:
        </strong>
        {product.status}
      </p>

      <p className="product-detail-item">
        <strong className="product-detail-label">
          Created:
        </strong>
        {
          new Date(
            product.createdAt
          ).toLocaleString()
        }
      </p>

      <p className="product-detail-item">
        <strong className="product-detail-label">
          Updated:
        </strong>
        {
          new Date(
            product.updatedAt
          ).toLocaleString()
        }
      </p>

    </div>

  </div>

</MainLayout>

);
}

export default ProductDetails;
