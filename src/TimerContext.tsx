import { createContext, useState, useContext, Dispatch, SetStateAction, useEffect } from 'react';
import { IFormFields } from './utils/types';

interface Props {
  children: React.ReactNode;
}

interface ITimerContext {
  timer: number
  formFields: IFormFields
  setFormFields: Dispatch<SetStateAction<IFormFields>>
  minutes: number
  seconds: number
}

const TimerContext = createContext<ITimerContext>({
  timer: 0,
  formFields: {
    prepare: 0,
    work: 0,
    rest: 0,
    cycles: 0
  },
  setFormFields: () => { },
  minutes: 0,
  seconds: 0
});

export const useTimerContext = () => useContext(TimerContext);

const TimerProvider: React.FC<Props> = ({ children }) => {
  const [timer, setTimer] = useState(0);
  const [formFields, setFormFields] = useState({
    prepare: 0,
    work: 0,
    rest: 0,
    cycles: 0
  })
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const { prepare, work, rest, cycles } = formFields
    const total = prepare + ((work + rest) * cycles)
    setMinutes(parseInt(Math.floor(total / 60).toString().padStart(2, '0')))
    setSeconds(parseInt(Math.floor(total % 60).toString().padStart(2, '0')))
  }, [formFields])

  const timerContextValues = {
    timer,
    formFields,
    setFormFields,
    minutes,
    seconds
  }

  return (
    <TimerContext.Provider value={timerContextValues}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
