import Link from "next/link";

export default function ProductCardSmallNew(){
    return(
        <Link
        className="group relative w-full h-[400px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 focus:rounded-xl col-span-6 xl:col-span-3"
        href="/auth"
      >
        <div className="rounded-xl bg-th-bg-primary bg-gradient-to-b from-th-border-primary to-th-border-secondary p-px transition-all relative w-full h-full shadow-lg">
          <div className="z-10 text-th-textquanternary relative overflow-hidden flex-1 flex flex-col items-center gap-5 lg:items-start justify-between bg-th-bg-primary w-full rounded-xl h-full">
            <div className="relative z-10 flex flex-col lg:h-full gap-1 text-th-textprimary mx-auto items-center text-center h-full px-6 py-8">
              <div className="flex items-center justify-center h-12 w-12 bg-th-quinary rounded-lg mb-3">
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.03305 15.8071H12.7252M5.03305 15.8071V18.884H12.7252V15.8071M5.03305 15.8071V12.7302H12.7252V15.8071M15.0419 8.15385V5.07692C15.0419 3.37759 13.6643 2 11.965 2C10.2657 2 8.88814 3.37759 8.88814 5.07692V8.15385M5 11.2307L5 18.9231C5 20.6224 6.37757 22 8.07689 22H15.769C17.4683 22 18.8459 20.6224 18.8459 18.9231V11.2307C18.8459 9.53142 17.4683 8.15385 15.769 8.15385L8.07689 8.15385C6.37757 8.15385 5 9.53142 5 11.2307Z"
                    stroke="currentcolor"
                    className="text-th-primary"
                    strokeMiterlimit={10}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h2 className="text-xl">Authentication</h2>
              <div className="flex-1 flex flex-col justify-between gap-2">
                <p className="text-sm text-gray-400">
                  Add user sign ups and logins,
                  <br className="inline-block sm:hidden lg:inline-block" /> securing
                  your data with Row Level Security.{" "}
                </p>
              </div>
            </div>
            {/* <figure
              className="group absolute inset-0 z-0 xl:-bottom-10"
              role="img"
              aria-label="Supabase Authentication provides Row Level Security which enables you to define custom Policies to restrict access to your database"
            >
              <img
                alt="Supabase Authentication user db rows"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 object-cover object-center xl:object-bottom"
                sizes="100%"
                src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=3840&q=100"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
              <img
                alt="Supabase Authentication user db rows"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 object-cover object-center xl:object-bottom opacity-0 group-hover:opacity-100 transition-opacity"
                sizes="100%"
                src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=3840&q=100"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </figure> */}
            <div className="absolute z-10 inset-0 w-full h-full pointer-events-none opacity-20" />
          </div>
        </div>
      </Link>
    )
}