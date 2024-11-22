import logo from "../../../assets/logo.png";
import { ILeaderboardResponse } from "../../../types/type";

const YourRanking = ({myRank}: {myRank: ILeaderboardResponse}) => {
    const getRandomColor = () => {
        const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    console.log(myRank);
    
    return (
        <div>

            <div className='bg-[#202124] py-2 px-3 flex flex-col font-medium w-full rounded-[8px]'>
                <h2 className="text-[13px] text-secondary font-semibold">Your Rank</h2>
                <div
                    className="w-full rounded-[16px] py-2 flex items-center justify-between space-x-3">

                    <div className='w-fit'>
                        <div className={`flex items-center justify-center h-[38px] w-[38px] rounded-full p-1 ${getRandomColor()}`}>
                            <span className='font-semibold text-[14px] text-black capitalize'>{String(myRank?.User?.userId?.Name).slice(0,2)}</span>
                        </div>
                    </div>
                    <div className="flex h-full flex-1 flex-col justify-center relative">
                        <div className='flex w-full flex-col justify-between h-full space-y-[2px]'>
                            <h1 className="text-[14px] text-nowrap line-clamp-1 font-medium">
                               {myRank?.User?.userId?.Name}
                            </h1>
                            <span className='flex items-center gap-1 flex-1 text-[12px]'>
                                <img src={logo} alt='dvf' className='w-[10px] rounded-full' />
                                <span className='text-[12px] text-nowrap font-medium'>
                                    {myRank?.User?.point}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='w-fit flex items-center justify-end flex-wrap text-[14px] relative px-1'>
                        <button
                            className={`font-semibold ease-in duration-200`}
                        >
                           #{myRank?.userRank}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourRanking;