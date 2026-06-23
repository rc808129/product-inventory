require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

const helmet =
require("helmet");

const morgan =
require("morgan");

const cookieParser =
require("cookie-parser");

const connectDB =
require("./config/db");

const authRoutes =
require("./routes/authRoutes");

const dashboardRoutes =
require("./routes/dashboardRoutes");

const productRoutes =
require("./routes/productRoutes");

const errorMiddleware =
require("./middlewares/errorMiddleware");

const app = express();

connectDB();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(cookieParser());

app.get(
 "/api/health",
 (req,res)=>{
  res.json({
   success:true,
   message:"API Running"
  });
 }
);

app.use(
 "/api/auth",
 authRoutes
);

app.use(
 "/api/dashboard",
 dashboardRoutes
);

app.use(
 "/api/products",
 productRoutes
);

app.use(
 errorMiddleware
);

const PORT =
process.env.PORT || 5000;

app.listen(
 PORT,
 ()=>{
  console.log(
   `Server Running On ${PORT}`
  );
 }
);