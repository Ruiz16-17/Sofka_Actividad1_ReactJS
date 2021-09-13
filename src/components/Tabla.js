import React, { Fragment } from 'react'

export const Tabla = ( { usuarios =[] }) => {

    return (
        <Fragment>
            <div className="mt-5">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Ocupacion </th>
                            <th scope="col">Mensaje</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                    usuarios.map((item, index) =>
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item.nombre}</td>
                            <td>{item.edad}</td>
                            <td>{item.ocupacion}</td>
                            <td>{item.mensaje}</td>
                        </tr>
                    )
                    }
                    
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
