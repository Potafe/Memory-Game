import pikachu from '../assets/pikachu-running.gif'
import '../styles/LoadingPage.css'

const LoadingPage = () => {
    return (
        <div className='loading-page'>
            <img src = {pikachu} alt="Running Pikachu"></img>
        </div>
    )
}

export default LoadingPage