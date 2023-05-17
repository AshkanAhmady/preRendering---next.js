import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <Link href="/users">users page:: (use getStaticProps)</Link>
      <hr />
      <Link href="/episodes">
        episodes page:: (use getStaticPaths-fallback: true)
      </Link>
      <hr />
      <Link href="/products">
        products page:: (use incremental static regeneration)
      </Link>
      <hr />
      <Link href="/blogs">blogs page:: (use getServerSideProps)</Link>
      <hr />
      <Link href="/profile">
        profile page:: (clientSideDataFetching, dont need SEO)
      </Link>
      <hr />
      <Link href="/profileSWR">
        profileSWR page:: (clientSideDataFetching, useSWR)
      </Link>
    </div>
  );
}
