import {
  Link
} from "react-router-dom";

const ProductTable = ({
  products,
  onDelete
}) => {

  return (
   <div className="table-wrapper">
    <table className="product-table">

      <thead>

       <tr className="table-header-row">

          <th className="table-heading">Name</th>
          <th className="table-heading">Category</th>
          <th className="table-heading">Price</th>
          <th className="table-heading">Quantity</th>
          <th className="table-heading">Status</th>
          <th className="table-heading">Actions</th>

        </tr>

      </thead>

      <tbody>

        {
          products.map(
            (product) => (

              <tr
                key={product._id}
                className="table-row"
              >

                <td className="table-data">
                  {product.productName}
                </td>

                <td className="table-data">
                  {product.category}
                </td>

                <td className="table-data">
                  ₹{product.price}
                </td>

               <td className="table-data">
                  {product.quantity}
                </td>

               <td className="table-data">
                  {product.status}
                </td>

               <td className="action-cell">

                  <Link
                    to={`/products/${product._id}`}
                    className="view-btn"
                  >
                    View
                  </Link>

                  <Link
                    to={`/products/edit/${product._id}`}
                    className="edit-btn"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      onDelete(
                        product._id
                      )
                    }
                    className="delete-btn"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            )
          )
        }

      </tbody>

    </table>
  
  </div>
  )
};

export default ProductTable;