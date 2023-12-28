import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'

export const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid />
      <TransactionChart/>
    </div>
  )
}