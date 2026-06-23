const Product =
  require("../models/Product");

exports.getDashboard =
  async (req, res, next) => {

    try {

      const totalProducts =
        await Product.countDocuments();

      const categories =
        await Product.distinct(
          "category"
        );

      const today =
        new Date();

      today.setHours(
        0,
        0,
        0,
        0
      );

      const productsAddedToday =
        await Product.countDocuments({
          createdAt: {
            $gte: today
          }
        });

      res.status(200).json({
        success: true,
        data: {
          totalProducts,
          totalCategories:
            categories.length,
          productsAddedToday
        }
      });

    } catch (error) {
      next(error);
    }

  };