import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <header className="w-full z-10 shadow-sm sticky top-0 bg-white">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center py-4">
        <Link
          href="/"
          className="flex justify-center items-center font-bold text-4xl bg-gradient-to-tr from-blue-600 to-blue-400 text-transparent bg-clip-text"
        >
          oCars
        </Link>

        <CustomButton
          title="Nadim"
          btnType="button"
          containerStyles="text-blue-500 rounded-full border"
        />
      </nav>
    </header>
  );
}
