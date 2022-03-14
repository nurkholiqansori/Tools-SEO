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

const commaSeparator = () => {
  const [phrase, setPhrase] = React.useState('')
  const [result, setResult] = React.useState('')
  const [loadingForm, setLoadingForm] = React.useState(false)
  const [smallCase, setSmallCase] = React.useState(false)
  const [warningNotification, setWarningNotification] = React.useState(false)
  const [warningMessage, setWarningMessage] = React.useState('')
  const router = useRouter()
  const resultState = React.useRef(null)
  const [successCopy, setSuccessCopy] = React.useState(false)
  const [upperFirstCase, setUpperFirstCase] = React.useState(false)

  const submitHandler = () => {
    setLoadingForm(true)

    if (!phrase) {
      setLoadingForm(false)
      setWarningMessage('Form harus terisi')
      setWarningNotification(true)
      return false
    }

    const searchSpecified = phrase.search('\n')
    if (searchSpecified === -1) {
      setLoadingForm(false)
      setWarningMessage('Format harus sesuai dengan contoh')
      setWarningNotification(true)
      return false
    }

    const newLineSearch = phrase.search(', ')
    if (newLineSearch !== -1) {
      setLoadingForm(false)
      setWarningMessage('Format harus sesuai dengan contoh')
      setWarningNotification(true)
      return false
    }

    const phraseArray = phrase.split('\n')
    if (smallCase) {
      const resultJoin = phraseArray.join(' ')
      setResult(resultJoin.toString().toLowerCase())
      router.push('#result')
      return false
    } else {
      const resultJoin = phraseArray.join(', ')
      setResult(resultJoin.toString())
      router.push('#result')
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
          <Column size='two-fifth'>
            <Select.Container rounded color='black'>
              <Select
                onChange={(e) => {
                  if (e.target.value === 'yes') {
                    setSmallCase(true)
                  } else {
                    setSmallCase(false)
                  }
                }}
              >
                <Select.Option>Huruf kecil semua?</Select.Option>
                <Select.Option value='yes'>Ya</Select.Option>
                <Select.Option value='no'>Tidak</Select.Option>
              </Select>
            </Select.Container>
          </Column>
          <Column size='one-fifth'>
            <Generic as='span'>
              <p style={{ textAlign: 'center' }}>Atau</p>
            </Generic>
          </Column>
          <Column>
            <Select.Container rounded color='black'>
              <Select
                onChange={(e) => {
                  if (e.target.value === 'yes') {
                    setUpperFirstCase(true)
                  } else {
                    setUpperFirstCase(false)
                  }
                }}
              >
                <Select.Option>Huruf pertama besar?</Select.Option>
                <Select.Option value='yes'>Ya</Select.Option>
                <Select.Option value='no'>Tidak</Select.Option>
              </Select>
            </Select.Container>
          </Column>
        </Column.Group>
        {warningNotification ? (
          <Notification color='danger'>
            <Delete
              as='button'
              onClick={() => {
                setWarningNotification(false)
                setWarningMessage('')
              }}
            />
            {warningMessage ? warningMessage : 'Ada yang error'}
          </Notification>
        ) : (
          ''
        )}
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
        <Section>
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
