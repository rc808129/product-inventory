const ProductFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  sort,
  setSort
}) => {

  return (

   <div className="filters-container">

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
       className="filter-input"
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        className="filter-input"
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="filter-select"
      >
        <option value="">
          All Status
        </option>

        <option value="Active">
          Active
        </option>

        <option value="Inactive">
          Inactive
        </option>
      </select>

      <select
        value={sort}
        onChange={(e) =>
          setSort(e.target.value)
        }
      className="filter-select"
      >

        <option value="">
          Price Sort
        </option>

        <option value="asc">
          Low → High
        </option>

        <option value="desc">
          High → Low
        </option>

      </select>

    </div>
  );
};

export default ProductFilters;