import React, { useState, useEffect } from 'react'
import { Nav } from '@/common'
import { Loading } from 'antd-mobile'
import { StatusCon, AirdopsList, RewardsList } from './widget'
import { useGetEventsConfig } from '@tangle-pay/store/staking'
import { useStore } from '@tangle-pay/store'
import { I18n } from '@tangle-pay/common'
export const Staking = () => {
    const [height, setHeight] = useState(0)
    useGetEventsConfig()
    const [isRequestStakeHis] = useStore('common.isRequestStakeHis')
    useEffect(() => {
        const height = document.body.offsetHeight - 48
        setHeight(height)
    }, [])
    return (
        <div className='h100'>
            <Nav title={I18n.t('staking.title')} />
            <div className='ph15' style={{ height, overflowY: 'scroll' }}>
                <StatusCon />
                <AirdopsList />
            </div>
            {!isRequestStakeHis && (
                <div className='w100 h100 flex c pa' style={{ left: 0, top: 0 }}>
                    <Loading />
                </div>
            )}
        </div>
    )
}
