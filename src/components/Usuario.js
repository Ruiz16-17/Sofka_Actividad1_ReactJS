import React, { Fragment, useState } from 'react';
import { useForm } from "react-hook-form";
import { Tabla } from './Tabla';

export const Usuario = () => {

    const { register, handleSubmit, errors } = useForm();
    const [usuario, setUsuario] = useState([]);

    const onSubmit = (data, event) => {

        let newUsuario = {
            nombre: data.nombre,
            edad: data.edad,
            ocupacion: data.ocupacion,
            mensaje: messageForAge(data)
        }

        setUsuario([...usuario, newUsuario]);
        event.target.reset();
    }

    const messageForAge = (user) => {
        if (user.edad <= 12) {


            return `Al niño ${user.nombre} de ${user.edad} edad se le recomienda tener una alimentación balanceada para que el cerebro tenga la capacidad de abosorber nuevo conocimiento y poder centrarse en aprender sobre distintos temas de su interés.`
        }
        if (user.edad >= 13 && user.edad <= 30) {

            return `Al joven ${user.nombre} de ${user.edad} edad se le recomienda estar en constante actividad física y continuar ejercitando su mente para lograr sotener una salud tanto física con mental con el objetivo de siempre estar activo respetando los tiempos de descanso.`
        }
        if (user.edad >= 31 && user.edad <= 50) {

            return `Al adulto ${user.nombre} de ${user.edad} edad se le recomienda estar en constante actividad física y continuar ejercitando su mente para lograr sotener una salud tanto física con mental con el objetivo de siempre estar activo además de cuidar la alimentación evitando consumir grasas en exceso.`
        }
        if (user.edad >= 51) {

            return `Al mayor ${user.nombre} de ${user.edad} edad se le recomienda mantener la actividad física moderadamente para evitar lesiones y ejercitar el cerebro con diferentes actividades como la lectura y la ejerción de la ocupación. Además cuidar la alimentación y evitando altas dósis de cafeína.`
        }
    }

    return (
        <Fragment>

            <form onSubmit={handleSubmit(onSubmit)} class="border border-primary p-4">

                <div class="col-auto ">
                    <label class="form-label me-4">Ingrese su Nombre</label>
                    <input

                        type="text" {...register("nombre")} />
                </div>

                <div class="col-auto">
                    <label class="form-label me-4">Ingrese su Edad</label>
                    <input

                        type="number" {...register("edad")} />
                </div>

                <div class="col-auto mb-3">
                    <label class="form-label">Ingrese su Ocupacion</label>
                    <select
                        class="form-select"

                        {...register("ocupacion")}
                    >
                        <option value="estudiante">Estudiante</option>
                        <option value="empleado">Empleado</option>
                        <option value="jubilado">Jubilado</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-success"> Ingresar Usuario </button>
            </form>
            <Tabla usuarios={usuario}/>
        </Fragment>

        
    )
    
}

