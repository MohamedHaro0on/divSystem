import React, { Fragment } from 'react'
import MainPhoto from './MainPhoto'
import OurOfferes from './OurOfferes'
import Services from './Services'
import Welcome from './Welcome'
function HomePage() {
    return (
        <Fragment>
            <MainPhoto />
            <Welcome/>
            <Services/>
            <OurOfferes/>
        </Fragment>
    )
}

export default HomePage