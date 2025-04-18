import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
    index: {
        title: 'Home',
        type: 'page',
    },
    projects: {
        title: 'Projects',
        type: 'page',
    },
    posts: {
        title: 'Blog',
        type: 'page'
    },
    veganenumbers: {
        display: 'hidden',
        theme: {
            sidebar: false
        }
    }
}

export default meta;