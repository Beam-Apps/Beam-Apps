import Header from "./Header";
import Footer from "./Footer";
import styles from "./Home.module.scss";
import { Card } from "./Card";
import { CategoryButton } from "./CategoryButton";
import cn from "classnames";
import { useTheme } from "../context/ThemeContext";

const Home = ({ links, selectedCategory, handleCategoryChange }) => {
  const categories = ["All", ...new Set(links.map((link) => link.category))];
  const { theme } = useTheme();
  console.log("Received links:", links);

  return (
    <div>
      <Header />
      <div
        className={styles.container}
        style={{
          margin: "0px",
          padding: "10px",
        }}
      >
        <span
          className={cn(styles.heading, {
            [styles.dark]: theme === "dark",
          })}
        >
          Categories:{" "}
        </span>
      </div>
      <div className={styles.container} style={{ margin: "0px" }}>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            active={selectedCategory === category}
            category={category}
            onClick={() => handleCategoryChange(category)}
          />
        ))}
      </div>
      {/* Separate this in 2. Hero */}
      <div className={styles.cardContainer}>
        {links
          .filter(
            (link) =>
              selectedCategory === "All" || selectedCategory === link.category
          )
          .map((link) => (
            <Card key={link.name} {...link} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
