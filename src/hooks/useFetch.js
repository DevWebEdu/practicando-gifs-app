import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })


  useEffect(() => {
    getFetchByName()
    getFetch()
  }, [url])





  //limpia el stado
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: false,
      hasError: false,
      error: null
    })
  }
  //Validando si el response llega con status 200
  const validateResp = (resp) => {
    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        }
      })
      //retornamos void
      return
    }
  }
  //Funcionalidad  para traer toda la pagina 1
  const getFetch = async () => {
    setLoadingState()
    //el request de envio  
    const resp = await fetch(url);
    //verificamos si la respuesta llego correctamente
    validateResp(resp)
    //en caso tengamos una respuesta ok, desestructuramos el objeto de response pasandolo JSON
    const data = await resp.json();
    //cambiamos el estado de la variable
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null
    })
  }
  //Funcionalidad del boton siguiente - anterior
  const nextButtonPage = async (order) => {
    if (order === 'next') {
      if (state?.data?.info?.next === null) return;
      const resp = await fetch(state?.data?.info?.next)
      //en caso tengamos una respuesta ok, desestructuramos el objeto de response pasandolo JSON
      const data = await resp.json();
      //cambiamos el estado de la variable
      setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null
      })
      //validar si la respuesta llega bien
      validateResp(resp)
    }
    if (order === 'prev') {
      if (state?.data?.info?.prev === null) return;
      const resp = await fetch(state?.data?.info?.prev)
      //en caso tengamos una respuesta ok, desestructuramos el objeto de response pasandolo JSON
      const data = await resp.json();
      //cambiamos el estado de la variable
      setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null
      })
      //validar si la respuesta llega bien
      validateResp(resp)
    }

  }

  const getFetchByName = async (nameCharacter) => {
    setLoadingState()
    if (nameCharacter === undefined) return;

    const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`)
    validateResp(resp)

    const data = await resp.json()
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null
    })

  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
    nextButtonPage,
    getFetchByName
  }
}