import { useState,useEffect } from "react"; // AMEN ANGAM ERB GA NOR TEQST MENQ PETQ E TEXAVORNEQ
// popoxakani mej dra hamar ogtagorcum enq hook er
import './SingleComments.css'
import { commentDelete } from '../../redux/about/actions'
import { useDispatch } from "react-redux";

function SingleComments({data}) { // amen commenti hamar stanum enq texty ev idn
    const [commentText, setCommentText] = useState('');
    const {text,id} = data;
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('submit ->>', commentText);
    }

    const handleDelete = (e) => {
        console.log('click>>');
        e.preventDefault();
        dispatch(commentDelete(id))
    }

    useEffect(() => { // amen angam erb poxvi texty ayn kavelacvi 
        if(text) {
            setCommentText(text)
        }
    },[text])

    const handleInput = (e) => { // aysinqn erb menq kgrenq incvor ban hin commentic heto
                                // ayn aftomat poxancelu e yntaciq state popoxakan commentText-y
        setCommentText(e.target.value)
    }

    return (
        <form onSubmit={handleUpdate} className="comment-item">
            <span onClick={handleDelete} className="comment-item-deleta">X</span>
            <input type="text" value={commentText} onChange={handleInput} />
            <input type="submit" hidden />
        </form>
    )
}
export default SingleComments;

// erb menq grum enq comment ayn aftomat linum e render ev avelanum popoxakan commentText-i mej

// hima uzum enq tarmacnel erb uzum enq mer commenty usti formi mej bacum enq onSubmit function y