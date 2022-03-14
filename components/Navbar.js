import React from 'react'
import { Navbar, Title, Field, Control, Button } from 'rbx'

const NavBar = () => {
  return (
    <>
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
                <Navbar.Item href='/hashtag-changer'>
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
    </>
  )
}

export default NavBar
