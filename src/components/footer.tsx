'use client';

import Link from 'next/link';
import { Footer as NXFooter } from 'nextra-theme-blog'

function Footer() {
    const YEAR = new Date().getFullYear();

    return (
        <NXFooter>
            <small>
                <Link href={"https://github.com/smyalygames/anthonyberg-website/blob/main/LICENSE"}>
                    <time>{YEAR}</time>
                    © Anthony Berg.</Link>
                <a href={"https://github.com/smyalygames/anthonyberg-website/"}>GitHub Repository</a>
            </small>
            <style jsx>{`
                footer {
                    margin-top: 8rem;
                }
                a {
                    float: right;
                }
            `}</style>
        </NXFooter>
    );
}

export default Footer;
