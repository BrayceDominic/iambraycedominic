import Client from "@/components/Client";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MyApproach from "@/components/MyApproach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavber";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-[#F5E6C8] dark:bg-[#2B2B2B] flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        {/* --- Hero Section Already Tan/Wood Styled --- */}
        <Hero />

        {/* --- Grid Section: optional, we can give subtle tan bg in light mode --- */}
        <div className="bg-[#F5E6C8] dark:bg-[#2B2B2B]">
          <Grid />
        </div>

        {/* --- Recent Projects Section --- */}
        <RecentProjects
          magicBtnUrl="/projects"
          magicBtntitle="View all"
          heading={
            <h1 className="text-3xl font-bold lg:text-4xl text-black dark:text-gray-300 text-center">
              Feel Free To Explore{" "}
              <span className="text-[#D2A679] dark:text-[#D2A679]">My Projects</span>
            </h1>
          }
        />

        {/* --- Client Section --- */}
        <div className="bg-[#F5E6C8] dark:bg-[#2B2B2B]">
          <Client />
        </div>

        {/* --- Experiences Section --- */}
        <div className="bg-[#F5E6C8] dark:bg-[#2B2B2B]">
          <Experiences />
        </div>

        {/* --- My Approach Section --- */}
        <div className="bg-[#F5E6C8] dark:bg-[#2B2B2B]">
          <MyApproach />
        </div>

        {/* --- Footer Section --- */}
        <Footer />
      </div>
    </main>
  );
}
