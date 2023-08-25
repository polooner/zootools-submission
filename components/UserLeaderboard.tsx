'use client';

import { Bar, BarChart, ResponsiveContainer } from 'recharts';

import {
  data1,
  data2,
  data3,
  data4,
} from '@/constants/TotalParticipantsData';
import { PropsWithChildren } from 'react';

const data = [
  { email: 'paula.suarze@cones', friendsInvited: 6500, country: 'USA' },
  {
    email: 'laura.kenet..3@yahoo.com',
    friendsInvited: 2300,
    country: 'Monaco',
  },
  {
    email: 'aaron.michael@arg.org',
    friendsInvited: 1200,
    country: 'Prague',
  },
  {
    email: 'jeremy.runner@aol.com',
    friendsInvited: 900,
    country: 'China',
  },
];

const UserLeaderboard = (props: PropsWithChildren) => {
  return (
    <div className='relative flex flex-col items-start max-w-full min-h-full px-6 pt-6 pb-2 bg-white rounded-md mt-14 h-fit shadow-bt-rt'>
      <h1 className='ml-2 font-semibold tracking-wide text-md'>
        User leaderboard
      </h1>
      <table className='min-w-full mt-4'>
        <thead>
          <tr>
            <th className='px-2 py-3 text-xs font-normal tracking-wider text-left '>
              Email
            </th>
            <th className='px-2 py-3 text-xs font-normal tracking-wider text-left '>
              Friends invited
            </th>
            <th className='px-2 py-3 text-xs font-normal tracking-wider text-left '>
              Country
            </th>
          </tr>
        </thead>
        <tbody className='text-xs bg-white'>
          {data.map((row, index) => (
            <tr key={index}>
              <td className='px-2 py-3 whitespace-nowrap'>{row.email}</td>
              <td className='px-2 py-3 whitespace-nowrap'>
                {row.friendsInvited}
              </td>
              <td className='px-2 py-3 whitespace-nowrap'>
                {row.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='px-4 py-1.5 absolute left-7 bottom-4 text-xs bg-gray-100 rounded-md'>
        See leaderboard
      </button>
    </div>
  );
};

export default UserLeaderboard;
