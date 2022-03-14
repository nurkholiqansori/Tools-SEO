import {
  Generic,
  Container,
  Content,
  Footer,
} from 'rbx'
import NavBar from './Navbar'
import { NextSeo } from 'next-seo'

const LayoutPages = ({ title, url, children }) => {
  return (
    <Generic>
      <NextSeo
        title={`${title} | Tools SEO`}
        description='Alat untuk membantu pengerjaan SEO dengan masukkan yang tidak terbatas.'
        canonical='http://tools-seo.vercel.app'
        openGraph={{
          url: `http://tools-seo.vercel.app${url}`,
          title: `${title} | Tools SEO`,
          description:
            'Alat untuk membantu pengerjaan SEO dengan masukkan yang tidak terbatas.',
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

export default LayoutPages
