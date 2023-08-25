import Insights from '@/components/Insights';
import TotalParticipants from '@/components/TotalParticipants';
import HorizontalBarChart from '@/components/HorizontalBarChart';
import {
  behaviourData,
  locationData,
  trafficData,
} from '@/constants/StackedBarData';
import UserLeaderboard from '@/components/UserLeaderboard';

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen px-16 pt-8 justify-normal min-w-screen'>
      <div className='flex flex-row justify-between min-w-full'>
        <h1 className='self-start text-lg font-medium tracking-wider'>
          Summer referral competition
        </h1>
        <div className='flex flex-row items-center p-1 bg-white rounded-md gap-x-2 shadow-bt-rt'>
          <button className='px-2 py-1 text-xs tracking-wide rounded-md bg-gray-50'>
            1h
          </button>
          <button className='px-2 py-1 text-xs tracking-wide rounded-md bg-gray-50'>
            24h
          </button>
          <button className='px-2 py-1 text-xs tracking-wide bg-gray-200 rounded-md'>
            30d
          </button>
          <button className='px-2 py-1 text-xs tracking-wide rounded-md bg-gray-50'>
            60d
          </button>
        </div>
      </div>

      <TotalParticipants />
      <Insights />
      <div className='grid min-w-full min-h-full grid-cols-2 gap-x-8 gap-y-8'>
        <UserLeaderboard />
        <HorizontalBarChart
          buttonType='See traffic sources'
          toggles={['Source', 'City']}
          name='Traffic'
          data={trafficData}
        />
        <HorizontalBarChart
          buttonType='See all countries'
          toggles={['Country', 'City']}
          name='Signup location'
          data={locationData}
        />
        <HorizontalBarChart
          buttonType='See all countries'
          toggles={['Browsers', 'Decides']}
          name='Behaviour'
          data={behaviourData}
        />
      </div>
    </main>
  );
}
