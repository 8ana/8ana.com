import React from 'react'
import PropTypes from 'prop-types'

import Detail from '@/components/Detail'

export default function ArticleVod({ data = [] }) {
  return (
    <>
      {data.map(item => (
        <div className='right-box' key={item.id}>
          <Detail
            title={item.title}
            pic={item.pic}
            gold={item.gold}
            vid={item.id}
            pid={item.pid}
            status={item.status}
            year={item.year}
            mcid={item.mcid}
          />
        </div>
      ))}
    </>
  )
}

ArticleVod.propTypes = {
  data: PropTypes.array
}
