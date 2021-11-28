import { useSelector } from 'react-redux'

const DigimonList = () => {
    const { digimons } = useSelector((state) => state)
    return (
        <div className='container'>
            <ul>
                {digimons.map((digimon, index) => { return (
                    <li key={index}> 
                        {digimon.name}
                        <img src={digimon.img} alt="" />
                    </li>
                )
                })}
            </ul>
        </div>
    )
}

export default DigimonList