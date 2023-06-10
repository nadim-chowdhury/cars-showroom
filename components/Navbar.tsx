import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <header className="w-full z-10 shadow-sm sticky top-0 bg-white">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center py-4">
        <Link
          href="/"
          className="flex justify-center items-center font-bold text-3xl sm:text-4xl"
        >
          oCars
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-blue-100"
        />
      </nav>
    </header>
  );
}
