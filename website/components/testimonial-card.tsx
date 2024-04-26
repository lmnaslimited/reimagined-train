import { Ttestimonial } from "@/data/types"
import Image from "next/image"
import GetIcon from "./icons/getIcon";
export default function TestimoinalCard({itestimonial}:{itestimonial:Ttestimonial}){
    return(
        <div className="flex flex-col border border-textquaternary transition duration-300 rounded-lg transform shadow-inner hover:bg-white justify-between">
        <div className="relative z-20 px-8 pt-8 -mt-14 ">
          <span className="inline-block p-3 mb-3 text-xs text-white bg-primary rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-quote"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
            </svg>
          </span>
          <p className="mb-4 text-base leading-7 text-texttertiary">
          {itestimonial.content}
          </p>
          </div>
          <div className="px-8 pb-8 flex flex-col justify-between">
          <div className="flex items-center gap-x-4">
            {/* <div className="relative w-16 h-16 overflow-hidden rounded-full">
              <Image
                className="object-cover w-full h-full"
                src={`${itestimonial.imagehref}`}
                width={56}
                height={56}
                alt=""
              />
            </div> */}
            <div className="info">
              <h2 className="text-lg font-bold text-textprimary">
              {itestimonial.clientName}
              </h2>
              <span className="block text-xs font-semibold text-blue-lmnas-light">
              {itestimonial.designation}
              </span>
              <span className="flex mt-2 text-green gap-x-0.5">
               <GetIcon iconName={itestimonial.rating}/>
              </span>
            </div>
          </div>
        </div>
      </div>


    )
  }
