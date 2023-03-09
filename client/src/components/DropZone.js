// import React, { useState, useCallback, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useDropzone } from "react-dropzone";
// import axios from "axios";
// import s from "../modules/Dropzone.module.css";
// import { subirFotos } from "../redux/actions";
// import swal from "sweetalert";

// export default function SubirImagen(props) {
//   const dispatch = useDispatch();
//   const [imagenes, setImagenes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [mensaje, setMensaje] = useState("");

//   const onDrop = useCallback((acceptedFiles, rejectFiles) => {
//     acceptedFiles.forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImagenes((prevState) => [...prevState, reader.result]);
//       };
//       reader.readAsDataURL(file);
//     });
//   }, []);

//   useEffect(() => {}, [imagenes, loading]);

//   const { getInputProps, getRootProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: "image/png",
//   });

//   const handleUploadImagen = () => {
//     try {
//       swal({
//         title: "Subir Fotos",
//         text: "Estas seguro de subir estas fotos?",
//         icon: "warning",
//         buttons: ["No", "Si"],
//       }).then((respuesta) => {
//         if (respuesta) {
//           swal({ text: "Las fotos se estan subiendo", icon: "success" });
//           setLoading(true);
//           dispatch(subirFotos(imagenes));
//           setImagenes([]);
//           setTimeout(() => {
//             setLoading(false);
//             setMensaje("foto subida");
//           }, 3000);
//         }
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   const handleDeleteImagen = (elemento) => {
//     const img = imagenes.filter((e) => e !== elemento);
//     setImagenes(img);
//   };

//   return (
//     <>
//       <div className={s.dropzone} {...getRootProps()}>
//         {" "}
//         <input {...getInputProps()} />
//         {isDragActive
//           ? "Imagenes cargadas"
//           : "Puedes arrastrar tus imagenes hasta aqui"}
//       </div>
//       {imagenes.length > 0 && (
//         <div>
//           {imagenes.map((e, i) => (
//             <div key={i}>
//               <img className={s.imagenUpload} src={e} />
//               <button onClick={() => handleDeleteImagen(e)}>X</button>
//             </div>
//           ))}
//         </div>
//       )}
//       {imagenes.length > 0 && (
//         <button onClick={handleUploadImagen}>Cargar imagen</button>
//       )}
//       {loading && <p style={{ color: "white" }}>cargando...</p>}
//       {mensaje.length > 2 && <p style={{ color: "white" }}>{mensaje}</p>}
//     </>
//   );
// }
