import { Prompt } from "next/font/google";
import MenuForm from "@/components/menu-form";

const prompt = Prompt({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});  

export default function Home() {

  const cardStyles = "flex flex-col w-full p-8 text-center bg-gray-800/60 backdrop-blur-sm border border-white rounded-lg shadow-lg gap-3";

  return (
    <>
      <div className="flex flex-col items-center xl:items-end justify-items-center min-h-screen gap-8 p-8 pb-20 sm:p-20 xl:mr-20">
        <div className="flex flex-col w-full lg:w-3/4 xl:w-1/2 gap-8">

          <div className={cardStyles}>
            <h1 className={"text-3xl sm:text-4xl font-semibold text-white tracking-wide " + prompt.className}>Weekly Menu Creator</h1>
          </div>

          <div className={cardStyles}>
            <MenuForm />
          </div>
        </div>

        <footer className="place-self-center row-start-3 flex gap-6 flex-wrap items-center justify-center">
          Image by <a href="https://pixabay.com/users/merinthurasang77-5404727/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2325209">merinthurasang77</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2325209">Pixabay</a>
        </footer>
      </div>
    </>
  );
}
