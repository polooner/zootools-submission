import {
  behaviourData,
  locationData,
  trafficData,
} from '@/constants/StackedBarData';

type ChartData = {
  data: typeof locationData | typeof behaviourData | typeof trafficData;
  name: string;
  toggles: string[];
  buttonType: string;
};

const HorizontalBarChart = (props: ChartData) => {
  const { buttonType, data, name, toggles } = props;
  return (
    <div className='relative flex flex-col items-start max-w-full min-h-full p-4 px-6 pb-2 bg-white rounded-md mt-14 h-fit shadow-bt-rt'>
      <div className='flex flex-row items-center justify-between w-full'>
        <h1 className='ml-2 font-semibold tracking-wide text-md'>
          {name}
        </h1>
        <div className='flex flex-row items-center justify-end gap-1 text-xs'>
          <button className='px-2 h-[25px] bg-gray-100 rounded-md'>
            {toggles[0]}
          </button>
          <button className='px-2 py-2'>{toggles[1]}</button>
        </div>
      </div>
      <table
        className='min-w-full mt-1 border-separate'
        style={{ borderSpacing: '0 0.5rem' }}
      >
        <tbody className='text-xs bg-white'>
          {data.map((row, index) => (
            <tr key={index}>
              <td className='relative w-full px-2 py-1 whitespace-nowrap'>
                {/* Inner div that represents the percentage */}
                <div
                  style={{ width: `${row.percentage}%` }}
                  className='absolute top-0 bottom-0 z-10 tracking-wider bg-yellow-100 rounded-md left-2'
                ></div>
                <span className={`relative z-20 ml-2 text-sm`}>
                  {row.emoji && <span className='mr-2'>{row.emoji}</span>}
                  <span className={`${row.isMargin ? `ml-6` : ''}`}>
                    {row.name}
                  </span>
                </span>
              </td>
              <td className='px-2 py-1.5 tracking-wider text-center whitespace-nowrap'>
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className='px-4 py-1.5 absolute left-7 bottom-4 text-xs bg-gray-100 rounded-md'>
        {buttonType}
      </button>
    </div>
  );
};

export default HorizontalBarChart;
