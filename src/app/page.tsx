import { Prompt } from "next/font/google";
import MenuForm from "@/components/menu-form";
import { appSettings } from "../../app-settings";
import { Card, CardContent } from "@/components/card";

const prompt = Prompt({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {

  return (
    <>
      <div className="flex flex-col items-center xl:items-end justify-items-center min-h-screen gap-8 p-8 pb-20 sm:p-20 xl:mr-20">
        <div className="flex flex-col w-full lg:w-3/4 xl:w-1/2 gap-8">

          <Card>
            <CardContent>
              <h1 className={"text-3xl sm:text-4xl font-semibold text-white tracking-wide " + prompt.className}>{appSettings.projectTitle}</h1>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <MenuForm />
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
}
