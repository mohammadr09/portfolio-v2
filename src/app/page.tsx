import Navbar from "@/lib/components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="section-bg">
        <Navbar />
        <div className="flex flex-col text-center items-center justify-center min-h-[80vh] p-4">
          <h2 className="text-3xl fira text-sky-400 font-semibold">Hello--</h2>
          <h1 className="text-6xl ubuntu">
            I'm <strong><u className="">Mohammad</u></strong>.
          </h1>
          <p className="fira mt-3 text-lg">Junior Year High School Student @ Stuyvesant</p>
          <p className="fira mt-1.5 text-lg font-bold text-red-400">Web Development Freelancer | NextJS | Python | Java</p>
        </div>
      </div>
      <div className="mt-32 pb-100" id="about">
        <h2 className="text-sky-400 text-2xl text-center fira font-semibold">ABOUT ME</h2>
        <h1 className="text-4xl text-center ubuntu font-semibold">Allow me to introduce myself.</h1>
        <p className="ubuntu mt-4 text-lg text-center max-w-2xl mx-auto leading-8 text-gray-600">
          I'm a zealous web developer focused on developing user friendly and responsive sites. I have a strong passion
          to coding front and backend applications, and I am always eager to learn new technologies and frameworks.
          I strive to build websites that are not only functional but also visually appealing and easy to navigate.
        </p>

  <hr className="animated-gradient-hr" />
      </div>
    </div>
  );
}
