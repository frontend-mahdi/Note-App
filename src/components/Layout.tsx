import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

export interface LayoutType {
  children: ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  const router = useRouter();
  const redirectLink = router.pathname !== "/newNote" ? "/newNote" : "/";
  const title = router.pathname === "/newNote" ? "new note" : "notes";
  return (
    <>
      <Head>
        <title>{"Note App" + " | " + title}</title>
      </Head>
      <div className="py-6">
        {children}
        <Link href={redirectLink}>
          <div className="fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 p-4 rounded-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              color="#fff"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-5 h-5 transition-transform ${
                redirectLink !== "/newNote" && "-rotate-45"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="fixed bottom-4 left-4 bg-gray-800 hover:bg-gray-700 p-4 rounded-xl text-sm cursor-pointer">
            Enable Notification
          </div>
        </Link>
      </div>
    </>
  );
};

export default Layout;
