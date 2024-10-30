import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './src/theme.config.tsx',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

const nextConfig: NextConfig = {
  // any configs you need
}

export default withNextra(nextConfig)
