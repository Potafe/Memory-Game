import pikachu from '../assets/pikachu-running.gif'
import '../styles/LoadingPage.css'

const LoadingPage = () => {
    return (
        <div className='loading-page'>
            <img src = {pikachu} alt="Running Pikachu"></img>
            <p>Loading.....</p>
        </div>
    )
}

export default LoadingPage