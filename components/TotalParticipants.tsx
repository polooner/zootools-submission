'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { FiUsers } from 'react-icons/fi';
import {
  data1,
  data2,
  data3,
  data4,
} from '@/constants/TotalParticipantsData';

interface ChartProps {
  timespan?: '1h' | '24h' | '30d' | '60d';
}

const CustomTooltip = ({ active, payload, label }: any) => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date();
  let name = month[d.getMonth()];

  if (active && payload && payload.length) {
    return (
      <div className='px-4 py-2 bg-white rounded-md ring-1 ring-slate-100'>
        <p className='flex flex-row items-baseline text-sm'>
          {`${payload[0].value}`}
          <p className='ml-[2px] text-sm text-slate-500'>signups</p>
        </p>

        <p className='text-xs font-light text-slate-500'>{`${name} ${
          label + 1
        }`}</p>
      </div>
    );
  }
};

const RectangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;

  return (
    <rect rx={4} x={x} y={y} width={width} height={height} fill={fill} />
  );
};

const TotalParticipants = (props: ChartProps) => {
  let data;

  switch (props.timespan) {
    case '1h':
      data = data1;
      break;
    case '24h':
      data = data2;
      break;
    case '30d':
      data = data3;
      break;
    case '60d':
      data = data4;
      break;
    default:
      data = data1; // Default data or you can throw an error
  }

  return (
    <div className='w-full relative mt-10 px-6 pt-16 pb-8 space-y-[8px] bg-white flex flex-col rounded-md h-[300px] shadow-bt-rt'>
      <div className='absolute flex flex-row items-baseline top-6 left-6 '>
        <div>
          <h1 className='text-2xl font-medium'>100,000</h1>
          <h2 className='font-light tracking-wide'>Participants</h2>
        </div>
        <FiUsers className='ml-2' size={20} />
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart barGap={4} barSize={12} height={100} data={data2}>
          <CartesianGrid
            vertical={false}
            strokeDasharray='0.1 '
            horizontalCoordinatesGenerator={(props) => {
              const interval = props.height / 7;
              return Array.from({ length: 8 }, (_, i) => i * interval);
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            shape={<RectangleBar />}
            dataKey='uv'
            background={false}
            fill='#FFD133'
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalParticipants;
