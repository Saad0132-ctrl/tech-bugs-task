import GeneticTraits from '@/components/dashboard/geneticTraits'
import HealthInsights from '@/components/dashboard/healthInsights'
import Layout from '@/components/layout/layout'
import React from 'react'

function Page () {
  return (
    <Layout>
      <div className='flex flex-col md:flex-row gap-4'>
        <GeneticTraits />
        <HealthInsights />
      </div>
    </Layout>
  )
}

export default Page
