//1 funcion pura que determina el cambio //que voy a ahcer

export const crearProducto = () => {}

export const obtenerProducto = () => {}

export const borrarProducto = () => {}

export const editarProducto = () => {}


//-- para Contador

export const aumentarContador = () => {
    return {type: "CONTADOR_AUMENTAR"}
}

export const restarContador = () => {
    return {type:"CONTADOR_RESTAR"}
}

export const resetearContador = () => ({type:"CONTADOR_RESETEAR"}) //al poner todo adentro de parentesis, no hay que poner el return.

//-- para ToDoList //para este iniciamos el json server

// export const crearTarea = tarea => { //CON FETCH
//     return (dispatch)=>{
//         dispatch({type:"TAREA_ENVIANDO"})
//         fetch("http://localhost:4000/tareas",{
//             method : "POST",
//             headers : {"content-type":"application/json"} ,
//             body : JSON.stringify({tarea}) //lo transformo a json
//         })
//         .then(res=>res.json())//si el envio fue excitoso...
//         .then(res=>{
//             console.log(res)
//             dispatch({type:"TAREA_SUCESS",res}) //le envio TAREA_SUCESS y res (en rest esta el objeto q envío)
//         })
//         .catch(err=>{//si no lo fue...
//             console.log(err)
//             dispatch({type:"TAREA_ERROR"})
//         })
//     }
// }

export const crearTarea = tarea => { //CON ASYNC AWAIT
    return async dispatch=>{
        dispatch({type:"TAREA_ENVIANDO"})
            const pedido = await fetch("http://localhost:4000/tareas",
            {
            method : "POST",
            headers : {"content-type":"application/json"} ,
            body : JSON.stringify({tarea}) //lo transformo a json
        })
        try{
        const tarea = await pedido.json()
        dispatch({type:"TAREA_SUCESS",tarea})}//le envio TAREA_SUCESS y res (en rest esta el objeto q envío)

        catch(e){ //clase 3, min 1.53 otra manera de manejar el error con if y else
            console.log(e)
            dispatch({type:"TAREA_ERROR"})
        } 
    }
}




export const guardarValor = valor => {
    return{type:"INPUT_CHANGE", valor}}


//CON FETCH
//     export const borrarTarea = id => (dispatch) => { //otra manera de escribir a diferencia de crearTarea, es igual que poner return (dispatch) =>{}
//     dispatch({type:"TAREA_BORRANDO"})

//     fetch(`http://localhost:4000/tareas/${id}`,
//     {
//         method : "DELETE"
//     })
//     .then(res=>res.json())
//     .then(res=>{
//         dispatch({type:"TAREA_BORRANDO_SUCCESS"})

//     })
//     .catch(err=>{
//         console.log(err)
//         dispatch({type:"TAREA_BORRANDO_ERROR"})
//     })
// } 


// //CON ASYNCS
export const borrarTarea = id => async dispatch => { //otra manera de escribir a diferencia de crearTarea, es igual que poner return (dispatch) =>{}
dispatch({type:"TAREA_BORRANDO"})

const pedido = await fetch(`http://localhost:4000/tareas/${id}`,
{
    method : "DELETE"
})
    if(pedido.status === 200) //en vez de usar try y catch uso if y else
    {dispatch({type:"TAREA_BORRANDO_SUCCESS"})
    console.log("asd")
    }else{
    dispatch({type:"TAREA_BORRANDO_ERROR"})}
} 

// export const pedirTareas = () => {}