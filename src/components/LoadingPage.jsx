import pikachu from '../assets/pikachu-running.gif'
import '../styles/LoadingPage.css'

const LoadingPage = () => {
    return (
        <div className='loading-page'>
            <img src = {pikachu} ></img>
            <p>Loading.....</p>
        </div>
    )
}

export default LoadingPage