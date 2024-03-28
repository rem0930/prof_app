import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/ProfileImageList');
  };

  return (
    <div>
      <h1>プロフィール画像を設定しよう</h1>
      <button onClick={handleButtonClick}>プロフィール画像を選択</button>
    </div>
  );
};