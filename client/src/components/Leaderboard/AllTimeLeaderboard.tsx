import { useState } from "react";
import { useLeaderboardQuery } from "../../redux/api/UserEndpoint";
import PointHouse from "../../types/PointHouse.interface";
import BuyPointItem from "../modal/BuyPointItem";
import BuyPointItemAfterClick from "../modal/BuyPointItemAfterClick";
import UserRanking from "../ui/Leaderboard/Ranking";
import Top10 from "../ui/Leaderboard/Top10";
import { UserLeaderboard } from "../../types/Leaderboard.interface";
import logo from "../../assets/logo.png";
import YourRanking from "../ui/Leaderboard/YourRanking";
import Loading from "../ui/Loading";

const AllTimeLeaderboard = () => {
    const { data, isLoading } = useLeaderboardQuery(undefined);
    const getRandomColor = () => {
        const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const [LeaderboardItem, setLeaderboardItem] = useState<PointHouse | undefined>(undefined);
    const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <BuyPointItem open={showLeaderboardModal} close={setShowLeaderboardModal} setBoostItem={setLeaderboardItem} />
            <BuyPointItemAfterClick data={LeaderboardItem} setBoostItem={setLeaderboardItem} />

            <UserRanking close={setShowLeaderboardModal} top3={data?.data?.slice(1, 4)} />
            <div className="relative p-2 -top-5">
                <YourRanking myRank={data?.data[0]} />
            </div>
            <div className="relative -top-10">
                <Top10 Leaderboard={data?.data?.slice(1, 11)} />
            </div>

            <div className="flex flex-col gap-3 px-3">
                {
                    data?.data?.slice(11, 100)?.map((item: UserLeaderboard, index: number) =>
                        <div
                            key={index}
                            className="w-full rounded-[16px] px-2 flex items-center justify-between space-x-3">
                            <div className='w-fit'>
                                <div className={`flex items-center justify-center h-[38px] w-[38px] rounded-full p-1 ${getRandomColor()}`}>
                                    <span className='font-semibold text-[14px] text-black'>Si</span>
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
                                    {index + 11}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllTimeLeaderboard;