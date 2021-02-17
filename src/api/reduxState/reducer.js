//2 - funcion pura que calcula el nuevo estado //como lo voy a haccer

const estadoInicial = {
    links : ["123"], //cambiar el path del container


}

const reducer = (estadoPrevio=estadoInicial , action) => { //nunca modificar el estado previo.
    switch(action.type){

        //---contador

        case "CONTADOR_AUMENTAR" :
            return {
                ...estadoPrevio,
                contador : estadoPrevio.contador + 1,
            }
    }
}

export default reducer