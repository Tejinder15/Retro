import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Categories.module.css";
const Categories = () => {
  const [category, setCategory] = useState([]);

  const loadCategory = async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategory(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => loadCategory(), []);
  return (
    <section className={styles.category_section}>
      <h2 className={styles.section_heading}>Categories</h2>
      <div className={styles.category_container}>
        {category.map((item) => (
          <div className={styles.category_col} key={item._id}>
            <img
              src={item.image}
              alt={item.categoryName}
              className={styles.category_pic}
            />
            <div className={styles.after}>{item.categoryName}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
