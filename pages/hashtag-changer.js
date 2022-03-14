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

  const submitHandler = () => {
    setLoadingForm(true)

    if (!phrase) {
      setLoadingForm(false)
      setWarningMessage('Form must be filled')
      setWarningNotification(true)
      return false
    }

    const searchSpecified = phrase.search(', ')
    if (searchSpecified === -1) {
      setLoadingForm(false)
      setWarningMessage("Your phrase doesn't meet our requirements")
      setWarningNotification(true)
      return false
    }

    const newLineSearch = phrase.search('\n')
    if (newLineSearch !== -1) {
      setLoadingForm(false)
      setWarningMessage("Your phrase doesn't meet our requirements")
      setWarningNotification(true)
      return false
    }

    const phraseArray = phrase.split(', ')
    const hashtag = '#'
    if (smallCase) {
      let resultPhrase = []
      phraseArray.forEach((el) => {
        const selectionArray = hashtag.concat(el)
        const splitArray = selectionArray.split(' ')
        const joinArray = splitArray.join('')
        resultPhrase.push(joinArray)
      })
      const resultJoin = resultPhrase.join(' ')
      setResult(resultJoin.toString().toLowerCase())
      router.push('#result')
    } else {
      let resultPhrase = []
      phraseArray.forEach((el) => {
        const selectionArray = hashtag.concat(el)
        const splitArray = selectionArray.split(' ')
        const joinArray = splitArray.join('')
        resultPhrase.push(joinArray)
      })
      const resultJoin = resultPhrase.join(' ')
      setResult(resultJoin.toString())
      router.push('#result')
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
    <LayoutPages>
      <Section>
        <Title as='h2' size='5'>
          Submit the phrase
        </Title>
        <Column.Group>
          <Column size='one-fifth'>
            <Title as='h3' size='6'>
              Settings for result:{' '}
            </Title>
          </Column>
          <Column>
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
                <Select.Option>Small case?</Select.Option>
                <Select.Option value='yes'>Yes</Select.Option>
                <Select.Option value='no'>No</Select.Option>
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
            {warningMessage ? warningMessage : 'Something Error'}
          </Notification>
        ) : (
          ''
        )}
        <Message color='black'>
          <Message.Body>
            <strong>Note:</strong>
            <br />
            For each phrase, it must be delimited by a comma <br />
            Can use{' '}
            <a href='/comma-separator' title='Comma Separator'>
              our tool
            </a>
          </Message.Body>
        </Message>
        <Control loading={loadingForm}>
          <Textarea
            rows={10}
            placeholder='Unlimited of Phrase'
            color='black'
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
        </Control>
        <Section>
          <Button.Group>
            <Button rounded color='black' onClick={() => submitHandler()}>
              Submit
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
              <Card.Header.Title>Result converting</Card.Header.Title>
              <Card.Header.Icon>
                {result ? (
                  <>
                    <Button
                      tooltip='Success'
                      tooltipMultiline
                      tooltipActive
                      rounded
                      color='black'
                      onClick={() =>
                        copyResult()
                      }
                    >
                      {successCopy ? <svg
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
                      </svg> :
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
                      </svg>}
                    </Button>
                  </>
                ) : (
                  ''
                )}
              </Card.Header.Icon>
            </Card.Header>
            <Card.Content ref={resultState}>
              {result ? result : 'Results will be displayed here'}
            </Card.Content>
          </Card>
        </Section>
      </Section>
    </LayoutPages>
  )
}

export default hashtagChanger
