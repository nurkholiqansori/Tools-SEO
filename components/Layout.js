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

const Layout = ({ children }) => {
  return (
    <Generic>
      <NextSeo
        title='Beranda | Tools SEO'
        description='Alat untuk membantu pengerjaan SEO dengan masukkan yang tidak terbatas.'
        canonical= 'http://tools-seo.vercel.app/'
        openGraph={{
          url: 'http://tools-seo.vercel.app/',
          title: 'Beranda | Tools SEO',
          description:
            'Alat untuk membantu pengerjaan SEO dengan masukkan yang tidak terbatas.',
          site_name: 'Beranda | Tools SEO',
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
              href='htpps://www.nurkholiqansori.me'
              title='Nur Kholiq Ansori Website'
              target='_blank'
              rel='noopener noreferrer'
            >
              Nur Kholiq Ansori
            </a>{' '}
            All rights reserved.
          </p>
        </Content>
      </Footer>
    </Generic>
  )
}

export default Layout
