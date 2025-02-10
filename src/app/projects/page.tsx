import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import projectThumbnail from "../../assets/banner-img.png";

const Projects = () => {
  return (
    <div className="grid grid-cols-2 w-4/5 mx-auto gap-10 mt-10 text-center">
      <Card>
        <CardHeader>
          <div className="mx-auto flex  justify-center">
            <Image
              width={700}
              height={200}
              alt=""
              src={projectThumbnail}
            ></Image>
          </div>
          <CardTitle>Car Doc</CardTitle>
          <CardDescription>Card DescriptionclassNam sjaflksjdklf jsklf jlkasjfoisdah foi sjadifj aslk;fj lask jflkasdj flksj flk s hfajsdlkfj alsjf klsaj fklj sdalkfjoiwejfiodsjlfk jalkfj dl;sjf</CardDescription>
        </CardHeader>
        <CardFooter className="mx-auto flex  justify-center">
          <Button>View</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="mx-auto flex  justify-center">
            <Image
              width={700}
              height={200}
              alt=""
              src={projectThumbnail}
            ></Image>
          </div>
          <CardTitle>Car Doc</CardTitle>
          <CardDescription>Card DescriptionclassNam sjaflksjdklf jsklf jlkasjfoisdah foi sjadifj aslk;fj lask jflkasdj flksj flk s hfajsdlkfj alsjf klsaj fklj sdalkfjoiwejfiodsjlfk jalkfj dl;sjf</CardDescription>
        </CardHeader>
        <CardFooter className="mx-auto flex  justify-center">
          <Button>View</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="mx-auto flex  justify-center">
            <Image
              width={700}
              height={200}
              alt=""
              src={projectThumbnail}
            ></Image>
          </div>
          <CardTitle>Car Doc</CardTitle>
          <CardDescription>Card DescriptionclassNam sjaflksjdklf jsklf jlkasjfoisdah foi sjadifj aslk;fj lask jflkasdj flksj flk s hfajsdlkfj alsjf klsaj fklj sdalkfjoiwejfiodsjlfk jalkfj dl;sjf</CardDescription>
        </CardHeader>
        <CardFooter className="mx-auto flex  justify-center">
          <Button>View</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="mx-auto flex  justify-center">
            <Image
              width={700}
              height={200}
              alt=""
              src={projectThumbnail}
            ></Image>
          </div>
          <CardTitle>Car Doc</CardTitle>
          <CardDescription>Card DescriptionclassNam sjaflksjdklf jsklf jlkasjfoisdah foi sjadifj aslk;fj lask jflkasdj flksj flk s hfajsdlkfj alsjf klsaj fklj sdalkfjoiwejfiodsjlfk jalkfj dl;sjf</CardDescription>
        </CardHeader>
        <CardFooter className="mx-auto flex  justify-center">
          <Button>View</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Projects;
