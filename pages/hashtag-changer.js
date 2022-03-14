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
} from 'rbx'

const hashtagChanger = () => {
  const [phrase, setPhrase] = React.useState('')
  const [result, setResult] = React.useState('')
  const [loadingForm, setLoadingForm] = React.useState(false)
  const [smallCase, setSmallCase] = React.useState(false)
  console.log(smallCase);

  const submitHandler = () => {
    setLoadingForm(true)
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
              <Select onChange={(e) => {
                if (e.target.value === 'yes') {
                  setSmallCase(true)
                } else {
                  setSmallCase(false)
                }
              }}>
                <Select.Option>Small case?</Select.Option>
                <Select.Option value='yes'>
                  Yes
                </Select.Option>
                <Select.Option value='no'>
                  No
                </Select.Option>
              </Select>
            </Select.Container>
          </Column>
        </Column.Group>
        <Control loading={loadingForm}>
          <Textarea
            rows={10}
            placeholder='10 lines of textarea'
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
          <Box>
            Dolore et Lorem nostrud amet officia cupidatat tempor sunt sunt
            sint. Ullamco nulla veniam est ad qui consectetur eu laborum duis
            elit incididunt. Nulla minim esse consequat exercitation consectetur
            labore non pariatur et est nulla elit excepteur fugiat. Laboris sit
            in ut veniam ipsum aliqua amet sint ad in fugiat exercitation. Est
            ad ullamco voluptate fugiat ut reprehenderit sit aliquip velit
            consequat excepteur ipsum magna id. Esse labore sunt reprehenderit
            excepteur duis duis quis ex anim veniam.
          </Box>
        </Section>
      </Section>
    </LayoutPages>
  )
}

export default hashtagChanger
