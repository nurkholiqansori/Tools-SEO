import Link from 'next/link'
import { Section, Card, Content, Title } from 'rbx'
import Layout from '../components/Layout'

const Home = () => (
  <Layout>
    <Section>
      <Card>
        <Card.Content>
          <Content>
            <Link href='/comma-separator'>
              <a>
                <Title as='h3'>Comma Changer &rarr;</Title>
                <p>
                  Menambahkan koma pada setiap frasa
                </p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Content>
            <Link href='/hashtag-changer'>
              <a>
                <Title as='h3'>Hashtag Changer &rarr;</Title>
                <p>
                  Sebagai contoh <code>Jasa Pembuatan Website</code>, akan diubah menjadi <code>#JasaPembuatanWebsite</code> dan disediakan pengaturan hasilnya
                </p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card>
    </Section>
  </Layout>
)

export default Home
