import React from 'react'
import LayoutPages from '../components/LayoutPages'
import {
  Button,
  Column,
  Control,
  Section,
  Textarea,
  Title,
  Select,
  Message,
  Notification,
  Delete,
  Card,
  Generic,
} from 'rbx'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { toast } from 'react-toastify'

const hashtagChanger = () => {
  const [phrase, setPhrase] = React.useState('')
  const [result, setResult] = React.useState('')
  const [loadingForm, setLoadingForm] = React.useState(false)
  const [smallCase, setSmallCase] = React.useState(false)
  const [warningNotification, setWarningNotification] = React.useState(false)
  const [warningMessage, setWarningMessage] = React.useState('')
  const router = useRouter()
  const resultState = React.useRef(null)
  const [successCopy, setSuccessCopy] = React.useState(false)
  const resultRef = React.useRef(null)

  const submitHandler = () => {
    setLoadingForm(true)

    if (!phrase) {
      setLoadingForm(false)
      toast('Form harus terisi', { type: 'error' })
      return false
    }

    const newLineSearch = phrase.search('\n')
    if (newLineSearch !== -1) {
      setLoadingForm(false)
      toast('Gunakan enter untuk memisahkan hashtag', {
        type: 'error',
      })
      return false
    }

    const phraseArray = phrase.split(', ')
    const hashtag = '#'
    if (smallCase) {
          const searchSpecified = phrase.search(', ')
          if (searchSpecified === -1) {
            setLoadingForm(false)
            const result = phrase.replace(/ /g, '')
            setResult('#' + result.toLowerCase())
            resultRef.current.scrollIntoView({
              behavior: 'smooth',
            })
            return false
          }
      let resultPhrase = []
      phraseArray.forEach((el) => {
        const selectionArray = hashtag.concat(el)
        const splitArray = selectionArray.split(' ')
        const joinArray = splitArray.join('')
        resultPhrase.push(joinArray)
      })
      const resultJoin = resultPhrase.join(' ')
      setResult(resultJoin.toString().toLowerCase())
      resultRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    } else {
      const searchSpecified = phrase.search(', ')
      if (searchSpecified === -1) {
        setLoadingForm(false)
        const result = phrase.replace(/ /g, '')
        setResult('#' + result.toLowerCase())
        resultRef.current.scrollIntoView({
          behavior: 'smooth',
        })
        return false
      }
      let resultPhrase = []
      phraseArray.forEach((el) => {
        const selectionArray = hashtag.concat(el)
        const splitArray = selectionArray.split(' ')
        const joinArray = splitArray.join('')
        resultPhrase.push(joinArray)
      })
      const resultJoin = resultPhrase.join(' ')
      setResult(resultJoin.toString())
      resultRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
    //Closing
    setLoadingForm(false)
  }

  const resetForm = () => {
    setPhrase('')
    setResult('')
  }

  const copyResult = () => {
    navigator.clipboard.writeText(resultState.current.innerText)
    setSuccessCopy(true)
    setInterval(() => {
      setSuccessCopy(false)
    }, 2000)
  }

  return (
    <LayoutPages title='Hashtag Changer' url={router.pathname}>
      <Section>
        <Title as='h2' size='5'>
          Masukkan frasa
        </Title>
        <Column.Group>
          <Column size='one-fifth'>
            <Title as='h3' size='6'>
              Pengaturan untuk hasilnya:{' '}
            </Title>
          </Column>
          <Column>
            <Select.Container rounded color='black'>
              <Select
                onChange={(e) => {
                  if (e.target.value === 'all-small') {
                    setSmallCase(true)
                  } else {
                    setSmallCase(false)
                  }
                }}
              >
                <Select.Option>Tidak memilih pengaturan</Select.Option>
                <Select.Option value='all-small'>Huruf kecil semua</Select.Option>
              </Select>
            </Select.Container>
          </Column>
        </Column.Group>
        <Message color='black'>
          <Message.Body>
            <strong>Catatan:</strong>
            <br />
            Setiap frasa, harus dibatasi dengan koma
            <br />
            Format contoh:
            <br />
            <code>
              Jasa optimasi web Bekasi, Jasa pembuatan web hotel Bekasi, Jasa
              pembuatan web report Bekasi, Jasa seo website bekasi, Jasa web
              affiliasi Bekasi, Jasa web donasi Bekasi, Jasa web masjid Bekasi
            </code>
            <br />
            Atau bisa menggunakan{' '}
            <Link href='/comma-separator' title='Comma Separator'>
              alat dari kami
            </Link>
          </Message.Body>
        </Message>
        <Control loading={loadingForm}>
          <Textarea
            rows={10}
            placeholder='Frasa tidak terbatas'
            color='black'
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
        </Control>
        <Section>
          <Button.Group>
            <Button rounded color='black' onClick={() => submitHandler()}>
              Masukkan
            </Button>
            {phrase.length > 0 ? (
              <Button rounded color='black' onClick={() => resetForm()}>
                Reset
              </Button>
            ) : (
              ''
            )}
          </Button.Group>
        </Section>
        <Section ref={resultRef}>
          <Card>
            <Card.Header>
              <Card.Header.Title>Hasil pengubahan</Card.Header.Title>
              <Card.Header.Icon>
                {result ? (
                  <>
                    <Button
                      tooltip='Success'
                      tooltipMultiline
                      tooltipActive
                      rounded
                      color='black'
                      onClick={() => copyResult()}
                    >
                      {successCopy ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24px'
                          height='24px'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='white'
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24px'
                          height='24px'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='white'
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                          />
                        </svg>
                      )}
                    </Button>
                  </>
                ) : (
                  ''
                )}
              </Card.Header.Icon>
            </Card.Header>
            <Card.Content ref={resultState}>
              {result ? result : 'Hasil akan ditampilkan disini'}
            </Card.Content>
          </Card>
        </Section>
      </Section>
    </LayoutPages>
  )
}

export default hashtagChanger
