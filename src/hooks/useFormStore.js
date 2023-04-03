import { useDispatch } from "react-redux"
import { startReservation } from "../store/journal/formSlice"


const useFormStore = () => {
    
    const dispatch = useDispatch()

    const createReservation = ({fecha, horario, cantidad}) => {
        dispatch(startReservation(fecha, horario, cantidad))
        console.log({fecha, horario, cantidad});
    }

  return {
    createReservation
  }
}

export default useFormStore