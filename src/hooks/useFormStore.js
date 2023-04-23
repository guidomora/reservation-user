import { useDispatch } from "react-redux";
import { excludingDate, startClearingReservation, startReservation, startSetingReservations, startSettingReservationsDay } from "../store/journal/formSlice";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
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
  const setReservations = async () => {
    const collectionRef = await getDocs(collection(db, `reservations`)) ;
    const cloudReservations = []
    collectionRef.forEach(doc => {
      cloudReservations.push({id: doc.id, 
        fecha: doc.data().fecha.toDate(), 
        nombre: doc.data().nombre, 
        celular: doc.data().celular,
        horario: doc.data().horario,
        cantidad: doc.data().cantidad 
      })
    })
    dispatch(startSetingReservations({cloudReservations}));
  };

  const setReservationsPerDay = (filter) => {
    dispatch(startSettingReservationsDay(filter))
  };

  const setExcludeDateToState = async(reservationDate) => {
    const newStoppedDate = {reservationDate}
    const newDoc = doc(collection(db, `stoppedReservations`));
    await setDoc(newDoc, newStoppedDate);
    newStoppedDate.id = newDoc.id
    
  }

  const getExcludeDate = async () => {
    const collectionRef = await getDocs(collection(db, `stoppedReservations`)) ;
    const cloudStoppedReservations = []
    collectionRef.forEach(doc => {
      cloudStoppedReservations.push(
        doc.data().reservationDate.toDate(), 
      )
    })
    dispatch(excludingDate(cloudStoppedReservations))
  }

  return {
    createReservation,
    clearReservation,
    setReservations,
    setReservationsPerDay,
    setExcludeDateToState,
    getExcludeDate
  };
};

export default useFormStore;
