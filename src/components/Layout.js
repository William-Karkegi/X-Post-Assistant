import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <Head>
        <title>X Post Assistant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
