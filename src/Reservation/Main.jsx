import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { addDays } from "date-fns";
import { es } from "date-fns/locale";
import React from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import "../App.css";
import useAuthStore from "../hooks/useAuthStore";
import useForm from "../hooks/useForm";
import useFormStore from "../hooks/useFormStore";
import Swal from "sweetalert2";

registerLocale("es", es);

const Main = () => {
  const {
    fecha,
    horario,
    cantidad,
    celular,
    inputChange,
    formState,
    setFormState,
  } = useForm({
    fecha: new Date(),
    horario: "",
    celular: "",
    cantidad: "",
  });
  const { displayName, uid } = useSelector((state) => state.auth);
  const { reserved } = useSelector(state => state.form)
  const { startLogout } = useAuthStore();
  const { createReservation, clearReservation } = useFormStore()


  const onDateChanged = (event, changing) => {
    setFormState({ ...formState, [changing]: event });
  };

  const sweet = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Reserva realizada con exito!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    await createReservation({ fecha, horario, cantidad, celular, displayName })
    sweet()
  };

  const clearAll = async () => {
    await startLogout()
    clearReservation()
  }

  return (
    <form onSubmit={onSubmit} className='animate__animated animate__fadeIn'>
      <Grid
        display={"flex"}
        flexDirection={"col"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"solid 1px #C4C4C4"}
        borderRadius={4}
        sx={{ height: 500, width: 500, backgroundColor: "#edf6f9" }}
      >
        <Grid>
          <Grid display={"flex"}>
            <Button variant="contained" onClick={clearAll}>
              Cerrar sesion
            </Button>
          </Grid>
          <Typography
            variant="h1"
            sx={{ fontFamily: "Jost" }}
            fontSize={25}
            mt={3}
          >
            Reservar una mesa : {displayName}
          </Typography>
          <Grid mt={3}>
            <Typography variant="p" sx={{ fontFamily: "Jost" }}>
              Seleccione fecha
            </Typography>
            <ReactDatePicker
              locale="es"
              dateFormat="P"
              minDate={new Date()}
              maxDate={addDays(new Date(), 4)}
              selected={fecha}
              onChange={(event) => onDateChanged(event, "fecha")}
            />
          </Grid>
          <Grid mt={2}>
            <Typography variant="p" sx={{ fontFamily: "Jost" }}>
              Celular
            </Typography>
            <TextField
              type="number"
              name="celular"
              fullWidth
              onChange={inputChange}
              value={celular}
              variant="outlined"
              size="small"
              sx={{backgroundColor: "white"}}
            />
          </Grid>
          <Grid mt={3}>
            <Typography variant="p" sx={{ fontFamily: "Jost" }}>
              Seleccione horario
            </Typography>
            <select
              id="inputState"
              className="form-select"
              name="horario"
              onChange={inputChange}
              value={horario}
            >
              <option value={"20"}>20hs</option>
              <option value={"21"}>21hs</option>
              <option value={"22"}>22hs</option>
            </select>
          </Grid>
          <Grid mt={3}>
            <Typography variant="p" sx={{ fontFamily: "Jost" }}>
              Cantidad de personas
            </Typography>
            <select
              id="inputState"
              className="form-select"
              name="cantidad"
              onChange={inputChange}
              value={cantidad}
            >
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
              <option value={"6"}>6</option>
            </select>
          </Grid>
          <Grid mt={3}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "primary.main", fontFamily: "Jost" }}
              type="submit"
              disabled={reserved}
            >
              Reservar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Main;