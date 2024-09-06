// categoryList.js
import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Server-side rendering with getServerSideProps
export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3001/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { data: [] } }; // handle error gracefully
  }
}

export default CategoryList;
