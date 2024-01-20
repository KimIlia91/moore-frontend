import notFound from '../../img/404.png';
import './errorMessage.scss';

const ErrorMessage = () => {
    return (
        <img src={ notFound } alt="error img" className='error-message'/>
    )
}

export default ErrorMessage;