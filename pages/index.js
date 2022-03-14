import Link from 'next/link'
import { Section, Card, Content, Title } from 'rbx'
import Layout from '../components/Layout'

const Home = () => (
  <Layout>
    <Section>
      <Card>
        <Card.Content>
          <Content>
            <Link href='/hashtag-changer'>
              <a>
                <Title as="h3">Hashtag Changer &rarr;</Title>
                <p>For Example Jasa Pembuatan Website, will changer to #JasaPembuatanWebsite or more settings</p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card>
      {/* <Card>
        <Card.Content>
          <Content>
            <Link href="https://github.com/vercel/next.js/tree/canary/examples">
              <a>
                <Title as="h3">Examples &rarr;</Title>
                <p>
                  Find other example boilerplates on the{' '}
                  <code>create-next-app</code> site
                </p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Content>
            <Link href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app">
              <a>
                <Title as="h3">Create Next App &rarr;</Title>
                <p>Was this tool helpful? Let us know how we can improve it</p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card> */}
    </Section>
  </Layout>
)

export default Home
