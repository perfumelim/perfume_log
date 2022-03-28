import navlinks from "data/navlinks";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <a
            className={
              router.pathname === nav.link
                ? "mr-5 font-semibold"
                : "mr-5 font-normal"
            }
          >
            {nav.title}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
