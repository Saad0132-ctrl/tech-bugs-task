'use client'
import dynamic from 'next/dynamic'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import Image from 'next/image'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const diagnosis = [
  {
    month: 'January',
    year: 2024,
    blood_pressure: {
      systolic: { value: 125, levels: 'normal' },
      diastolic: { value: 82, levels: 'normal' }
    }
  },
  {
    month: 'February',
    year: 2024,
    blood_pressure: {
      systolic: { value: 132, levels: 'high' },
      diastolic: { value: 88, levels: 'high' }
    }
  },
  {
    month: 'March',
    year: 2024,
    blood_pressure: {
      systolic: { value: 118, levels: 'normal' },
      diastolic: { value: 76, levels: 'normal' }
    }
  },
  {
    month: 'April',
    year: 2024,
    blood_pressure: {
      systolic: { value: 140, levels: 'high' },
      diastolic: { value: 90, levels: 'high' }
    }
  },
  {
    month: 'May',
    year: 2024,
    blood_pressure: {
      systolic: { value: 121, levels: 'normal' },
      diastolic: { value: 79, levels: 'normal' }
    }
  },
  {
    month: 'June',
    year: 2024,
    blood_pressure: {
      systolic: { value: 110, levels: 'normal' },
      diastolic: { value: 72, levels: 'normal' }
    }
  }
]

const LineChart = dynamic(
  () => import('react-chartjs-2').then(mod => mod.Line),
  {
    ssr: false
  }
)

export function MyChart () {
  const sortedDiagnosis = [...diagnosis].sort((a, b) => {
    const monthOrder: { [key: string]: number } = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12
    }
    return a.year - b.year || monthOrder[a.month] - monthOrder[b.month]
  })

  const labels = sortedDiagnosis.map(
    entry => `${entry.month.slice(0, 3)}, ${entry.year}`
  )
  const systolicData = sortedDiagnosis.map(
    entry => entry.blood_pressure.systolic.value
  )
  const diastolicData = sortedDiagnosis.map(
    entry => entry.blood_pressure.diastolic.value
  )

  const latest =
    sortedDiagnosis[5] ?? sortedDiagnosis[sortedDiagnosis.length - 1]

  return (
    <div className='  p-4 flex flex-col lg:flex-row max-w-5xl bg-whitesm:p-6 rounded-xl w-full  mx-auto gap-4  shadow-sm border border-gray-100 sm:gap-6'>
      <div className='w-full lg:w-[65%]'>
        <div className='flex items-center justify-between w-full mb-3'>
          <h2 className='text-[#072635] text-base sm:text-lg font-semibold'>
            Diagnosis History
          </h2>
          <button className='flex items-center gap-1 sm:gap-2 px-2 py-1 rounded-md hover:bg-gray-50 transition-colors'>
            <span className='text-[14px] text-[#072635] font-light'>
              Last 6 months
            </span>
            <Image
              src='/download.svg'
              width={14}
              height={14}
              alt='Download icon'
              className='w-3 h-3 sm:w-4 sm:h-4'
            />
          </button>
        </div>

        <div className='w-full h-48 sm:h-56 lg:h-64'>
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  label: 'Systolic',
                  data: systolicData,
                  backgroundColor: '#5FC3D6',
                  borderColor: '#5FC3D6',
                  borderWidth: 1
                },
                {
                  label: 'Diastolic',
                  data: diastolicData,
                  backgroundColor: '#EC5252',
                  borderColor: '#EC5252',
                  borderWidth: 1
                }
              ]
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              animation: {
                duration: 0
              },
              transitions: {
                active: {
                  animation: {
                    duration: 0
                  }
                },
                resize: {
                  animation: {
                    duration: 0
                  }
                }
              },
              scales: {
                x: { beginAtZero: false },
                y: { beginAtZero: false, min: 60 }
              }
            }}
          />
        </div>
      </div>

      <div className=' lg:w-[35%] justify-center flex flex-col  space-y-4 sm:space-y-6 w-full'>
        <div className='bg-gray-50  p-3 sm:p-4 rounded-lg'>
          <div className='flex items-center mb-2'>
            <span className=' bg-[#5FC3D6] w-3 h-3 border-2 rounded-full  border-white shadow-sm'></span>
            <span className='text-[#072635] ml-2 text-[14px] font-medium'>
              Systolic
            </span>
          </div>
          <h3 className='text-[#072635] text-lg font-bold mb-2'>
            {latest?.blood_pressure.systolic.value}
          </h3>
          <div className='flex items-center'>
            <Image
              className='w-4 h-4 sm:w-5 sm:h-5'
              width={20}
              height={20}
              src='/download (1).svg'
              alt='Trend up'
            />
            <span className='text-[#072635] text-[14px] ml-2 font-light'>
              Higher than Average
            </span>
          </div>
        </div>
        <div className='bg-gray-50 rounded-lg p-3 sm:p-4'>
          <div className='flex items-center mb-2'>
            <span className='h-3 w-3 rounded-full shadow-sm bg-[#EC5252] border-2 border-white '></span>
            <span className='text-[#072635] ml-2 text-[12px] sm:text-sm font-normal'>
              Diastolic
            </span>
          </div>
          <h2 className='text-[#072635]  sm:text-xl text-lgn font-bold mb-2'>
            {latest?.blood_pressure.diastolic.value}
          </h2>
          <div className='flex items-center'>
            <Image
              className='w-4 h-4 sm:w-5 sm:h-5'
              width={20}
              height={20}
              src='/download.svg'
              alt=''
            />
            <span className='sm:text-sm text-[#072635] ml-2 font-light text-xs'>
              Lower than Average
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
