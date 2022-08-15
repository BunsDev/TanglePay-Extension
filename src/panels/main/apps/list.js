import React, { useState, useEffect } from 'react'
import { Base } from '@tangle-pay/common'

const Item = ({ id, icon, desc, developer, url }) => {
    return (
        <div
            className='press flex row ac pt8'
            onClick={() => {
                Base.push(url, { title: id })
            }}>
            <div className='flex c p10 radius10 border mr10'>
                <img style={{ width: 60, height: 60 }} src={Base.getIcon(icon)} />
            </div>
            <div className='border-b'>
                <div className='fz18 fw600 mb5'>{id}</div>
                {desc ? <div className='fz16 cS ellipsis-2 mb5'>{desc}</div> : null}
                {developer ? <div className='fz16 cS mb5'>{developer}</div> : null}
            </div>
        </div>
    )
}

export const List = ({ list, height }) => {
    return (
        <div id='apps-id' style={{ height, overflowY: 'scroll' }}>
            {list.map((e) => {
                return <Item key={e.id} {...e} />
            })}
        </div>
    )
}
