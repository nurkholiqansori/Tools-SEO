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

const Layout = ({ children }) => {
  return (
    <Generic>
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
