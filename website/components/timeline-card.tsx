import { TtimeLine } from "@/data/types";
import GetIcon from "./icons/getIcon";

export default function TimeLineCard({itimeLine}:{itimeLine:TtimeLine}) {
    return(
        <div className="relative flex justify-between">
            <div className="hidden w-24 py-3 md:block ">
              <h2 className="text-base font-medium text-primary ">{itimeLine.monthYear}</h2>
            </div>
            <div className="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden ">
              <h2 className="text-base font-medium text-primary ">{itimeLine.monthYear}</h2>
            </div>
            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border border-secondary rounded-full text-secondary">
                  <GetIcon iconName={itimeLine.icon}/>
                </div>
              </div>
              <div className="w-px h-full bg-secondary"></div>
            </div>
            <div className="relative flex-1 mb-16 bg-white rounded shadow-md md:mb-8 ">
              <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                <div className="h-10 origin-top-right transform -rotate-45 bg-white  drop-shadow-lg"></div>
              </div>
              <div className="relative z-20 p-6">
                <p className="mb-2 text-xl font-bold text-primary ">
                  {itimeLine.title}
                </p>
                <p className="text-textquaternary ">
                  {itimeLine.content}
                </p>
              </div>
            </div>
          </div>
    )
}