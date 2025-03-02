import MenuForm from "@/components/menu-form";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <MenuForm />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Image by <a href="https://pixabay.com/users/merinthurasang77-5404727/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2325209">merinthurasang77</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2325209">Pixabay</a>
      </footer>
    </div>
  );
}
