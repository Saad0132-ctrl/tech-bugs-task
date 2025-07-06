import { MyChart } from '@/components/dashboard/chart'
import GeneticTraits from '@/components/dashboard/geneticTraits'
import HealthInsights from '@/components/dashboard/healthInsights'
import Layout from '@/components/layout/layout'
import React from 'react'
async function Page () {
  return (
    <Layout>
      <div className='space-y-6'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <GeneticTraits />
          <HealthInsights />
        </div>
        <div className='w-full'>
          <MyChart />
        </div>
      </div>
    </Layout>
  )
}

export default Page
