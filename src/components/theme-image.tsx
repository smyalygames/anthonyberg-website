"use client"

import styles from './theme-image.module.css'
import Image, { ImageProps } from 'next/image'

export type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
    srcLight: string
    srcDark: string
}

export function ThemeImage(props: Props)  {
    const { srcLight, srcDark, ...rest } = props

    return (
        <>
            <Image {...rest} src={srcLight} className={styles.imgLight} />
            <Image {...rest} src={srcDark} className={styles.imgDark} />
        </>
    )
}
