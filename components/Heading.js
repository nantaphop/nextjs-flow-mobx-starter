// @flow

import type { Element } from 'react'
import React from 'react'

type Props = {
    h1?: Boolean,
    h2?: Boolean,
    h3?: Boolean,
    h4?: Boolean,
    h5?: Boolean,
    children?: Element<any>
}

export default function Heading({h1, h2, h3, h4, h5, children}: Props) {
    if (h1) {
        return <h1>{children}</h1>
    } else if (h2) {
        return <h2>{children}</h2>
    } else if (h3) {
        return <h3>{children}</h3>
    } else if (h4) {
        return <h4>{children}</h4>
    } else if (h5) {
        return <h5>{children}</h5>
    }
}