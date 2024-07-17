import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryById } from "../../redux/slice/categoriesSlice.js";

const Category = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryById(categoryId));
  }, [categoryId, dispatch]);

  const { categoryData, isLoading, isError, message } = useSelector(
    (state) => state.categories
  );

  const categoryTitle = categoryData?.category?.title;

  const categoryProducts = categoryData?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{message.message}</div>;
  }

  return (
    <div>
      <h1>Category {categoryId}</h1>
      <div>{categoryTitle}</div>

      {categoryProducts &&
        categoryProducts.map((product) => (
          <div key={product.id}>
            <div>{product.id}</div>
            <div>{product.title}</div>
            <div>{product.price}</div>
          </div>
        ))}
    </div>
  );
};

export default Category;
