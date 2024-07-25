import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <p>
        Explore our Product Categories:
      </p>
      <ul>
        <li><a href="/products/electronics">electronics</a></li>
        <li><a href="/products/clothing">clothing</a></li>
      </ul>
    </div>
  )
}
