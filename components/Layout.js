import {
  Generic,
  Container,
  Content,
  Section,
  Hero,
  Title,
  Footer,
} from 'rbx'
import NavBar from './Navbar'
import { NextSeo } from 'next-seo'
import jasaWebSEO from '../images/jasawebseo.net.png'
import Image from 'next/image'


const Layout = ({ children }) => {
  return (
    <Generic>
      <NextSeo
        title='Beranda | Tools SEO'
        description='Alat untuk membantu pengerjaan SEO dengan masukkan yang tidak terbatas.'
        canonical='http://tools-seo.vercel.app/'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/images/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/images/logo.png',
            sizes: '76x76',
          },
        ]}
        openGraph={{
          url: `http://tools-seo.vercel.app`,
          title: `Beranda | Tools SEO`,
          description:
            'Alat untuk membantu pengerjaan SEO dengan masukkan yang tidak terbatas.',
          images: [
            {
              url: '/images/favicon.ico',
              width: 800,
              height: 600,
              alt: 'NKA icon',
            },
            {
              url: '/images/logo.png',
              width: 800,
              height: 600,
              alt: 'NKA logo',
            },
          ],
          site_name: `Beranda | Tools SEO`,
        }}
      />
      <NavBar />
      <Section backgroundColor='primary'>
        <Hero color='black'>
          <Hero.Body>
            <Container>
              <Title as='h1' align='center' color='white'>
                Selamat datang di Tools SEO
              </Title>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer>
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
            Presented by
            <br />
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

export default Layout
