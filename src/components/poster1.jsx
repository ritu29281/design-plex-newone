import Podcast from "../styles/podcast.svg";
import Netflix from "../styles/netflix.svg";
import Center from "../styles/center.svg";
import Nifts from "../styles/Nfts.svg";
import Net from "../styles/Netnook.svg";
import Container from "../styles/Horicont.png";

const Photo1 = ()=>{
    return (
        <>
        <div className="-mt-[320px] items-end">
            <div className="flex overflow-hidden justify-between relative items-end">
            <div className="flex justify-start items-end">
                <img src={Podcast}
                 alt="no" 
            className="rotate-10 rounded-[10px]"/>
      <img src={Netflix}
      className=" rotate-8 rounded-[8px] right-[30rem] relative "
      alt="no" 
      />
       </div>
       <div className="items-end absolute w-fit justify-center flex">
        <img 
        src={Center}
        className="top-[184px] relative left-[28rem]"
        alt=""
        />
       </div>
       <div className=" flex items-end justify-end">
        <img 
        src={Nifts}
        className="relative left-[28rem] rounded-8"
        alt="no"
        />
        <img
        src={Net}
        className="rounded-10"
        alt="no"
        />
       </div>
       </div>
       <div className="bg-white justify-center flex overflow-hidden py-[55px] items-end relative -mt-[125px]">
     <img src={Container}
     className="items-center"/>
       </div>
    </div>

       </>
    )
}

export default Photo1;
