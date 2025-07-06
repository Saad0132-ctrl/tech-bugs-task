import React from 'react'
import { PiEyesLight } from 'react-icons/pi'
import { FaPaw } from 'react-icons/fa'
import { GiLargePaintBrush } from 'react-icons/gi'

const GeneticTraits = () => {
  let appearence = [
    { data: 'Brown Eyes', icon: <PiEyesLight /> , bg:'bg-yellow-100'},
    {
      data: 'White Paws',
      icon: <FaPaw className='text-black' />, bg:'bg-teal-100'
    },
    {
      data: 'Curl Coat',
      icon: <GiLargePaintBrush className='text-black'/>,bg:'bg-purple-100'
    },
    {
      data: 'Brown Eyes',
      icon: <PiEyesLight className='text-black' />, bg:'bg-blue-100'
    }
  ]
  let behavior = [
    { data: 'Brown Eyes', icon: <PiEyesLight className='text-black' />, bg:'bg-blue-100',},
    {
      data: 'White Paws',
      icon: <FaPaw className='text-black' />, bg:'bg-purple-100'
    },
    {
      data: 'Curl Coat',
      icon: <GiLargePaintBrush className='text-black' />,bg:'bg-teal-100'
    },
    {
      data: 'Brown Eyes',
      icon: <PiEyesLight className='text-black' />,bg:'bg-yellow-100'
    }
  ]
  let heathMarkeet = [
    { data: 'Brown Eyes', icon: <PiEyesLight className='text-black' /> , bg:'bg-purple-100'},
    {
      data: 'White Paws',
      icon: <FaPaw className='text-black' />,bg:'bg-teal-100'
    },
    {
      data: 'Curl Coat',
      icon: <GiLargePaintBrush className='text-black' />,bg:'bg-yellow-100'
    },
    {
      data: 'Brown Eyes',
      icon: <PiEyesLight className='text-black' />,bg:'bg-blue-100'
    }
  ]

  const Component = ({ title, data }: { title: string; data: any }) => (
    <div className='space-y-2'>
      <h3 className='text-[#3B0764] font-bold'>{title}</h3>
      <div className='flex sm:justify-between   gap-2'>
        {data.map((data: any) => {
          return (
            <div className={`${data.bg} w-[47%] shadow-sm sm:w-[22%] text-black flex p-3 flex-col items-center gap-1 rounded-md`}>
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
        <h2 className='text-lg text-[#3b0764] font-medium'>
          Your Pet’s Genetic Traits
        </h2>
        <p className='text-sm text-[#3B0764]'>
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
