import { footerLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="font-bold">oCars</h2>
          <p className="text-base text-gray-700">
            &copy; {new Date().getFullYear()} Developed By Nadim Chowdhury
          </p>

          <div className="footer__copyrights-link">
            <Link href="/">About Us</Link>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>

        <div className="footer__links md:text-center">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
