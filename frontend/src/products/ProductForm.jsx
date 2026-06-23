import { useForm } from "react-hook-form";

const ProductForm = ({
  defaultValues,
  onSubmit,
  loading
}) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="product-form"
    >

      <div className="form-group">
        <label className="form-label">Product Name</label>

        <input
         className="form-input"
          {...register("productName", {
            required: "Product Name Required",
            minLength: {
              value: 3,
              message:
                "Minimum 3 characters"
            }
          })}
        />

       <p className="error-text">
          {errors.productName?.message}
        </p>
      </div>

      <div className="form-group">
        <label className="form-label">Description</label>

        <textarea
          rows={4}
         className="form-textarea"
          {...register("description", {
            required: "Description Required"
          })}
        />

        <p className="error-text">
          {errors.description?.message}
        </p>
      </div>

      <div className="form-group">
        <label className="form-label">Category</label>

        <input
         className="form-input"
          {...register("category", {
            required: "Category Required"
          })}
        />

        <p className="error-text">
          {errors.category?.message}
        </p>
      </div>

      <div className="form-row">

       <div className="form-group">
          <label className="form-label">Price</label>

          <input
            type="number"
           className="form-input"
            {...register("price", {
              required: "Price Required",
              min: {
                value: 1,
                message:
                  "Price must be greater than 0"
              }
            })}
          />

          <p className="error-text">
            {errors.price?.message}
          </p>
        </div>

       <div className="form-group">
          <label className="form-label">Quantity</label>

          <input
            type="number"
           className="form-input"
            {...register("quantity", {
              required: "Quantity Required",
              min: {
                value: 0,
                message:
                  "Quantity cannot be negative"
              }
            })}
          />

          <p className="error-text">
            {errors.quantity?.message}
          </p>
        </div>

      </div>

      <div className="form-group">
       <label className="form-label">Status</label>

        <select
          className="form-select"
          {...register("status")}
        >
          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>
        </select>
      </div>

      <button
        disabled={loading}
       className="submit-btn"
      >
        {
          loading
            ? "Saving..."
            : "Save Product"
        }
      </button>

    </form>
  );
};

export default ProductForm;