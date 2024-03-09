import React, { useContext } from 'react'
import '../Styles/PostStyling.scss'
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Swal from 'sweetalert2';


function Post({ _id, title, summary, cover, content, createdAt, author }) {

    //User Data
    const {userInfo} = useContext(UserContext);

    //To Navigate
    const navigate = useNavigate();

    const CheckAndRedirect=()=>{
        if(userInfo){
            navigate(`/FullPost/${_id}`);
        } else {
            Swal.fire({
                text:'It Seem you Didnt login, first Login to see the post',
                confirmButtonColor:'#009579'
            })
        }
    }

    return (
        <div className='SinglePost' onClick={CheckAndRedirect}>
            <section className="articles">
                <article>
                    <div className="article-wrapper">
                        <figure>
                            <img src={'http://localhost:4000/'+cover} alt={cover} />
                        </figure>
                        <div className="article-body">
                            <h2>{title}</h2>
                            <p>Posted By {author.username} at {format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</p>
                            <p>{summary}</p>
                            <span href="" className="read-more">
                                Read more <span className="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Post