import { CiCircleInfo } from "react-icons/ci";
import AllTimeLeaderboard from "../components/Leaderboard/AllTimeLeaderboard";
import { useState } from "react";
import TopMinersLeaderboard from "../components/Leaderboard/TopMinersLeaderboard";

const Leaderboard = () => {
    const [tab, setTab] = useState("all_time");
    return (
        <div className="min-h-[85vh] relative overflow-hidden">
            <p className="text-3xl text-center pt-5 text-white font-bold">Leaderboard</p>
            <p className="text-white flex items-center justify-center gap-1 font-poppins text-opacity-60 text-sm">Ranking Info <CiCircleInfo /></p>
            <div className="px-2 relative mt-5">
                <div className="w-full h-full bg-white rounded-xl relative overflow-hidden bg-opacity-10 flex items-center">
                    <div onClick={() => setTab('all_time')} className={`flex-1 cursor-pointer flex justify-center p-2 items-center capitalize font-ubuntu font-medium text-xl  ${tab === 'all_time' ? 'bg-yellow-500 text-black ' : 'text-white'}`}>All time</div>
                    <div onClick={() => setTab('top_miners')} className={`flex-1 flex justify-center cursor-pointer p-2 items-center capitalize font-ubuntu font-medium text-xl ${tab === 'top_miners' ? 'bg-yellow-500 text-black ' : 'text-white '}`}>Top miners</div>
                </div>
            </div>
            {
                tab === 'all_time' &&
                <AllTimeLeaderboard />
            }
            {
                tab === 'top_miners' &&
                <TopMinersLeaderboard />
            }
        </div>
    );
};

export default Leaderboard;