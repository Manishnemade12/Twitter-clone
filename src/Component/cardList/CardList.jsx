import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const POST_PER_PAGE = 2;

const CardList = ({ posts, count, page }) => {
  const hasPrev = page > 1;
  const hasNext = page * POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.length > 0 ? (
          posts.map((item) => <Card item={item} key={item._id} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query, req } = context;
  const page = parseInt(query.page) || 1;
  const cat = query.cat || "";

  const baseUrl = req ? `http://${req.headers.host}` : '';

  try {
    const res = await fetch(`${baseUrl}/api/post?page=${page}&cat=${cat}`, {
      cache: "no-store",
    });
    console.log(res)

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
