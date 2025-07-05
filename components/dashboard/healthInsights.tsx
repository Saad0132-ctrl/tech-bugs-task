import React from 'react'
import { GoDotFill } from 'react-icons/go'

const HealthInsights = () => {
  let HealthInsights = [
    {
      title: 'Genetic Risk',
      icon: <GoDotFill className='text-red-500' />,
      text: 'Luna has a heigh likelihood of developing hip dysplasia due to a genetic variant assosiated with joint instability'
    },
    {
      title: 'Career Only',
      icon: <GoDotFill className='text-green-500' />,
      text: 'Luna has a heigh likelihood of developing hip dysplasia due to a genetic variant assosiated with joint instability'
    },
    {
      title: 'Environment Sensitivity',
      icon: <GoDotFill className='text-blue-500' />,
      text: 'Luna has a heigh likelihood of developing hip dysplasia due to a genetic variant assosiated with joint instability'
    },
    {
      title: 'Genetic Risk',
      icon: <GoDotFill className='text-red-500' />,
      text: 'Luna has a heigh likelihood of developing hip dysplasia due to a genetic variant assosiated with joint instability'
    },
    {
      data: 'Genetic Risk',
      icon: <GoDotFill className='text-red-500' />,
      text: 'Luna has a heigh likelihood of developing hip dysplasia due to a genetic variant assosiated with joint instability'
    }
  ]

  const Component = ({ data }: { data: any }) => (
    <div className=''>
      {data.map((data: any) => {
        return (
          <div className='flex border-b-2 pb-3 mb-4 flex-col gap-1 '>
            <div>
              <div className='flex gap-1 items-center'>
                {data.icon}
                <span className='text-xs text-gray-500 text-center mb-1'>
                  {data.title}
                </span>
              </div>
              <p>{data.text}</p>
            </div>
            <div>
              <button className='text-sm py-2 px-3 text-white bg-black rounded-lg'>
                Learn More
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <div className='bg-white max-h-[30rem] w-[100%] overflow-y-auto rounded-xl shadow  p-6 space-y-6'>
      <div>
        <h2 className='text-lg font-medium'>Health Insights</h2>
        <p className='text-sm text-gray-500'>
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
