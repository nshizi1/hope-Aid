import { Link, NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
    <p className="text-center py-3 bg-amber-100 text-slate-700 font-semibold">You&apos;re all welcome!</p>
    <header className="sticky top-0 z-10 flex justify-between bg-amber-50 py-4 px-5p">
      <h2 className="font-bold text-xl text-amber-900">Hope Aid</h2>
      <div className="flex gap-9">
        <div className="flex gap-5">
          <Link className="text-slate-600 font-semibold" to="/">Home</Link>
          <NavLink className="text-slate-600 font-semibold" to="about">About</NavLink>
          <NavLink className="text-slate-600 font-semibold" to="work">Our work</NavLink>
          <NavLink className="text-slate-600 font-semibold" to="projects">Projects</NavLink>
          <NavLink className="text-slate-600 font-semibold" to="contact">Contact</NavLink>
          <NavLink className="text-slate-600 font-semibold" to="About">About us</NavLink>
        </div>
        <div>
          <a className="bg-amber-500 py-2 hover:bg-amber-400 transition ease duration-500 px-6 text-slate-100 rounded-full" href="https://www.linkedin.com/in/hope-aid/">Join Us Now</a>
        </div>
      </div>
    </header>
    </>
  );
}

export default Nav;
