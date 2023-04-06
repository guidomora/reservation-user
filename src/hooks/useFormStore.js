import { useDispatch, useSelector } from "react-redux";
import { startClearingReservation, startReservation } from "../store/journal/formSlice";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const useFormStore = () => {
  const dispatch = useDispatch();

  const createReservation = async ({ fecha, horario, cantidad, celular, displayName }) => {
    const newReservation = {
      fecha: fecha,
      horario: horario,
      cantidad: cantidad,
      celular: celular,
      nombre: displayName
    };

    const newDoc = doc(collection(db, `reservations`));
    await setDoc(newDoc, newReservation);
    newReservation.id = newDoc.id
    dispatch(startReservation(newReservation))
  };

  const clearReservation = () => {
    dispatch(startClearingReservation())
  }

  return {
    createReservation,
    clearReservation,
  };
};

export default useFormStore;
