import { Button, Grid, Typography } from "@mui/material";
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

registerLocale("es", es);

const FirstForm = () => {
  const {
    fecha,
    horario,
    cantidad,
    inputChange,
    formState,
    setFormState,
  } = useForm({
    fecha: new Date(),
    horario: "",
    cantidad: "",
  });
  const { displayName } = useSelector((state) => state.auth);
  const { startLogout } = useAuthStore();
  const {createReservation} = useFormStore()

  const onDateChanged = (event, changing) => {
    setFormState({ ...formState, [changing]: event });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createReservation(formState)
    console.log(formState);
  };

  return (
    <form onSubmit={onSubmit}>
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
            <Button variant="contained" onClick={startLogout}>
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
              sx={{ backgroundColor: "secondary.main", fontFamily: "Jost" }}
              type="submit"
            >
              Siguiente
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default FirstForm;
