import Link from "next/link";
import Image from "next/image";
import Button from "../atoms/Button";

const PrimaryNavigation = () => {
  const userData = {
    name: "Jane Doe",
    email: "envkt@example.com",
    password: "password",
    role: "admin",
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#FFFFFF] p-3">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
        <ul className="lg:flex-grow pl-20 text-[#843C74] hover:text-[#413c84]">
          <Link className="hyperlink" href="/">
            Visi Kami
          </Link>
          <Link className="hyperlink" href="/about">
            Produk Kami
          </Link>
        </ul>
      </div>
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Image
            // loader={myLoader}
            src="/images/LOGO_SEHJIRA_(1)_1.png"
            alt="image"
            width={81}
            height={87}
          />
        </span>
      </div>
      <div className="w-full block flex-grow lg:w-auto lg:flex lg:items-center">
        <ul className="flex lg:flex-grow justify-end pr-16 text-[#843C74] hover:text-[#413c84]">
          <Link className="hyperlink" href="/">
            Kedai Kami
          </Link>
          <Link className="hyperlink" href="/about">
            Tentang Kami
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default PrimaryNavigation;
