const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../middlewares/authMiddleware");

const validateRequest =
require("../middlewares/validateRequest");

const {
 productValidation
}
=
require(
 "../validations/productValidation"
);

const {

 createProduct,
 getProducts,
 getProductById,
 updateProduct,
 deleteProduct

}
=
require(
 "../controllers/productController"
);

router.post(
 "/",
 authMiddleware,
 productValidation,
 validateRequest,
 createProduct
);

router.get(
 "/",
 authMiddleware,
 getProducts
);

router.get(
 "/:id",
 authMiddleware,
 getProductById
);

router.put(
 "/:id",
 authMiddleware,
 productValidation,
 validateRequest,
 updateProduct
);

router.delete(
 "/:id",
 authMiddleware,
 deleteProduct
);

module.exports = router;