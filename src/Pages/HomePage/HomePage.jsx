import React, { Fragment } from 'react'
import MainPhoto from './MainPhoto'
import Services from './Services'
import Welcome from './Welcome'
function HomePage() {
    return (
        <Fragment>
            <MainPhoto />
            <Welcome/>
            <Services/>
        </Fragment>
    )
}

export default HomePage