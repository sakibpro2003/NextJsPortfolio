import Image from "next/image";
import profileImage from "../../../assets/profile.jpg";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <>
      <div className="flex gap-12 mt-16  mx-auto w-10/12 items-center justify-stretch">
        <div>
          <h3 className="text-4xl">Hello, Its Me</h3>
          <h1 className="text-7xl mt-3">Sakib Prodhan</h1>
          <h3 className="text-4xl">
            Im a <span className="">Software Engineer</span>
          </h3>
          <div className="flex gap-10 mt-6 text-3xl text-green-700">
            <h3>
              <FaReact />
            </h3>
            <h3>
              <RiNextjsLine />
            </h3>
            <h3>
              <SiExpress />
            </h3>
            <h3>
              <SiMongodb />
            </h3>
          </div>
          <p className="mt-4">
            Im a fullstack software engineer in MERN stack Im a fullstack
            software engineer in MERN stackIm a fullstack software engineer in
            MERN staIm a fullstack software engineer in MERN stackIm a fullstack
            software engineer in MERN stackck
          </p>
          <Button className="mt-4">Download RESUME</Button>
        </div>
        <Image
          className="rounded-full"
          width={400}
          height={400}
          src={profileImage}
          alt=""
        ></Image>
      </div>
    </>
  );
};

export default Banner;
