import axios from 'axios'
import toast from 'react-hot-toast'

import { addDigimon } from './actions'

const addDigimonThunk = (digimon, setError) => (dispatch) => {

    axios
        .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
        .then((response) => {
            dispatch(addDigimon(response.data[0]))
            toast.success('Um digimon foi encontrado!')
        })
        .catch((err) => {
            
            console.log(err)
        }
        )
}

export default addDigimonThunk