import React from 'react'

function PageTitle({titleName} : {titleName :string}) {
  return (
    <div dir='rtl' className='pageTitle' >
        <h1 className="pageTitle__text">{titleName}</h1>
    </div>
  )
}

export default PageTitle