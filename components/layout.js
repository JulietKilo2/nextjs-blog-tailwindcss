import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/profile.png";

const name = "Jisub";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className="max-w-xl px-4 mt-12 mx-auto mb-24 leading-relaxed text-[18px]">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src={profilePic}
              className="block rounded-l-full rounded-r-full max-w-[100%]"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="text-4xl leading-tight font-extrabold tracking-tighter my-4">
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/profile.png"
                  className="block rounded-l-full rounded-r-full max-w-[100%]"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-2xl leading-normal my-4">
              <Link href="/">
                <a className="text-inherit">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/">
            <a className="hover:underline text-blue-600">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
