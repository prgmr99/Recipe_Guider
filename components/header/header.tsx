import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Piece
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

// Image 태그를 사용할 때는 .src를 제거하여 사용한다.

// use client를 추가하면 잘 동작하지만, 명심해야 할 점이 있다.
// 되도록이면 use client를 컴포넌트 트리의 최하단에 위치시키는 것이 좋다.
// 서버 컴포넌트의 이점을 잃지 않기 위해서이다.
