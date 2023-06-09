import { addDays, formatISO } from "date-fns";
import { useSelector } from "react-redux";
import useReservationStore from "./useReservationStore";
import useFormStore from "./useFormStore";

const controlDates = () => {
  const { reservations } = useSelector((state) => state.reservation);
  const { setReservationsPerDay, setActiveResNull } = useReservationStore();
  const { setExcludeDateToState, setDatesToExclude } = useFormStore()



  const actualDay = () => {
    const today = new Date();
    const todayString = formatISO(today, { representation: "date" }); // Formatea la fecha de hoy como una cadena ISO yyyy-MM-dd
    const filtered = reservations.filter((obj) => {
      const dateString = formatISO(obj.fecha, { representation: "date" }); // Formatea la fecha del objeto como una cadena ISO yyyy-MM-dd
      return dateString === todayString; // Compara las cadenas
    });
    setReservationsPerDay(filtered);
    setDatesToExclude(today)
    setActiveResNull()
  };

  const secondDay = () => {
    const today = addDays(new Date(), 1);
    const todayString = formatISO(today, { representation: "date" }); // Formatea la fecha de hoy como una cadena ISO yyyy-MM-dd
    const filtered = reservations.filter((obj) => {
      const dateString = formatISO(obj.fecha, { representation: "date" }); // Formatea la fecha del objeto como una cadena ISO yyyy-MM-dd
      return dateString === todayString; // Compara las cadenas
    });
    setReservationsPerDay(filtered);
    setDatesToExclude(today)
    setActiveResNull()
  };

  const thirdDay = () => {
    const today = addDays(new Date(), 2);
    const todayString = formatISO(today, { representation: "date" }); // Formatea la fecha de hoy como una cadena ISO yyyy-MM-dd
    const filtered = reservations.filter((obj) => {
      const dateString = formatISO(obj.fecha, { representation: "date" }); // Formatea la fecha del objeto como una cadena ISO yyyy-MM-dd
      return dateString === todayString; // Compara las cadenas
    });
    setReservationsPerDay(filtered);
    setDatesToExclude(today)
    setActiveResNull()
  };

  const fourthDay = () => {
    const today = addDays(new Date(), 4);
    const todayString = formatISO(today, { representation: "date" }); // Formatea la fecha de hoy como una cadena ISO yyyy-MM-dd
    const filtered = reservations.filter((obj) => {
      const dateString = formatISO(obj.fecha, { representation: "date" }); // Formatea la fecha del objeto como una cadena ISO yyyy-MM-dd
      return dateString === todayString; // Compara las cadenas
    });
    setReservationsPerDay(filtered);
    setDatesToExclude(today)
    setActiveResNull()
  };

  const fifthDay = () => {
    const today = addDays(new Date(), 5);
    const todayString = formatISO(today, { representation: "date" }); // Formatea la fecha de hoy como una cadena ISO yyyy-MM-dd
    const filtered = reservations.filter((obj) => {
      const dateString = formatISO(obj.fecha, { representation: "date" }); // Formatea la fecha del objeto como una cadena ISO yyyy-MM-dd
      return dateString === todayString; // Compara las cadenas
    });
    setReservationsPerDay(filtered);
    setDatesToExclude(today)
    setActiveResNull()
  };

  return {
    actualDay,
    secondDay,
    thirdDay,
    fourthDay,
    fifthDay,
  };
};

export default controlDates;
