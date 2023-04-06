import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { startSetingReservations } from "../store/ReservationPanel/reservationSlice";
import { db } from "../firebase/firebase";
import { useDispatch } from "react-redux";

const useReservationStore = () => {
  const dispatch = useDispatch();

  const setReservations = async () => {

    const collectionRef = collection(db, `reservations`);
    const docs = await getDocs(collectionRef);
    // como no nostraia el id creamos un array, le pusheamos un objeto que tiene el id y el resto
    // de la info de los documentos
    const cloudReservations = []
    docs.forEach(doc => {
      cloudReservations.push({id: doc.id, ...doc.data()})
    })
    dispatch(startSetingReservations({cloudReservations}));
  };

  return {
    setReservations,
  };
};

export default useReservationStore;
