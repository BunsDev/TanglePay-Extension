import React from 'react'
import { I18n } from '@tangle-pay/common'
import { useStore } from '@tangle-pay/store'
import { Nav } from '@/common'

export const UserLang = () => {
    const [lang, setLang] = useStore('common.lang')
    return (
        <div className='page'>
            <Nav title={I18n.t('user.language')} />
            <div>
                <div
                    onClick={() => {
                        setLang('en')
                    }}
                    className='p20 press border-b'>
                    <div className={`fz15 ${lang === 'en' ? 'cP' : ''}`}>English</div>
                </div>
                <div
                    onClick={() => {
                        setLang('zh')
                    }}
                    className='p20 press border-b'>
                    <div className={`fz15 ${lang === 'zh' ? 'cP' : ''}`}>简体中文</div>
                </div>
            </div>
        </div>
    )
}
