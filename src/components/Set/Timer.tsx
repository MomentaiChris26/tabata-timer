import { useState, useEffect } from "react"
import { IFormFields } from "../../utils/types"
import { Center, Heading } from "@chakra-ui/react"
import { useTimerContext } from "../../TimerContext";

export const Timer = () => {
  const { minutes, seconds } = useTimerContext();

  return <Center>
    <Heading as="h1" size="6xl" py="8">
      {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
    </Heading>
  </Center>
}

