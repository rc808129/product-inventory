import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import MainLayout
from "../layout/MainLayout";

import PageHeader
from "../common/PageHeader";

import ProductFilters
from "../products/ProductFilters";

import ProductTable
from "../products/ProductTable";

import Pagination
from "../common/Pagination";

import ConfirmModal
from "../common/ConfirmModal";

import {
  getProducts,
  deleteProduct
}
from "../services/productService";

function Products() {

  const navigate =
    useNavigate();

  const [products,setProducts] =
    useState([]);

  const [page,setPage] =
    useState(1);

  const [totalPages,
  setTotalPages] =
    useState(1);

  const [search,setSearch] =
    useState("");

  const [category,
  setCategory] =
    useState("");

  const [status,
  setStatus] =
    useState("");

  const [sort,
  setSort] =
    useState("");

  const [selectedId,
  setSelectedId] =
    useState(null);

  useEffect(()=>{

    loadProducts();

  },[
    page,
    search,
    category,
    status,
    sort
  ]);

  const loadProducts =
  async()=>{

    const response =
    await getProducts({

      page,
      search,
      category,
      status,
      sort

    });

    setProducts(
      response.data.products
    );

    setTotalPages(
      response.data.totalPages
    );
  };

  const confirmDelete =
  async()=>{

    await deleteProduct(
      selectedId
    );

    setSelectedId(null);

    loadProducts();
  };

  return (

    <MainLayout>

      <PageHeader
        title="Products"
        buttonText="Add Product"
        onClick={()=>
          navigate(
            "/products/create"
          )
        }
      />

      <ProductFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        sort={sort}
        setSort={setSort}
      />

      <ProductTable
        products={products}
        onDelete={
          setSelectedId
        }
      />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      <ConfirmModal
        open={!!selectedId}
        title="Delete Product?"
        onConfirm={
          confirmDelete
        }
        onClose={()=>
          setSelectedId(null)
        }
      />

    </MainLayout>

  );
}

export default Products;