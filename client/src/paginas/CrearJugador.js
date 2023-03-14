import SubirImagen from "../components/DropZone";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import  { Field, Form, Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import s from "../modules/CrearJugador.module.css";
import { crearJugador } from "../redux/actions";
import { useNavigate } from "react-router-dom";
export default function CrearJugador() {

  const dispatch = useDispatch()
  useEffect(() => {}, []);

const navigate = useNavigate()

  return (
    <div className={s.bordeForm}>
      <Formik
      validationSchema={Yup.object({
        nombre:Yup.string().required("El nombre es Requerido"),
        clubes:Yup.string(),
        nacimiento: Yup.date(),
        altura:Yup.number().min(1.5).max(2.4),
        posicion:Yup.string(),
        libre:Yup.boolean(),
        
      })}
      initialValues={{
        nombre:"",
        clubes:"",
        nacimiento:"",
        altura:1.7,
        posicion:"",
        libre:true,
        imagen:[],
      }}
      onSubmit={async (values,actions)=>{
        dispatch(crearJugador(values))
        // navigate("/")
        values = {
          nombre:"",
          clubes:"",
          nacimiento:"",
          altura:1.7,
          posicion:"",
          libre:true,
          imagen:[],
        }
      }}
        >
          {({handleSubmit, setFieldValue})=>(
        <Form
        className={s.divform}
        onSubmit={handleSubmit}>
          <label>Nombre
            
          <Field className={s.input}type="text" placeholder="Nombre" name="nombre" />
          <ErrorMessage component="p"  className={s.error}name="nombre"/>
          </label>
          <label>Clubes

          <Field className={s.input}type="text"placeholder="clubes" name="clubes" />
          <ErrorMessage component="p" className={s.error}name="clubes"/>
          </label>
          <label>Categoria

          <Field className={s.input}type="month"placeholder="nacimiento" name="nacimiento" />
          <ErrorMessage component="p" className={s.error}name="nacimiento"/>
          </label>
          <label>Altura

          <Field className={s.input}type="decimal"placeholder="altura" name="altura" />
          <ErrorMessage component="p" className={s.error}name="altura"/>
          </label>
          <label>Posicion
            
          <Field className={s.input} type="text"placeholder="posicion" name="posicion" />
          <ErrorMessage component="p" className={s.error}name="posicion"/>
          </label>
          <span>Disponibilidad
            <Field className={s.inputCheck}type="checkbox"placeholder="libre" name="libre" />
          <ErrorMessage component="p" className={s.error}name="libre"/>
            </span>            
          <label>Sube una Imagen del jugador</label>
          <input type="file"placeholder="imagen" name="imagen" onChange={(e)=>setFieldValue("imagen", e.target.files[0])} />
          <button className={s.button} type="submit">Guardar</button>
        </Form>

          )}
      </Formik>

    </div>
  );
}
