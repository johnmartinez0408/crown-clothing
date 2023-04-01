import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Categories = ({ categoriesList }) => {
  return (
    <div className="categories-container">
      {categoriesList.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
