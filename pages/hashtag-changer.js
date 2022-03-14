import React from 'react'
import LayoutPages from '../components/LayoutPages'
import {
  Box,
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
} from 'rbx'

const hashtagChanger = () => {
  const [phrase, setPhrase] = React.useState('')
  const [result, setResult] = React.useState('')
  const [loadingForm, setLoadingForm] = React.useState(false)
  const [smallCase, setSmallCase] = React.useState(false)
  const [warningNotification, setWarningNotification] = React.useState(false)
  const [warningMessage, setWarningMessage] = React.useState('')

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
      setWarningMessage('Your phrase doesn\'t meet our requirements')
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
    }
    //Closing
    setLoadingForm(false)
  }

  const resetForm = () => {
    setPhrase('')
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
            <Delete as='button' onClick={() => {
              setWarningNotification(false)
              setWarningMessage('')
              }} />
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
          <Title as='h2' size='5'>
            Result converting
          </Title>
          <Box>{result ? result : 'Results will be displayed here'}</Box>
        </Section>
      </Section>
    </LayoutPages>
  )
}

export default hashtagChanger
