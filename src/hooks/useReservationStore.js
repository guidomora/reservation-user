import { collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { settingNull, startDeletingReservationsPerDay, startLogout, startSetingReservations, startSettingActiveReservation, startSettingReservationsPerDay } from "../store/ReservationPanel/reservationSlice";
import { db } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";

const useReservationStore = () => {
  const dispatch = useDispatch();
  const {activeReservation} = useSelector(state => state.reservation)

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
    dispatch(startSettingReservationsPerDay(filter))
  }

  const setActiveReservation = (reservations) => {
    dispatch(startSettingActiveReservation(reservations))
  }

  const deleteReservationPerDay = async () => {
    dispatch(startDeletingReservationsPerDay(activeReservation.id))
    await deleteDoc(doc(db, `/reservations/${activeReservation.id}`));
    dispatch(settingNull())
  }

  const loginOut = () => {
    dispatch(startLogout())
  }

  const setActiveResNull = () => {
    dispatch(settingNull())
  }

  return {
    setReservations,
    setReservationsPerDay,
    setActiveReservation,
    deleteReservationPerDay,
    loginOut,
    setActiveResNull
  };
};

export default useReservationStore;
