import { Button, Spacer, Flex } from '@chakra-ui/react'
import { NumberField } from './NumberField'
import { useTimerContext } from '../../TimerContext'
import { Timer } from './Timer'

const Set = () => {
  const { formFields, setFormFields } = useTimerContext();

  const handleSubmit = () => {
    console.log(formFields)
  }
  return <Flex direction="column" columnGap={12} alignContent="center" h="100%">
    <Timer />
    <NumberField label="prepare" setFields={setFormFields} />
    <NumberField label="work" setFields={setFormFields} />
    <NumberField label="rest" setFields={setFormFields} />
    <NumberField label="cycles" setFields={setFormFields} defaultVal={1} minimum={1} />
    <Spacer />
    <Button onClick={handleSubmit} size="lg" colorScheme="green">Submit</Button>
  </Flex>
}

export default Set