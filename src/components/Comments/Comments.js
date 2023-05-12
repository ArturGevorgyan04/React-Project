import './Comments.css'
import { useState } from 'react'
import SingleComment from '../../components/SingleComments/SingleComments'
import { commentCreate } from '../../redux/about/actions'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid' // yurahatuk id e talis
// uniqid-in instal anelu hamar grum enq npm i uniqid 
// ayn mez talis e yurahatuk id ner


function Comments() {
    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state => {
        console.log('redux state >', state);
        const { comments } = state;
        return comments.comments // aystex arden kpahpani bolor komentnery
    })
    console.log('comments >', comments);

    const dispatch = useDispatch()

    const handleInput = (e) => {
        console.log('inp >>>', e.target.value);
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => { // submiti jamanak menq form-i menq atmena enq tali ira default vijaky 
        e.preventDefault();
        const id = uniqid()
        dispatch(commentCreate(textComment, id))
        setTextComment(e.target.value = '')
    }

    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comment-item-create'>
                <input type='text' className='card-input' value={textComment} onChange={handleInput} />
                <input type='submit' hidden />
            </form>
            {!!comments?.length && comments?.map(res => {
                return <SingleComment key={res.id} data={res} />
            })}
        </div>
    )
}
export default Comments;

// value talis enq skzbnakan arjeqy
// handleSubmit um dispatch enq anum mer action ev poxancum tvyalnery dranq en henc commentnery ev id
// inputneric heto avelacnum enq mer commentnery vorpeszi tesnenq ekranin
// aynuhetev gnum enq SingleComment render enq anum amen mi aranzin commenty