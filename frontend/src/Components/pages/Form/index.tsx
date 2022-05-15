import { Link, useParams } from 'react-router-dom';
import { Movie } from '../../../types/movie';
import FormCard from '../../FormCard';
import './styles.css'

function Form() {
 
    const params = useParams();
    
    return (
        <FormCard movieId={`${params.movieId}`}/>
    )
}

export default Form;