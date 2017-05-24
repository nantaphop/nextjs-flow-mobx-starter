// @flow
import type {Element} from 'react'

type Props = {
    title?: Boolean,
    body?: Boolean,
    children?: Element<any>
}
export default function Text({ children }: Props) {
    return (
        <span>{children}</span>
    )
}