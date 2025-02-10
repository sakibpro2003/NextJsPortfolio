// "use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const FeaturedProjects = async () => {
  const result = await fetch("http://localhost:3000/featured.json");
  const data = await result.json();
  console.log(data);
  return (
    <div className="mt-10 mx-auto">
      <div className="mx-auto text-center">
        <h1 className="text-4xl">Featured Projects</h1>
      </div>
      <div className="grid grid-cols-2 w-4/5 mx-auto gap-10 mt-10 text-center">
        {data.map((singleData) => (
          <Card key={singleData.id}>
            <CardHeader>
              <div className="mx-auto flex  justify-center">
                <Image
                  width={700}
                  height={200}
                  alt=""
                  src={singleData?.projectThumbnail}
                ></Image>
              </div>
              <CardTitle>{singleData.projectName}</CardTitle>
              <CardDescription>{singleData.shortDescription}</CardDescription>
            </CardHeader>
            <CardFooter className="mx-auto flex  justify-center">
              <Button>View</Button>
            </CardFooter>
          </Card>
        ))}
       
      </div>
    </div>
  );
};

export default FeaturedProjects;
