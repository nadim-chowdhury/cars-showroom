import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <header className="w-full z-10 shadow sticky top-0 bg-white">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link
          href="/"
          className="flex justify-center items-center font-bold text-2xl sm:text-4xl"
        >
          oCars
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white"
        />
      </nav>
    </header>
  );
}
