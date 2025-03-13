import { Prompt } from "next/font/google";
import MenuForm from "@/components/menu-form";
import { appSettings } from "../../app-settings";
import Link from "next/link";
import dayjs from "dayjs";
import { ArrowCircleDown, ArrowForwardIos } from "@mui/icons-material";

const prompt = Prompt({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {

  const footer = <>
    <span className="w-full">
      &copy; {dayjs().year()} <Link href={appSettings.author.url} target="_blank">{appSettings.author.name}</Link>. All rights reserved.
    </span>
    <span className="w-full text-sm">
      Image by <Link href="https://pixabay.com/users/merinthurasang77-5404727/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2325209" target="_blank">merinthurasang77</Link> from <Link href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2325209" target="_blank">Pixabay</Link>
    </span>
  </>;

  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">

        <div className="order-2 md:order-1 flex z-10 w-full md:w-2/5 h-screen bg-zinc-800 overflow-hidden">
          <div className="flex flex-col w-full p-8 pb-6 md:p-16 gap-6 md:gap-8">
            <div className="flex flex-col gap-1 text-white">
              <h2 id="menu-creator" className={"text-2xl sm:text-4xl font-semibold tracking-normal md:tracking-wide " + prompt.className}>Build Your Menu <ArrowForwardIos fontSize="medium" /></h2>
              <span className={"md:text-lg " + prompt.className}>Enter your meals to organize your week.</span>
            </div>
            <MenuForm />

            <div className="order-3 flex md:hidden flex-col text-center w-full text-gray-500">
              {footer}
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex w-full md:w-3/5 h-screen overflow-hidden inset-shadow-sm inset-shadow-zinc-950">
          <div className={"flex items-end w-full h-full pb-2 text-white " + prompt.className}>

            <div className="flex flex-col w-full">
              <div className="flex flex-col h-full m-4 md:ml-12 mb-36 md:mb-54 gap-4" style={{ textShadow: "0 0 32px black" }}>
                <h1 className="text-6xl font-semibold leading-16">Meal Planning<br />Made Simple</h1>
                <span className="text-2xl">Take the stress out of dinner by planning ahead.</span>
              </div>

              <div className="md:hidden w-full text-center mb-8">
                <Link href={"#menu-creator"}>
                  <ArrowCircleDown sx={{ fontSize: 54 }} className="animate-bounce" />
                </Link>
              </div>

              <div className="hidden md:flex flex-col text-center w-full text-gray-400">
                {footer}
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
