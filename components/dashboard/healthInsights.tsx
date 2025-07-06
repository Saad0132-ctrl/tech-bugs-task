import React from 'react'
import { GoDotFill } from 'react-icons/go'

const HealthInsights = () => {
  let HealthInsights = [
    {
      title: 'Genetic Risk',
      icon: <GoDotFill className='text-yellow-500' />,
      text: 'Luna has a heigh likelihood of developing hip dysplasia due to a genetic variant assosiated with joint instability',
       bg: 'bg-yellow-100',
       border:'border-yellow-500'
    },
    {
      title: 'Career Only',
      icon: <GoDotFill className='text-purple-500' />,
      text: 'Luna has a heigh likelihood of developing hip dysplasia due to a genetic variant assosiated with joint instability',
       bg: 'bg-purple-100',
        border:'border-purple-500'
    },
    {
      title: 'Environment Sensitivity',
      icon: <GoDotFill className='text-blue-500' />,
      text: 'Luna has a heigh likelihood of developing hip dysplasia due to a genetic variant assosiated with joint instability',
       bg: 'bg-blue-100',
        border:'border-blue-500'
    },
    {
      title: 'Genetic Risk',
      icon: <GoDotFill className='text--500' />,
      text: 'Luna has a heigh likelihood of developing hip dysplasia due to a genetic variant assosiated with joint instability',
       bg: 'bg-teal-100',
        border:'border-teal-500'
    },
    {
      data: 'Genetic',
      icon: <GoDotFill className='text-red-500' />,
      text: 'Luna has a heigh likelihood of developing hip dysplasia due to a genetic variant assosiated with joint instability',
       bg: 'bg-yellow-100',
        border:'border-yellow-500'
    }
  ]

  const Component = ({ data }: { data: any }) => (
    <div className=''>
      {data.map((data: any) => {
        return (
          <div className={ `flex ${data.bg} border-b-2 shaddow-md ${data.border} pb-3 p-4 rounded-lg mb-4 flex-col gap-1 `}>
              <div className='flex text-black gap-1 mb-2 items-center'>
                {data.icon}
                <span className='text-xs text-[#3B0764] text-center mb-1'>
                  {data.title}
                </span>
              </div>
              <p className='text-[#3B0764] mb-3'>{data.text}</p>
            <div>
              <button className='text-sm py-2 bg-indigo-600 hover:bg-indigo-700 px-3 text-white rounded-lg'>
                Learn More
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <div className='bg-white max-h-[32rem] md:h-[32rem] xl:max-h-[30rem]  w-[100%] overflow-y-auto rounded-xl shadow  p-6 space-y-6'>
      <div>
        <h2 className='text-lg text-[#3B0764] font-medium'>Health Insights</h2>
        <p className='text-sm text-[#3B0764]'>
          Explore potential gentic helth risks and how to stay head of them.
        </p>
      </div>
      <div>
        <Component data={HealthInsights} />
      </div>
    </div>
  )
}

export default HealthInsights
