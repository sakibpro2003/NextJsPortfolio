import Banner from "@/components/shared/Banner/Banner";
import FeaturedProjects from "@/components/ui/FeaturedProjects";

const HomePage = () => {
  return (
    <div className="mt-10">
      <Banner></Banner>
      <FeaturedProjects></FeaturedProjects>
      {/* <h1 className="text-4xl text-center">Featured Project</h1> */}
    </div>
  );
};

export default HomePage;
