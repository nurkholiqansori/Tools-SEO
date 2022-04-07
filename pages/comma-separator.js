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
import { toast } from 'react-toastify'

const commaSeparator = () => {
  const [phrase, setPhrase] = React.useState('')
  const [result, setResult] = React.useState('')
  const [loadingForm, setLoadingForm] = React.useState(false)
  const [smallCase, setSmallCase] = React.useState(false)
  const [upperFirstCase, setUpperFirstCase] = React.useState(false)
  const router = useRouter()
  const resultState = React.useRef(null)
  const [successCopy, setSuccessCopy] = React.useState(false)
  const hasilRef = React.useRef(null)

  const submitHandler = () => {
    setLoadingForm(true)

    if (!phrase) {
      setLoadingForm(false)
      toast('Form harus terisi', { type: 'error' })
      return false
    }

    const searchSpecified = phrase.search('\n')
    if (searchSpecified === -1) {
      setLoadingForm(false)
      toast('Pisahkan frasa dengan enter', {
        type: 'error',
        autoClose: 2000,
      })
      return false
    }

    const newLineSearch = phrase.search(', ')
    if (newLineSearch !== -1) {
      setLoadingForm(false)
      toast('Pisahkan frasa dengan enter', {
        type: 'error',
      })
      return false
    }

    const phraseFilter = phrase.split('\n')
    const phraseArray2 = phraseFilter
      .filter((item) => item !== '')
    const phraseArray = phraseArray2.filter((item) => item !== ' ')

    if (smallCase) {
      const resultJoin = phraseArray.join(', ')
      setResult(resultJoin.toString().toLowerCase())
      hasilRef.current.scrollIntoView({ behavior: 'smooth' })
      return false
    } else {
      const resultJoin = phraseArray.join(', ')
      setResult(resultJoin.toString())
      hasilRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    if (upperFirstCase) {
      let upperGenerator = []
      phraseArray.forEach((el) => {
        const tempLoop = el.charAt(0).toUpperCase() + el.slice(1)
        upperGenerator.push(tempLoop)
      })
      const resultJoin = upperGenerator.join(', ')
      setResult(resultJoin.toString())
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
    <LayoutPages title='Comma Changer' url={router.pathname}>
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
                  if (e.target.value === 'first-big') {
                    setUpperFirstCase(true)
                     setSmallCase(false)
                  } else {
                    setUpperFirstCase(false)
                    setSmallCase(true)
                  }
                }}
              >
                <Select.Option>Tidak memilih pengaturan</Select.Option>
                <Select.Option value='first-big'>Huruf Pertama besar</Select.Option>
                <Select.Option value='all-small'>Huruf Kecil semua</Select.Option>
              </Select>
            </Select.Container>
          </Column>
        </Column.Group>
        <Message color='black'>
          <Message.Body>
            <strong>Format contoh:</strong>
            <br />
            jasa optimasi web Bekasi
            <br />
            jasa pembuatan web hotel Bekasi
            <br />
            jasa pembuatan web report Bekasi
            <br />
            jasa seo website bekasi
            <br />
            jasa web affiliasi Bekasi
            <br />
            jasa web donasi Bekasi
            <br />
            jasa web masjid Bekasi
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
        <Section ref={hasilRef}>
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

export default commaSeparator
