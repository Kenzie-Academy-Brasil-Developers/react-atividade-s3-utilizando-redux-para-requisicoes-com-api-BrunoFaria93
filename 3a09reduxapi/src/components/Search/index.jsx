import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import addDigimonThunk from '../../store/modules/digimons/thunks'

const Search = () => {
    const [ input, setInput ] = useState('')
    const [ error, setError ] = useState(false)

    const dispatch = useDispatch()

    const handleSearch= () => {
        if(!input){
            toast.error('Adicione um nome de digimon na caixa de texto')
        }
        setError(false)
        dispatch(addDigimonThunk(input))
        setInput('')
    }
    return(
        <div>
            <h2>Procure pelo seu Digimon!</h2>
            <div>
                <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder='Procure seu Digimon'
                ></input>
                <button onClick={() => handleSearch()}>Pesquisar</button>
            </div>
        </div>
    )
}

export default Search