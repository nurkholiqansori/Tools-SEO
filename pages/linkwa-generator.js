import React from 'react'
import LayoutPages from '../components/LayoutPages'
import {
  Button,
  Control,
  Section,
  Textarea,
  Title,
  Message,
  Notification,
  Delete,
  Card,
  Field,
  Input,
} from 'rbx'
import { useRouter } from 'next/router'

const linkwaGenerator = () => {
  const [noTel, setNoTel] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [result, setResult] = React.useState('')
  const [loadingForm, setLoadingForm] = React.useState(false)
  const [warningNotification, setWarningNotification] = React.useState(false)
  const [warningMessage, setWarningMessage] = React.useState('')
  const router = useRouter()
  const resultState = React.useRef(null)
  const [successCopy, setSuccessCopy] = React.useState(false)
  const [noTelAfter, setNoTelAfter] = React.useState('')

  const submitHandler = () => {
    setLoadingForm(true)

    if (!noTel && !message) {
      setLoadingForm(false)
      setWarningMessage('Form harus terisi')
      setWarningNotification(true)
      return false
    }

    if (noTel) {
      const patternRegex = /(\+62|62|0)(\d+)$/gm

      const identifierNoTel = noTel.match(patternRegex)

      if (identifierNoTel === null) {
        setLoadingForm(false)
        setWarningMessage('Nomor tidak valid')
        setWarningNotification(true)
        return false
      }

      const noTelResult = identifierNoTel[0]

      if (noTelResult === '+') {
        setLoadingForm(false)
        setWarningMessage('Nomor tidak valid')
        setWarningNotification(true)
        return false
      }

      setNoTelAfter(noTelResult)

      if (noTelAfter.charAt(0) === '+') {
        const raw = noTelAfter.slice(1)
        setNoTelAfter(raw)
      }

      if (!message) {
        setResult('https://wa.me/' + noTelAfter)
        router.push('#result')
        setLoadingForm(false)
        return false
      }

      setLoadingForm(false)
      return false
    }

    if (!noTel) {
      setResult('https://wa.me/?text=' + message)
      router.push('#result')
      setLoadingForm(false)
      return false
    }
    return false
    setLoadingForm(false)
  }

  const resetForm = () => {
    setNoTel('')
    setMessage('')
    setNoTelAfter('')
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
    <LayoutPages title='Link WhatsApp Changer' url={router.pathname}>
      <Section>
        <Title as='h2' size='5'>
          Masukkan Nomor Telepon dan Pesan
        </Title>
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
            <strong>Note:</strong>
            <p>
              Bebas menggunakan nomor yang diawali 0 atau +62 atau 62 dan pesan
              bersifat opsional
            </p>
          </Message.Body>
        </Message>
        <Field>
          <Control loading={loadingForm}>
            <Input
              type='text'
              color='black'
              placeholder='088888888/+6288888888/62888888888'
              value={noTel}
              onChange={(e) => setNoTel(e.target.value)}
            />
          </Control>
        </Field>
        <Field>
          <Control loading={loadingForm}>
            <Textarea
              color='black'
              placeholder='Pesan (Opsional)'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Control>
        </Field>
        <Section>
          <Button.Group>
            <Button rounded color='black' onClick={() => submitHandler()}>
              Masukkan
            </Button>
            {noTel.length > 0 || message.length > 0 ? (
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

export default linkwaGenerator
