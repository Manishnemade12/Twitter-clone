import Link from "next/link";
import styles from "./homepage.module.css";
 import Featured from "@/Component/featured/featured";
// import CategoryList from "@/Component/categoryList/CategoryList";
// import CategoryList from "@/Component/categoryList/CategoryList";
// import Featured from "@/Component/featured/featured";
// import CardList from "@/Component/cardList/CardList";
// import Menu from "@/Component/Menu/Menu";


export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.containermain}>
        <Featured />
      {/* <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu /> 
      </div>  */}
    </div>
  );
}