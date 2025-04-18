import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({
    // ... Other Nextra config options
    search: false
})

const nextConfig: NextConfig = {
    // any configs you need
    turbopack: {
        resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    },
}

export default withNextra(nextConfig)
