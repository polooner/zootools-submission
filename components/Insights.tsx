import clsx from 'clsx';
import {
  BiSolidCaretDownSquare,
  BiSolidCaretUpSquare,
} from 'react-icons/bi';
import { HiOutlineLightBulb } from 'react-icons/hi';

const data = [
  {
    icon: BiSolidCaretDownSquare,
    feedback: [
      { text: 'Signups are slowing down.', bold: true },
      { text: ' -5% new than last week', bold: false },
    ],
    comment: [{ text: 'Make sure to promote and share your form' }],
    size: 30,
    color: '#FF5733',
    isBg: false,
    bg: null,
  },
  {
    icon: BiSolidCaretUpSquare,
    feedback: [
      { text: '80%', bold: true },
      {
        text: ' of your signups were invited by other members',
        bold: false,
      },
    ],
    comment: [
      {
        text: 'Congrats! This is huge. Keep giving rewards for your usrs',
      },
    ],
    size: 30,
    color: '#39FF14',
    isBg: false,
    bg: null,
  },
  {
    icon: HiOutlineLightBulb,
    feedback: [
      { text: '80%', bold: true },
      {
        text: ' of your signups were invited by a friend',
        bold: false,
      },
    ],
    comment: [],
    size: 15,
    color: '#FFD133',
    isBg: true,
    bg: '#ffd133',
  },
  {
    icon: HiOutlineLightBulb,
    feedback: [
      { text: '80%', bold: true },
      {
        text: ' of your signups were invited by a friend',
        bold: false,
      },
    ],
    comment: [],
    size: 15,
    color: '#FFD133',
    isBg: true,
    bg: '#ffd133',
  },
];

const Insights = () => {
  return (
    <div className='flex flex-col items-start w-full px-6 pt-6 pb-10 mt-10 bg-white rounded-md h-fit shadow-bt-rt'>
      <h1 className='text-2xl font-semibold tracking-wider'>
        ZooTools insights
      </h1>
      <p className='text-sm font-light tracking-wider'>
        Making analytics simple and actionable
      </p>
      <table className='min-w-full gap-2 mt-5'>
        <thead>
          <tr>
            <th className='w-1/2 mt-2 text-sm font-medium tracking-wider text-left'>
              Summary
            </th>
            <th className='w-1/2 mt-2 text-sm font-medium tracking-wider text-left'>
              Feedback
            </th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {data.map((row, index) => (
            <tr key={index}>
              <td className='flex items-start gap-2 text-sm'>
                <div
                  className={clsx(
                    row.isBg
                      ? `bg-[#ffd133] self-center rounded-sm p-[4px]`
                      : ''
                  )}
                >
                  <row.icon size={row.size} fill={row.color} />
                </div>
                <div className='py-2 text-xs tracking-wider whitespace-nowrap'>
                  {row.feedback.map((part, idx) => (
                    <span
                      key={idx}
                      className={part.bold ? 'font-semibold' : ''}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
              </td>
              <td className='text-xs font-medium tracking-wider whitespace-nowrap'>
                {row.comment.map((part, idx) => (
                  <span key={idx} className='text-xs'>
                    {part.text}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Insights;
