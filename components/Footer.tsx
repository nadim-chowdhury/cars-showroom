export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 dm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <h2>oCars</h2>
          <p className="text-base text-gray-700">
            &copy; {new Date().getFullYear()} Developed By Nadim Chowdhury
          </p>
        </div>

        <div className="footer__links">

        </div>
      </div>
    </footer>
  );
}
