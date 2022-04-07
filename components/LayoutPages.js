import { Generic, Container, Content, Footer } from 'rbx'
import NavBar from './Navbar'
import { LogoJsonLd, NextSeo } from 'next-seo'
import jasaWebSEO from '../images/jasawebseo.net.png'
import favicon from '../images/favicon.ico'
import logo from '../images/logo.png'

import Image from 'next/image'

const LayoutPages = ({ title, url, children }) => {
  return (
    <Generic>
      <NextSeo
        title={`${title} | Tools SEO`}
        description='Alat untuk membantu pengerjaan SEO dengan masukkan yang tidak terbatas.'
        canonical='http://tools-seo.vercel.app'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://tools-seo.vercel.app/images/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: 'https://tools-seo.vercel.app/images/logo.png',
            sizes: '76x76',
          },
        ]}
        openGraph={{
          url: `http://tools-seo.vercel.app${url}`,
          title: `${title} | Tools SEO`,
          description:
            'Alat untuk membantu pengerjaan SEO dengan masukkan yang tidak terbatas.',
          images: [
            {
              url: 'https://tools-seo.vercel.app/images/logo.png',
              width: 800,
              height: 600,
              alt: 'NKA icon',
            },
            {
              url: 'https://tools-seo.vercel.app/images/logo.png',
              width: 800,
              height: 600,
              alt: 'NKA logo',
            },
          ],
          site_name: `${title} | Tools SEO`,
        }}
      />
      <NavBar />
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer id='result'>
        <Content textAlign='centered'>
          <p>
            &copy;{' '}
            <a
              href='https://www.nurkholiqansori.me'
              title='Nur Kholiq Ansori Website'
              target='_blank'
              rel='noopener noreferrer'
            >
              Nur Kholiq Ansori
            </a>{' '}
            All rights reserved.
          </p>
          <p>
            Presented by <br />
            <br />
            <a
              href='https://jasawebseo.net'
              title='Jasa Web SEO'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={jasaWebSEO} priority />
            </a>
          </p>
        </Content>
      </Footer>
    </Generic>
  )
}

export default LayoutPages
