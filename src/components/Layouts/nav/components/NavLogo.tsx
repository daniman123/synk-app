import Link from "next/link";

const NavLogo = ({ expandSideBar }: { expandSideBar: () => void }) => {
  return (
    <Link href="/">
      <button
        id="logo"
        className="opacity-95 hover:opacity-100 cursor-pointer text-center text-2xl"
        onClick={expandSideBar}
      >
        SYNK
      </button>
    </Link>
  );
};

export default NavLogo;
