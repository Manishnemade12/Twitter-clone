import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const POST_PER_PAGE = 2;

const CardList = ({ posts, count, page }) => {
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

// Use getServerSideProps for server-side rendering
export async function getServerSideProps(context) {
  const { query } = context;
  const page = parseInt(query.page) || 1;
  const cat = query.cat || "";

  try {
    const res = await fetch(
      `http://localhost:3001/api/post?page=${page}&cat=${cat}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const { posts, count } = await res.json();
    return {
      props: {
        posts,
        count,
        page,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        posts: [],
        count: 0,
        page,
      },
    };
  }
}

export default CardList;
