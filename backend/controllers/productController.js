const Product =
  require("../models/Product");

const ApiResponse =
  require("../utils/ApiResponse");


exports.createProduct =
async (req,res,next)=>{

try{

 const product =
 await Product.create(req.body);

 return ApiResponse.success(
   res,
   "Product created successfully",
   product,
   201
 );

}catch(error){
 next(error);
}
};


exports.getProducts =
async (req,res,next)=>{

try{

 let {
   page = 1,
   limit = 10,
   search,
   category,
   status,
   sort
 } = req.query;

 page = Number(page);
 limit = Number(limit);

 let filter = {};

 if(search){

   filter.productName = {
     $regex: search,
     $options: "i"
   };

 }

 if(category){

   filter.category = category;

 }

 if(status){

   filter.status = status;

 }

 let query =
 Product.find(filter);

 if(sort){

   query = query.sort({
     price:
       sort === "asc"
       ? 1
       : -1
   });

 }

 const total =
 await Product.countDocuments(
   filter
 );

 const products =
 await query
   .skip((page-1)*limit)
   .limit(limit);

 return res.status(200).json({

   success:true,

   data:{
     products,
     currentPage:page,
     totalPages:
       Math.ceil(total/limit),
     totalRecords:total
   }

 });

}catch(error){
 next(error);
}
};


exports.getProductById =
async(req,res,next)=>{

try{

 const product =
 await Product.findById(
   req.params.id
 );

 if(!product){

   return ApiResponse.error(
     res,
     "Product not found",
     404
   );

 }

 return ApiResponse.success(
   res,
   "Product fetched",
   product
 );

}catch(error){
 next(error);
}
};

exports.updateProduct =
async(req,res,next)=>{

try{

 const product =
 await Product.findByIdAndUpdate(

   req.params.id,

   req.body,

   {
     new:true,
     runValidators:true
   }

 );

 if(!product){

   return ApiResponse.error(
     res,
     "Product not found",
     404
   );

 }

 return ApiResponse.success(
   res,
   "Product updated successfully",
   product
 );

}catch(error){
 next(error);
}
};


exports.deleteProduct =
async(req,res,next)=>{

try{

 const product =
 await Product.findByIdAndDelete(
   req.params.id
 );

 if(!product){

   return ApiResponse.error(
     res,
     "Product not found",
     404
   );

 }

 return ApiResponse.success(
   res,
   "Product deleted successfully"
 );

}catch(error){
 next(error);
}
};