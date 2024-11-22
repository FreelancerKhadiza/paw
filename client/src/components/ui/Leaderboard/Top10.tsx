import logo from "../../../assets/logo.png";
import { UserLeaderboard } from "../../../types/Leaderboard.interface";
import first from "../../../assets/madel/1th.png";
import second from "../../../assets/madel/2th.png";
import third from "../../../assets/madel/3th.png";
import fourth from "../../../assets/madel/4th.png";
import fifth from "../../../assets/madel/5th.png";
import sixth from "../../../assets/madel/6th.png";
import seventh from "../../../assets/madel/7th.png";
import eighth from "../../../assets/madel/8th.png";
import ninth from "../../../assets/madel/9th.png";
import tenth from "../../../assets/madel/10th.png";

const Top10 = ({ Leaderboard }: { Leaderboard: UserLeaderboard[] }) => {
    const getRandomColor = () => {
        const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="p-4 ">
            {
                Leaderboard?.map((item: UserLeaderboard, index: number) => (
                    <div
                        key={index}
                        className="relative flex py-2 items-center justify-between space-x-3">
                        <div className='w-fit'>
                            <div className={`flex items-center justify-center h-[38px] w-[38px] rounded-full p-1 ${getRandomColor()}`}>
                                <span className='font-semibold text-[14px] text-black'>{String(item?.userId?.Name).slice(0,2)}</span>
                            </div>
                        </div>
                        <div className="flex h-full flex-1 flex-col justify-center relative">
                            <div className='flex w-full flex-col justify-between h-full space-y-[2px]'>
                                <h1 className="text-[14px] text-nowrap line-clamp-1 font-medium">
                                    {item?.userId?.Name}
                                </h1>
                                <span className='flex items-center gap-1 flex-1 text-[12px]'>

                                    <img src={logo} alt='dvf' className='w-[10px] rounded-full' />

                                    <span className='text-[12px] text-nowrap font-medium'>
                                        {item?.point ? item?.point : 0}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className='w-fit flex items-center justify-end flex-wrap text-[14px] relative px-1'>
                            <div
                                className={`font-semibold ease-in duration-200`}
                            >
                                <img src={[first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth][index]} alt={item?.userId?.Name} className="w-[20px]" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Top10;