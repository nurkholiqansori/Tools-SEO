import {
  Generic,
  Container,
  Content,
  Footer,
} from 'rbx'
import NavBar from './Navbar'

const LayoutPages = ({ children }) => {
  return (
    <Generic>
      <NavBar />
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

export default LayoutPages
