import { useGetWorkflowStep, useGetWorkflowStepInput, useSetWorkflowStepOutput } from '@/lib/workflow'
import { Box, Button, Flex } from '@radix-ui/themes'
import { MouseEventHandler } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { StepConvert } from './StepConvert'

type Props = {
  position: number
}
export const ConvertArea = ({ position }: Props) => {
  const step = useGetWorkflowStep(position)
  const setOutput = useSetWorkflowStepOutput(position)
  const input = useGetWorkflowStepInput(position)

  if (step === undefined) {
    return (<></>)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    //TODO
    if (position > 0) {
      const text = input.replaceAll('a', 'b')
      setOutput(text)
    } else {
      const text = input.replaceAll('\n', '')
      setOutput(text)
    }
  }

  return (
    <>
      <Box mt='3' style={{ fontSize: '25px' }}>
        <Flex>
          <Box grow='0' shrink='0' style={{width: '100px', textAlign: 'center'}}>
            <FaArrowDown />
          </Box>
          <Box grow='1' shrink='1'>
            <Button onClick={handleClick}>{step.convert.name}</Button>
          </Box>
        </Flex>
      </Box>
      <StepConvert position={position} />
    </>
  )
}
