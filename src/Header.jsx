export default function Header() {
  return (
    <>
      <nav className="py-6 md:py-8 fixed top-0 w-full bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <h1 className=" font-bold text-slate-100 text-3xl px-2 py-1 rounded-lg  hover:bg-[#473d26]">
              TaskAdd
            </h1>
          </a>
        </div>
      </nav>
    </>
  );
}
