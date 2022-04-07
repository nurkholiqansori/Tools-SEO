import React from 'react'
import LayoutPages from '../components/LayoutPages'
import {
  Button,
  Control,
  Section,
  Textarea,
  Title,
  Message,
  Card,
  Field,
  Input,
} from 'rbx'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const linkwaGenerator = () => {
  const [noTel, setNoTel] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [result, setResult] = React.useState('')
  const [loadingForm, setLoadingForm] = React.useState(false)
  const router = useRouter()
  const resultState = React.useRef(null)
  const [successCopy, setSuccessCopy] = React.useState(false)
  const [noTelAfter, setNoTelAfter] = React.useState('')
  const resultRef = React.useRef(null)

  const submitHandler = () => {
    setLoadingForm(true)

    if (!noTel && !message) {
      setLoadingForm(false)
      toast('Form harus terisi', { type: 'error' })
      return false
    }

    if (noTel) {
      const patternRegex = /(\+62|62|0)(\d+)$/gm

      const identifierNoTel = noTel.match(patternRegex)

      if (identifierNoTel === null) {
        setLoadingForm(false)
        toast('No telpon harus diawali dengan +62, 62, atau 0', {
          type: 'error',
        })
        return false
      }

      let noTelResult = identifierNoTel[0]

      if (noTelResult === '+') {
        setLoadingForm(false)
        toast('No telpon harus diawali dengan +62, 62, atau 0', {
          type: 'error',
        })
        return false
      }

      if (noTelResult.charAt(0) === '+') {
        const raw = noTelResult.slice(1)
        noTelResult = raw
      }

      if (!message) {
        setResult('https://wa.me/' + noTelResult)
        resultRef.current.scrollIntoView({
          behavior: 'smooth',
        })
        setLoadingForm(false)
        return false
      }

      const encodeMessage = encodeURIComponent(message)

      setResult('https://wa.me/' + noTelResult + '/?text=' + encodeMessage)
      resultRef.current.scrollIntoView({
        behavior: 'smooth',
      })
      setLoadingForm(false)
      return false
    }

    if (!noTel) {
      const encodeMessage = encodeURIComponent(message)
      setResult('https://wa.me/?text=' + encodeMessage)
      resultRef.current.scrollIntoView({
        behavior: 'smooth',
      })
      setLoadingForm(false)
      return false
    }
    setLoadingForm(false)
    return false
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
        <Message color='black'>
          <Message.Body>
            <strong>Note:</strong>
            <p>
              Bebas menggunakan nomor yang diawali 0 atau +62 atau 62 atau nomor
              dikosongkan{' '}
              <small>
                <i>(Hanya mengisi pesan saja)</i>
              </small>{' '}
              dan pesan dapat dikosongkan juga{' '}
              <small>
                <i>(Hanya mengisi nomor saja)</i>
              </small>
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
        <Section ref={resultRef}>
          <Card>
            <Card.Header>
              <Card.Header.Title>Hasil pengubahan</Card.Header.Title>
              {result ? (
                <Card.Header.Icon>
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
                </Card.Header.Icon>
              ) : (
                ''
              )}
            </Card.Header>
            <Card.Content ref={resultState}>
              {result ? result : 'Hasil akan ditampilkan disini'}
            </Card.Content>
            {result ? (
              <Card.Footer as='footer'>
                <Card.Footer.Item as='span'>
                  <>
                    <a href={result} target='_blank' rel='noopener noreferrer'>
                      <Button
                        tooltip='Success'
                        tooltipMultiline
                        tooltipActive
                        rounded
                        color='black'
                      >
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
                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                          />
                        </svg>
                      </Button>
                    </a>
                  </>
                </Card.Footer.Item>
              </Card.Footer>
            ) : (
              ''
            )}
          </Card>
        </Section>
      </Section>
    </LayoutPages>
  )
}

export default linkwaGenerator
