import React from 'react'
import Header from '../components/Header'
import OverviewCards from '../components/analytics/OverviewCards'

const AnalyticsPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
            <Header title="Analytics Dashboard" />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <OverviewCards />
            </main>

        </div>
    )
}

export default AnalyticsPage
