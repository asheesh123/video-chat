import Head from "next/head";
import styles from "@/pages/index.module.css";
import dynamic from "next/dynamic";

const VideoChat = dynamic(() => import("@/components/VideoChat/VideoChat"), {
  loading: () => <p>Loading chat information...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Video Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideoChat />
    </div>
  );
}
