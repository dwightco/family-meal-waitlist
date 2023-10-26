import Image from "next/image";
import HeaderMobileImage from "@/assets/fm-header-mobile.webp";
import HeaderLeftImage from "@/assets/fm-header-left.webp";
import HeaderRightImage from "@/assets/fm-header-right.webp";
import { FmLogoIcon } from "@/components/Logos";

export default function Home() {
  return (
    <main className="w-full min-h-[100dvh] h-full flex flex-col items-center justify-start md:justify-center">
      {/* Desktop Images */}
      <div className="hidden md:block">
        <div className="-z-10 absolute top-1/2 -translate-y-1/2 -left-1/2 w-full md:h-[500px] md:min-h-[500px]">
          <Image
            className="object-scale-down object-right-top w-full h-full md:-translate-x-[200px] lg:-translate-x-[280px] lg:w-[1000px]"
            src={HeaderLeftImage}
            alt="family-meal-header-left"
            fill
            sizes="1000px"
          />
        </div>
        <div className="-z-10 absolute top-1/2 -translate-y-1/2 -right-1/2 w-full md:h-[500px] md:min-h-[500px]">
          <Image
            className="object-scale-down object-left-top w-full h-full md:translate-x-[200px] lg:translate-x-[280px] lg:w-[1000px]"
            src={HeaderRightImage}
            alt="family-meal-header-right"
            fill
            sizes="1000px"
          />
        </div>
      </div>
      {/* Mobile Image */}
      <div className="md:hidden w-full aspect-[7/5] relative">
        <Image
          className="object-cover object-bottom w-full h-full"
          src={HeaderMobileImage}
          alt="family-meal-header-mobile"
          fill
          sizes="100vw"
        />
      </div>
      <section className="w-11/12 md:max-w-[400px] lg:max-w-[500px] flex flex-col gap-6 md:gap-8 -mt-4 md:mt-0 pb-10">
        <FmLogoIcon />
        <h1 className="font-display text-7xl lg:text-9xl">
          Buy & Sell Lutong Bahay in Manila
        </h1>
        <div className="text-md lg:text-xl">
          Family Meal is the 1st marketplace for cooks in Manila. No
          restaurants, no cloud kitchens, just cooks. Launching 2024.
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
          <div className="flex flex-col gap-2 md:flex-row md:gap-1">
            <div className="w-full h-fit flex items-center bg-fam-white-light shadow-sm ring-1 ring-inset ring-fam-white-dark focus-within:ring-1 focus-within:ring-fam-blue rounded-xl px-4">
              <input
                placeholder="adobo@sinigang.com"
                type="email"
                name="MERGE0"
                id="MERGE0"
                className="w-full input-height input-base border-0 px-0 py-0.5 text-fam-black bg-transparent placeholder:opacity-60 focus:ring-0 leading-0"
              />
            </div>
            <input
              type="submit"
              name="submit"
              value="Join Seller Waitlist"
              className="input-height input-base rounded-xl bg-fam-blue text-center w-full md:w-fit md:hover:bg-fam-black text-fam-white focus:scale-95 transition-100 cursor-pointer"
            />
          </div>
        </form>
      </section>
    </main>
  );
}
