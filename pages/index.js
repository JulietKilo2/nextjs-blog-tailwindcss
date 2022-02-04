import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl">
        <p>Hello, I'm Jisub.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="text-xl pt-px">
        <h2 className="text-2xl my-4 leading-snug">Blog</h2>
        <ul className="list-none m-0 p-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="hover:underline text-blue-600">{title}</a>
              </Link>
              <br />
              <small className="text-lightText">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
