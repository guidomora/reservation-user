import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { startSetingReservations } from "../store/ReservationPanel/reservationSlice";
import { db } from "../firebase/firebase";
import { useDispatch } from "react-redux";

const useReservationStore = () => {
  const dispatch = useDispatch();

  const setReservations = async () => {

    const docRef = doc(db, "reservations", "user-reservation");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().array.forEach(element => {
        element
      })
      );
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    

    dispatch(startSetingReservations());
  };

  return {
    setReservations,
  };
};

export default useReservationStore;
