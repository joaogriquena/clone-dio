//Testando Hooks

import { useCallback, useEffect, useMemo, useState } from 'react'
import React from 'react'

const Teste = () => {

    const [name, setName] = useState('Joao')
    const [age, setAge] = useState(20)

    // useEffect gerencia o ciclo de vida de um componente
    // useMemo = Salvar referincias em variaveis
    // useCallback = referencia de função

    const handleChangeName = useCallback(() => {
        console.log('Alterou Nome')
        setName(prev => prev === 'Joao' ? 'José' : 'Joao')
    }, [])

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age
        console.log('age atual', age, newAge)
        setAge(prev => prev === 20 ? 30 : 20)
    }, [age])


    useEffect(() => {
        handleChangeName()
    }, [])


    const calculo = useMemo(() => {
        //console.log('Calculou', age)
        return 10 * age
    }, [age])

    //console.log('renderizou', calculo)

    return (
        <div>
            <p>
                {name} -- <button onClick={handleChangeName}>Alterar Nome</button>
            </p>
            <br />
            <p>
                {age} -- <button onClick={handleChangeAge}>Alterar Idade</button>
            </p>
        </div>
    )
}

export { Teste }