import React, { ReactChild } from 'react'
import { Helmet } from 'react-helmet-async'

type Props = {
  title?: string
  description?: string
  image?: string
  pathname?: string
  robots?: string
  children?: ReactChild
  isMenuPage?: boolean
}

// ? Site-wide SEO Component for use on all pages
// * These properties will override the ones in Default Helmet
//  * Pathname must be given for canonical URLs
export function SEO({
  pathname = '',
  image = '',
  description = 'The development agency with websites that bring the func!',
  title = 'Web Development Agency',
  robots = 'index, follow',
  children,
  isMenuPage = false,
}: Props) {
  const siteUrl = 'https://purefunc.io'
  const siteName = 'Pure Func'
  const siteTitle = `${title} - ${siteName}`

  return (
    <Helmet title={title} titleTemplate={isMenuPage ? undefined : `${siteName} | %s`}>
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={`${siteUrl}${image}`} />}
      {robots && <meta name="robots" content={robots} />}
      {pathname && <link rel="canonical" href={`${siteUrl}${pathname}`} />}
      {/* Social */}
      {title && <meta property="st:title" content={siteTitle} />}
      {description && <meta property="st:info" content={description} />}
      {/* OG */}
      {pathname && <meta property="og:url" content={`${siteUrl}${pathname}`} />}
      {title && <meta property="og:title" content={siteTitle} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={`${siteUrl}${image}`} />}
      {/* Twitter */}
      {title && <meta name="twitter:title" content={siteTitle} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}
      {children}
    </Helmet>
  )
}
