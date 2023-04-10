import { addDays, formatISO } from 'date-fns'
import { useSelector } from 'react-redux';
import useReservationStore from './useReservationStore';

const controlDates = () => {
    const { reservations } = useSelector(state => state.reservation)
    const {setReservationsPerDay} = useReservationStore()

    const actualDay = () => {
        const today = new Date();
        const todayString = formatISO(today, { representation: 'date' }); // Formatea la fecha de hoy como una cadena ISO yyyy-MM-dd
        const filtered = reservations.filter(obj => {
          const dateString = formatISO(obj.fecha, { representation: 'date' }); // Formatea la fecha del objeto como una cadena ISO yyyy-MM-dd
          return dateString === todayString; // Compara las cadenas
        });
        console.log(filtered);
      }

    const secondDay = () => {
        const today = addDays( new Date(), 1);
        const todayString = formatISO(today, { representation: 'date' }); // Formatea la fecha de hoy como una cadena ISO yyyy-MM-dd
        const filtered = reservations.filter(obj => {
          const dateString = formatISO(obj.fecha, { representation: 'date' }); // Formatea la fecha del objeto como una cadena ISO yyyy-MM-dd
          return dateString === todayString; // Compara las cadenas
        });
        setReservationsPerDay(filtered)
        console.log(filtered);
      }

    const thirdDay = () => {
        const today = addDays( new Date(), 2);
        const todayString = formatISO(today, { representation: 'date' }); // Formatea la fecha de hoy como una cadena ISO yyyy-MM-dd
        const filtered = reservations.filter(obj => {
          const dateString = formatISO(obj.fecha, { representation: 'date' }); // Formatea la fecha del objeto como una cadena ISO yyyy-MM-dd
          return dateString === todayString; // Compara las cadenas
        });
        console.log(filtered);
      }
    
      const fourthDay = () => {
        const today = addDays( new Date(), 4);
        const todayString = formatISO(today, { representation: 'date' }); // Formatea la fecha de hoy como una cadena ISO yyyy-MM-dd
        const filtered = reservations.filter(obj => {
          const dateString = formatISO(obj.fecha, { representation: 'date' }); // Formatea la fecha del objeto como una cadena ISO yyyy-MM-dd
          return dateString === todayString; // Compara las cadenas
        });
        console.log(filtered);
      }
    
      const fifthDay = () => {
        const today = addDays( new Date(), 5);
        const todayString = formatISO(today, { representation: 'date' }); // Formatea la fecha de hoy como una cadena ISO yyyy-MM-dd
        const filtered = reservations.filter(obj => {
          const dateString = formatISO(obj.fecha, { representation: 'date' }); // Formatea la fecha del objeto como una cadena ISO yyyy-MM-dd
          return dateString === todayString; // Compara las cadenas
        });
        console.log(filtered);
      }

  return {
    actualDay,
    secondDay,
    thirdDay,
    fourthDay,
    fifthDay,
    
  }
}

export default controlDates