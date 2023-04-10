import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { startSetingReservations, startSettingActiveReservation, startSettingReservationsPerDay } from "../store/ReservationPanel/reservationSlice";
import { db } from "../firebase/firebase";
import { useDispatch } from "react-redux";

const useReservationStore = () => {
  const dispatch = useDispatch();

  const setReservations = async () => {

    const collectionRef = collection(db, `reservations`);
    const docs = await getDocs(collectionRef);
    const cloudReservations = []
    docs.forEach(doc => {
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
    dispatch(startSettingReservationsPerDay(filter))
  }

  const setActiveReservation = () => {
    dispatch(startSettingActiveReservation())
  }

  const deleteReservationPerDay = () => {

  }

  return {
    setReservations,
    setReservationsPerDay,
    setActiveReservation
  };
};

export default useReservationStore;
