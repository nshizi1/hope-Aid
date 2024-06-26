import Hero from "../images/hero.jpg";
import Goal from "../images/goal.jpg";
import outOne from "../images/outOne.jpg";
import outTwo from "../images/outTwo.jpg";
import outThree from "../images/outThree.jpg";
import divOne from "../images/divOne.jpg";
import divTwo from "../images/divTwo.jpg";
import logoOne from "../images/logoOne.png";
import logoTwo from "../images/logoTwo.png";
import logoThree from "../images/logoThree.png";
import logoFour from "../images/logoFour.png";
import teamOne from "../images/teamOne.jpg";
import teamTwo from "../images/teamTwo.jpg";
import teamThree from "../images/teamThree.jpg";
import teamFour from "../images/teamFour.jpg";

function Home() {
  return (
    <main>
      <section className="h-dvh w-full overflow-hidden relative" id="hero">
        <img
          className="w-full h-full object-cover brightness-50 grayscale"
          src={Hero}
          alt="heroImage"
        />
        <div className="absolute h-full top-0 text-slate-100 w-4/5  flex flex-col justify-center px-10p gap-3">
          <h1 className="text-4xl font-bold">
            Join us in making the difference.
          </h1>
          <p className="font-semibold">
            Hello, it is really a pain to be followed. Who, when.
          </p>
          <a href="#">
            <button className="text-slate-100 bg-amber-500 py-2 px-6 rounded-full">
              Donate Now
            </button>
          </a>
        </div>
      </section>
      <section id="mission">
        <div className="title mt-4 text-slate-700 text-center">
          <h1 className="w-full text-4xl font-bold">Our Mission</h1>
          <p className="text-slate-800 font-medium">
            Our mission is succinctly captured in three pillars
          </p>
        </div>
        <div className="px-5p grid grid-cols-3 gap-4 mt-6 mb-10">
          <div className="text-center flex flex-col gap-2">
            <i className="text-4xl text-amber-500 fa-solid fa-chart-simple"></i>
            <h1 className="text-xl text-slate-700 font-semibold">We fund</h1>
            <p>
              The company itself is a very successful company. Wherefore he is
              assailed by the things to which flight is an option, except that
              the mind should assume something convenient, or follow the
              troubles which some one here rejects.
            </p>
          </div>
          <div className="text-center flex flex-col gap-2">
            <i className="text-4xl text-emerald-500 fa-solid fa-chart-simple"></i>
            <h1 className="text-xl text-slate-700 font-semibold">We fund</h1>
            <p>
              The company itself is a very successful company. Wherefore he is
              assailed by the things to which flight is an option, except that
              the mind should assume something convenient, or follow the
              troubles which some one here rejects.
            </p>
          </div>
          <div className="text-center flex flex-col gap-2">
            <i className="text-4xl text-sky-500 fa-solid fa-chart-simple"></i>
            <h1 className="text-xl text-slate-700 font-semibold">We fund</h1>
            <p>
              The company itself is a very successful company. Wherefore he is
              assailed by the things to which flight is an option, except that
              the mind should assume something convenient, or follow the
              troubles which some one here rejects.
            </p>
          </div>
        </div>
      </section>
      <section className="px-5p grid grid-cols-2 gap-8" id="goals">
        <div>
          <img className="h-4/5" src={Goal} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-800 capitalize">
            Our goals
          </h1>
          <p className="text-amber-600 font-semibold mt-5">
            Hello, it is really a pain to be followed. Who, when.
          </p>
          <p className="mt-5">
            The company itself is a very successful company. Wherefore he is
            assailed by the things to which flight is an option, except that the
            mind should assume something convenient, or follow the troubles
            which some one here rejects.
          </p>
          <p className="mt-5">
            The company itself is a very successful company. Wherefore he is
            assailed by the things to which flight is an option, except that the
            mind should assume something convenient, or follow the troubles
            which some one here rejects.
          </p>
          <p className="mt-5">
            The company itself is a very successful company. Wherefore he is
            assailed by the things to which flight is an option, except that the
            mind should assume something convenient, or follow the troubles
            which some one here rejects.
          </p>
          <p className="mt-5">
            The company itself is a very successful company. Wherefore he is
            assailed by the things to which flight is an option, except that the
            mind should assume something convenient, or follow the troubles
            which some one here rejects.
          </p>
        </div>
      </section>
      <section className="px-5p" id="outReach">
        <div className="title">
          <h1 className="mb-6 text-slate-700 text-2xl font-bold">
            Our Outreach
          </h1>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <img
                className="w-full aspect-1/5 object-cover"
                src={outOne}
                alt="outImage"
              />
              <p className="mt-4 font-semibold text-lg text-slate-600">
                Hello, it is really a pain to be followed. Who, when.
              </p>
              <p className="text-slate-800">
                The company itself is a very successful company. Wherefore he is
                assailed by the things to which flight is an option, except that
                the mind should assume something convenient, or follow the
                troubles which some one here rejects.
              </p>
              <div className="p-4 bg-slate-100 rounded-lg mt-6">
                <div className="h-4 bg-slate-300 rounded-md">
                  <div className="h-full w-4/5 bg-amber-500 rounded-md"></div>
                </div>
                <div className="text-sm flex justify-between mt-3 font-semibold">
                  <div>
                    <p>Donations</p>
                    <p>$8000</p>
                  </div>
                  <div>
                    <p>Target</p>
                    <p>$10000</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-full aspect-1/5 object-cover"
                src={outTwo}
                alt="outImage"
              />
              <p className="mt-4 font-semibold text-lg text-slate-600">
                Hello, it is really a pain to be followed. Who, when.
              </p>
              <p className="text-slate-800">
                The company itself is a very successful company. Wherefore he is
                assailed by the things to which flight is an option, except that
                the mind should assume something convenient, or follow the
                troubles which some one here rejects.
              </p>
              <div className="p-4 bg-slate-100 rounded-lg mt-6">
                <div className="h-4 bg-slate-300 rounded-md">
                  <div className="h-full w-2/5 bg-amber-500 rounded-md"></div>
                </div>
                <div className="text-sm flex justify-between mt-3 font-semibold">
                  <div>
                    <p>Donations</p>
                    <p>$4000</p>
                  </div>
                  <div>
                    <p>Target</p>
                    <p>$10000</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-full aspect-1/5 object-cover"
                src={outThree}
                alt="outImage"
              />
              <p className="mt-4 font-semibold text-lg text-slate-600">
                Hello, it is really a pain to be followed. Who, when.
              </p>
              <p className="text-slate-800">
                The company itself is a very successful company. Wherefore he is
                assailed by the things to which flight is an option, except that
                the mind should assume something convenient, or follow the
                troubles which some one here rejects.
              </p>
              <div className="p-4 bg-slate-100 rounded-lg mt-6">
                <div className="h-4 bg-slate-300 rounded-md">
                  <div className="h-full w-3/5 bg-amber-500 rounded-md"></div>
                </div>
                <div className="text-sm flex justify-between mt-3 font-semibold">
                  <div>
                    <p>Donations</p>
                    <p>$6000</p>
                  </div>
                  <div>
                    <p>Target</p>
                    <p>$10000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="division" className="px-5p grid grid-cols-2 gap-4 mt-10">
        <div className="relative">
          <img
            className="w-full aspect-1/5 object-cover brightness-25"
            src={divOne}
            alt=""
          />
          <div className="absolute top-0 px-5p w-35/5 h-full flex flex-col text-slate-100 justify-center">
            <p className="font-bold text-2xl mb-3">
              Advancing women&apos;s right:
            </p>
            <p>
              The company itself is a very successful company. Wherefore he is
              assailed by the things to which flight is an option, except that
              the mind should assume something convenient, or follow the
              troubles which some one here rejects.
            </p>
            <a href="#">
              <button className="bg-amber-500 transition ease duration-500 hover:bg-amber-400 py-2 px-6 rounded-3xl mt-3">
                Donate Now
              </button>
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full aspect-1/5 object-cover brightness-25"
            src={divTwo}
            alt=""
          />
          <div className="absolute top-0 px-5p w-35/5 h-full flex flex-col text-slate-100 justify-center">
            <p className="font-bold text-2xl mb-3">
              Advancing women&apos;s right:
            </p>
            <p>
              The company itself is a very successful company. Wherefore he is
              assailed by the things to which flight is an option, except that
              the mind should assume something convenient, or follow the
              troubles which some one here rejects.
            </p>
            <a href="#">
              <button className="bg-amber-500 transition ease duration-500 hover:bg-amber-400 py-2 px-6 rounded-3xl mt-3">
                Donate Now
              </button>
            </a>
          </div>
        </div>
      </section>
      <section id="brands" className="px-5p grid grid-cols-4 gap-4 mt-10">
        <div className="flex justify-center">
          <img className="h-24  grayscale" src={logoOne} alt="logo" />
        </div>
        <div className="flex justify-center">
          <img className="h-24  grayscale" src={logoTwo} alt="logo" />
        </div>
        <div className="flex justify-center">
          <img className="h-24  grayscale" src={logoThree} alt="logo" />
        </div>
        <div className="flex justify-center">
          <img className="h-24  grayscale" src={logoFour} alt="logo" />
        </div>
      </section>
      <section id="team" className="px-5p py-10 bg-emerald-100 mt-10 flex flex-col gap-10 items-center justify-center">
        <h1 className="font-bold text-2xl text-slate-700">Meet Our Team</h1>
        <div className="flex gap-10">
          <img className="w-16 h-16 rounded-full" src={teamOne} alt="teamImage" />
          <img className="w-16 h-16 rounded-full" src={teamTwo} alt="teamImage" />
          <img className="w-16 h-16 rounded-full" src={teamThree} alt="teamImage" />
          <img className="w-16 h-16 rounded-full" src={teamFour} alt="teamImage" />
        </div>
        <p className="w-3/5 text-center text-slate-600">The company itself is a very successful company. Wherefore he is assailed by the things to which flight is an option, except that the mind should assume something convenient, or follow the troubles which some one here rejects.</p>
      </section>
    </main>
  );
}

export default Home;
