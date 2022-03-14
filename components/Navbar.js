import React from 'react'
import { Navbar, Title, Field, Control, Button, Icon } from 'rbx'

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
            <Navbar.Item href='/'>Beranda</Navbar.Item>
            <Navbar.Item dropdown hoverable>
              <Navbar.Link href='https://bulma.io/documentation/overview/start/'>
                Alat
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href='/comma-separator'>Comma Changer</Navbar.Item>
                <Navbar.Item href='/hashtag-changer'>
                  Hashtag Changer
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Segment>
          <Navbar.Segment align='end'>
            <Navbar.Item as='div'>
              <Field kind='group'>
                <Control>
                  <Button
                    as='a'
                    color='primary'
                    href='https://www.nurkholiqansori.me'
                    rounded
                  >
                    <span>Website saya</span>
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
