import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({
    // ... Other Nextra config options
    search: false
})

const nextConfig: NextConfig = {
    // any configs you need
}

export default withNextra(nextConfig)

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
