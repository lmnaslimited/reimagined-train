import Link from "next/link";

export default function ProductCardLargeNew(){
    return(
        <Link
        className="group relative w-full h-[400px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-gray-600 focus:ring-2 focus:rounded-xl col-span-6 lg:col-span-12 xl:col-span-6"
        href="/database"
      >
        <div className="rounded-xl bg-th-bg-primary bg-gradient-to-b from-th-border-primary to-th-border-secondary p-px transition-all relative w-full h-full shadow-lg">
          <div className="z-10 text-th-textprimary relative overflow-hidden flex-1 flex flex-col items-center gap-5 lg:items-start justify-between bg-th-bg-primary w-full rounded-xl h-full">
            <div className="relative z-10 flex flex-col lg:h-full gap-1 text-foreground mx-auto items-center text-center h-full px-6 py-8 lg:mx-0 lg:pl-8 lg:items-start lg:text-left lg:max-w-[260px]">
              <div className="flex items-center justify-center h-12 w-12 bg-th-quinary rounded-lg mb-3">
              <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18625 8.66531H19.5035V15.331H5.18625V8.66531Z M4 17.0007C4 16.0804 4.7461 15.3343 5.66645 15.3343H18.9984C19.9187 15.3343 20.6648 16.0804 20.6648 17.0007V20.3335C20.6648 21.2539 19.9187 22 18.9984 22H5.66646C4.7461 22 4 21.2539 4 20.3335V17.0007Z M4 3.66646C4 2.7461 4.7461 2 5.66645 2H18.9984C19.9187 2 20.6648 2.7461 20.6648 3.66645V6.99926C20.6648 7.91962 19.9187 8.66572 18.9984 8.66572H5.66646C4.7461 8.66572 4 7.91962 4 6.99926V3.66646Z"
                  stroke="currentcolor"
                  className="text-th-primary"
                  strokeMiterlimit={10}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </svg>
              </div>
              <h2 className="text-xl">Database</h2>
              <div className="flex-1 flex flex-col justify-between gap-2">
              <p className="text-sm text-th-texttertiary">
                Every project is a full Postgres database, the worlds most
                trusted relational database.
              </p>
              <span className="hidden lg:block">
                <ul className="flex flex-col gap-1 text-sm">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sbui-icon inline h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    100% portable
                  </li>
                </ul>
              </span>
            </div>
            </div>
            {/* <figure
            className="absolute inset-0 z-0"
            role="img"
            aria-label="Supabase Postgres database visual composition"
          >
            <span className="absolute w-full lg:w-auto h-full lg:aspect-square flex items-end lg:items-center justify-center lg:justify-end right-0 left-0 lg:left-auto top-24 md:top-24 lg:top-0 lg:bottom-0 my-auto">
              <img
                alt="Supabase Postgres database"
                decoding="async"
                data-nimg="fill"
                className="absolute antialiased inset-0 object-contain object-center z-0 w-full lg:w-auto h-full transition-opacity group-hover:opacity-80"
                sizes="100%"
                src="/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase.png&w=3840&q=100"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 390 430"
                className="absolute w-full h-full z-10 m-auto will-change-transform opacity-0 transition-opacity group-hover:opacity-100"
              >
                <g
                  stroke="#030712"
                  filter="url(#filter5_bd_467_4905)"
                >
                  <path d="M192.144 125.816h-53.465c-8.506 0-16.159 5.17-19.334 13.061L99.0045 189.43c-3.0613 7.608-1.3448 16.306 4.3775 22.181l10.232 10.506c4.792 4.919 7.474 11.516 7.474 18.384l-.001 14.473c0 20.197 16.373 36.569 36.569 36.569 6.16 0 11.154-4.993 11.154-11.153l.001-86.241c0-18.629 7.441-36.486 20.668-49.602 2.746-2.723 7.178-2.704 9.9.041 2.722 2.745 2.703 7.178-.042 9.9-10.577 10.488-16.526 24.766-16.526 39.661l-.001 86.241c0 13.892-11.262 25.153-25.154 25.153-27.928 0-50.569-22.64-50.569-50.569l.001-14.474c0-3.218-1.257-6.309-3.503-8.615L93.353 221.38c-9.5904-9.847-12.4673-24.424-7.3366-37.176l20.3406-50.553c5.308-13.192 18.101-21.835 32.322-21.835h55.729v.084h10.339c49.104 0 88.91 39.806 88.91 88.91v50.842c0 3.866-3.134 7-7 7s-7-3.134-7-7V200.81c0-41.372-33.538-74.91-74.91-74.91H193.23c-.37 0-.732-.029-1.086-.084Z" />
                  <path d="M210.03 283.94c0-3.866-3.134-7-7-7s-7 3.134-7 7v3.113c0 26.959 21.854 48.814 48.813 48.814 26.351 0 47.825-20.879 48.781-46.996h24.614c3.866 0 7-3.134 7-7s-3.134-7-7-7h-26.841c-30.744 0-60.256-12.083-82.173-33.643-2.756-2.711-7.188-2.675-9.899.081-2.711 2.756-2.675 7.188.081 9.9 21.725 21.371 50.116 34.423 80.228 37.134-.679 18.629-15.995 33.524-34.791 33.524-19.227 0-34.813-15.587-34.813-34.814v-3.113ZM238.03 202.145c0 4.792 3.885 8.677 8.677 8.677s8.676-3.885 8.676-8.677-3.884-8.676-8.676-8.676-8.677 3.884-8.677 8.676Z" />
                </g>
                <path
                  stroke="url(#a)"
                  d="M192.144 125.816h-53.465c-8.506 0-16.159 5.17-19.334 13.061L99.0045 189.43c-3.0613 7.608-1.3448 16.306 4.3775 22.181l10.232 10.506c4.792 4.919 7.474 11.516 7.474 18.384l-.001 14.473c0 20.197 16.373 36.569 36.569 36.569 6.16 0 11.154-4.993 11.154-11.153l.001-86.241c0-18.629 7.441-36.486 20.668-49.602 2.746-2.723 7.178-2.704 9.9.041 2.722 2.745 2.703 7.178-.042 9.9-10.577 10.488-16.526 24.766-16.526 39.661l-.001 86.241c0 13.892-11.262 25.153-25.154 25.153-27.928 0-50.569-22.64-50.569-50.569l.001-14.474c0-3.218-1.257-6.309-3.503-8.615L93.353 221.38c-9.5904-9.847-12.4673-24.424-7.3366-37.176l20.3406-50.553c5.308-13.192 18.101-21.835 32.322-21.835h55.729v.084h10.339c49.104 0 88.91 39.806 88.91 88.91v50.842c0 3.866-3.134 7-7 7s-7-3.134-7-7V200.81c0-41.372-33.538-74.91-74.91-74.91H193.23c-.37 0-.732-.029-1.086-.084Z"
                />
                <path
                  stroke="url(#b)"
                  d="M210.03 283.94c0-3.866-3.134-7-7-7s-7 3.134-7 7v3.113c0 26.959 21.854 48.814 48.813 48.814 26.351 0 47.825-20.879 48.781-46.996h24.614c3.866 0 7-3.134 7-7s-3.134-7-7-7h-26.841c-30.744 0-60.256-12.083-82.173-33.643-2.756-2.711-7.188-2.675-9.899.081-2.711 2.756-2.675 7.188.081 9.9 21.725 21.371 50.116 34.423 80.228 37.134-.679 18.629-15.995 33.524-34.791 33.524-19.227 0-34.813-15.587-34.813-34.814v-3.113Z"
                />
                <path
                  stroke="url(#c)"
                  d="M238.03 202.145c0 4.792 3.885 8.677 8.677 8.677s8.676-3.885 8.676-8.677-3.884-8.676-8.676-8.676-8.677 3.884-8.677 8.676Z"
                />
                <defs>
                  <radialGradient
                    id="a"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0 0) rotate(45) scale(166 180)"
                  >
                    <stop stopColor="#2c9b84" />
                    <stop
                      offset={1}
                      stopColor="#030712"
                    />
                  </radialGradient>
                  <radialGradient
                    id="b"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0 0) rotate(45) scale(166 180)"
                  >
                    <stop stopColor="#2c9b84" />
                    <stop
                      offset={1}
                      stopColor="#030712"
                    />
                  </radialGradient>
                  <radialGradient
                    id="c"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0 0) rotate(45) scale(166 180)"
                  >
                    <stop stopColor="#2c9b84" />
                    <stop
                      offset={1}
                      stopColor="#030712"
                    />
                  </radialGradient>
                </defs>
              </svg>
            </span>
          </figure> */}
          <div className="absolute z-10 inset-0 w-full h-full pointer-events-none opacity-20" />
          </div>
        </div>
      </Link>
    )
}