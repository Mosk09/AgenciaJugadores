import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "../modules/CrearJugador.module.css";
import { crearDestacado, getDestacados } from "../redux/actions";
import swal from "sweetalert";

export default function CrearDestacado() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  return (
    <div className={s.bordeForm}>
      <Formik
        validationSchema={Yup.object({
          nombre: Yup.string().required("El nombre es Requerido"),
          puntos: Yup.number(),
          asist: Yup.number(),
          reb: Yup.number(),
          val: Yup.number(),
        })}
        initialValues={{
          nombre: "",
          puntos: 0,
          asist: 0,
          reb: 0,
          val: 0,
          imagen: [],
        }}
        onSubmit={async (values, actions) => {
          const willDelete = await swal({
            title: "Estas seguro?",
            text: "Estas seguro de Crear este Destacado?",
            icon: "info",
            // dangerMode: true,
            buttons: ["No", "Si"],
          });
          if (willDelete) {
            await dispatch(crearDestacado(values));
            await dispatch(getDestacados());
            swal("Un lujo!", "Nuevo Destacado Creado", "success");
          }
          actions.resetForm();
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form className={s.divform} onSubmit={handleSubmit}>
            <label>
              Nombre
              <Field
                className={s.input}
                type="text"
                placeholder="Nombre"
                name="nombre"
              />
              <ErrorMessage component="p" className={s.error} name="nombre" />
            </label>
            <label>
              Puntos
              <Field
                className={s.input}
                type="number"
                placeholder="puntos"
                name="puntos"
              />
              <ErrorMessage component="p" className={s.error} name="puntos" />
            </label>
            <label>
              Asistencias
              <Field
                className={s.input}
                type="number"
                placeholder="asist"
                name="asist"
              />
              <ErrorMessage component="p" className={s.error} name="asist" />
            </label>
            <label>
              Rebotes
              <Field
                className={s.input}
                type="number"
                placeholder="reb"
                name="reb"
              />
              <ErrorMessage component="p" className={s.error} name="reb" />
            </label>
            <label>
              Valoracion
              <Field
                className={s.input}
                type="number"
                placeholder="val"
                name="val"
              />
              <ErrorMessage component="p" className={s.error} name="val" />
            </label>
            <label>Sube una Imagen del jugador</label>
            <input
              type="file"
              placeholder="imagen"
              name="imagen"
              onChange={(e) => setFieldValue("imagen", e.target.files[0])}
            />
            <button className={s.button} type="submit">
              Guardar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
