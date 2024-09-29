import React from 'react'
import Header from '../components/Header'
import OverviewCards from '../components/analytics/OverviewCards'
import RevenuChart from '../components/analytics/RevenuChart'
import ChannelPerformance from '../components/analytics/ChannelPerformance'
import ProductPerformance from '../components/analytics/ProductPerformance'
import UserRetention from '../components/analytics/UserRetention'
import CustomerSegmentation from '../components/analytics/CustomerSegmentation'


const AnalyticsPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
            <Header title={"Analytics Dashboard"} />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <OverviewCards />
                <RevenuChart />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <ChannelPerformance />
                    <ProductPerformance />
                    <UserRetention />
                    <CustomerSegmentation />
                </div>


            </main>
        </div>
    )
}

export default AnalyticsPage
