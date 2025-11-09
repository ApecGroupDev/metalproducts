// app/robots.txt/route.ts
import { NextResponse } from 'next/server'

export function GET() {
  const body = `
User-agent: *
Disallow: /cgi-bin/
Disallow: /admin/
Disallow: /login
Disallow: /register
Disallow: /cart
Disallow: /checkout
Disallow: /*?*

# Block specific files from indexing
Disallow: /pdfs/Flameshield_Product_Sheet.pdf
Disallow: /_next/static/media/630c17af355fa44e-s.p.woff2
Disallow: /pdfs/lf_10.pdf
Disallow: /pdfs/64358249435378456110422c_900126_rev2002.pdf

# Everything else allowed
Allow: /

Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.metalproductsusa.com'}/sitemap.xml
  `.trim()

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
