import { ThemeOptionType } from "./components/Board";
import { 
  Lumiflex,
  Novatrix,
  
  Tranquiluxe,
  Velustro
} from 'uvcanvas'

export const themes: ThemeOptionType[] = [
  {
    id: 'lumiflex',
    component: <Lumiflex />,
  },
  {
    id: 'novatrix',
    component: <Novatrix />,
  },
  {
    id: 'velustro',
    component: <Velustro />,
  },
 
  {
    id: 'tranquiluxe',
    component: <Tranquiluxe />,
  },
  {
    id: 'none',
    component: <></>,
  }
]
