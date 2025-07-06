import React from 'react'
import { PiEyesLight } from 'react-icons/pi'
import { FaPaw } from 'react-icons/fa'
import { GiLargePaintBrush } from 'react-icons/gi'

const GeneticTraits = () => {
  let appearence = [
    { data: 'Brown Eyes', icon: <PiEyesLight /> },
    {
      data: 'White Paws',
      icon: <FaPaw className='text-black' />
    },
    {
      data: 'Curl Coat',
      icon: <GiLargePaintBrush className='text-black' />
    },
    {
      data: 'Brown Eyes',
      icon: <PiEyesLight className='text-black' />
    }
  ]
  let behavior = [
    { data: 'Brown Eyes', icon: <PiEyesLight className='text-black' /> },
    {
      data: 'White Paws',
      icon: <FaPaw className='text-black' />
    },
    {
      data: 'Curl Coat',
      icon: <GiLargePaintBrush className='text-black' />
    },
    {
      data: 'Brown Eyes',
      icon: <PiEyesLight className='text-black' />
    }
  ]
  let heathMarkeet = [
    { data: 'Brown Eyes', icon: <PiEyesLight className='text-black' /> },
    {
      data: 'White Paws',
      icon: <FaPaw className='text-black' />
    },
    {
      data: 'Curl Coat',
      icon: <GiLargePaintBrush className='text-black' />
    },
    {
      data: 'Brown Eyes',
      icon: <PiEyesLight className='text-black' />
    }
  ]

  const Component = ({ title, data }: { title: string; data: any }) => (
    <div className='space-y-2'>
      <h3 className='text-gray-600 font-bold'>{title}</h3>
      <div className='flex sm:justify-between gap-2'>
        {data.map((data: any) => {
          return (
            <div className='w-[47%] sm:w-[22%] text-black flex p-3 flex-col items-center gap-1 bg-gray-100 rounded-md'>
              {data.icon}
              <span className='text-xs text-black text-center'>
                {data.data}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className='bg-white rounded-xl w-[100%] shadow p-6 mx-auto space-y-6'>
      <div>
        <h2 className='text-lg text-black font-medium'>
          Your Pet’s Genetic Traits
        </h2>
        <p className='text-sm text-gray-500'>
          See what makes your pet truely unique form coat color to behaviour
        </p>
      </div>

      <Component title='Appearance' data={appearence} />
      <Component title='Behavior' data={behavior} />
      <Component title='Health Markers' data={heathMarkeet} />
    </div>
  )
}

export default GeneticTraits
