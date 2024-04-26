import { TjobCard } from "@/data/types";
import Link from "next/link";
export default function JobCard({
  ijobCard,
  idx
}: {
  ijobCard: TjobCard;
  idx: number;
}) {
  return (
    <div key={idx} className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
      <div className="bg-white rounded-md h-96 relative mt-12 md:mt-6">
        {ijobCard.tag === "" ? (
          ""
        ) : (
          <div className="flex items-center justify-center gap-2 absolute top-[-7%] py-2 px-4  text-sm text-center rounded-full text-white font-semibold bg-pink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
              />
            </svg>
            <p className="">{ijobCard.tag}</p>
          </div>
        )}
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-3 h-[10%]">
            <span className="inline-block px-2 py-1 text-sm text-primary rounded-full  bg-quinary">
              {ijobCard.category}
            </span>
            <h2 className="text-sm font-medium ">{ijobCard.validity}</h2>
          </div>
          <h2 className="mb-3 text-xl font-semibold text-tertiary lg:text-2xl h-[20%]">
            {ijobCard.jobProfile}
          </h2>
          <ul className="space-y-3">
            {ijobCard.requirements.map((requirement, idx) => (
              <li key={idx} className="flex items-center">
                <div className="mr-2">
                  <svg
                    className="w-4 h-4 text-primary"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeWidth="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <p className="font-medium text-gray-600 text">{requirement}</p>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center mt-4 h-[20%]">
            <Link
              target={`${ijobCard.cta.target}`}
              rel={`${ijobCard.cta.rel}`}
              href={`${ijobCard.cta.href}`}
              className={`w-full px-4 py-2 text-center  rounded-md text-white bg-primary hover:bg-tertiary'`}
            >
              {ijobCard.cta.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
