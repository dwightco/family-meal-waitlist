import Image from "next/image";
import { FmLogoIcon } from "@/components/Logos";

export default function Home() {
  return (
    <main className="w-full min-h-[100dvh] h-full flex flex-col items-center justify-start md:justify-center">
      <section className="w-11/12 md:max-w-[400px] lg:max-w-[500px] flex flex-col gap-6 md:gap-8">
        <FmLogoIcon />
        <h1 className="font-display text-7xl lg:text-9xl">
          Thanks for Joining our Waitlist!
        </h1>
        <div className="text-md lg:text-xl">
          {
            "We'll send you an email when we're close to launch. If you know anyone who might want to sell their food with us, we'd appreciate it if you invite them over. 😁"
          }
        </div>
        <form
          action="https://familymeal.us10.list-manage.com/subscribe/post"
          method="POST"
        >
          <input
            type="hidden"
            name="u"
            value="9c1d49c16b4f29b4d8f5da1b0"
          />
          <input
            type="hidden"
            name="id"
            value="ed0b3e60bb"
          />
        </form>
      </section>
    </main>
  );
}
