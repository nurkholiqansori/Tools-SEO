import Link from 'next/link'
import {
  Generic,
  Container,
  Content,
  Navbar,
  Section,
  Hero,
  Title,
  Footer,
  Field,
  Control,
  Button,
} from 'rbx'

const LayoutPages = ({ children }) => {
  return (
    <Generic>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item href='/'>
            <Title as='h1' size='4'>
              Tools SEO
            </Title>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align='start'>
            <Navbar.Item href='/'>Home</Navbar.Item>
            <Navbar.Item dropdown hoverable>
              <Navbar.Link href='https://bulma.io/documentation/overview/start/'>
                Tools
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href='https://bulma.io/documentation/overview/start/'>
                  Hashtag Changer
                </Navbar.Item>
                <Navbar.Item href='https://bulma.io/documentation/modifiers/syntax/'>
                  Modifiers
                </Navbar.Item>
                <Navbar.Item href='https://bulma.io/documentation/columns/basics/'>
                  Columns
                </Navbar.Item>
                <Navbar.Item href='https://bulma.io/documentation/layout/container/'>
                  Layout
                </Navbar.Item>
                <Navbar.Item href='https://bulma.io/documentation/form/general/'>
                  Form
                </Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item href='https://bulma.io/documentation/elements/box/'>
                  Elements
                </Navbar.Item>
                <Navbar.Item
                  active
                  href='https://bulma.io/documentation/components/breadcrumb/'
                >
                  Components
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Segment>
          <Navbar.Segment align='end'>
            <Navbar.Item as='div'>
              <Field kind='group'>
                <Control>
                  <Button as='a' color='info' href='https://twitter.com'>
                    <span>Tweet</span>
                  </Button>
                </Control>
                <Control>
                  <Button
                    as='a'
                    color='primary'
                    href='https://github.com/dfee/rbx'
                  >
                    <span>GitHub</span>
                  </Button>
                </Control>
              </Field>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
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
