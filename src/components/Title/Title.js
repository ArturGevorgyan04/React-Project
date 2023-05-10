import { useDispatch, useSelector } from "react-redux";
// useDispatch ayn ogtagorcvelu e mapDipatchToProps function i poxaren
// useSelector ogtagorcelu enq mapStateProps function poxaren
import { inputText } from "../../redux/about/actions";
import './Title.css'

function Title(props){
    console.log('props title >',props);
    const text = useSelector(state => {
        const { text } = state
        return text.text
    })
    const dispatch = useDispatch()
// useDispatch y hook e vory import e arvum e redux i gradaranic ayn hxum e anelu ayn action in vori het asxatelu enq
// useSelectory hook e react-redux i gradaranic vorov kancelu enq mer state y redux ic

    const handleChange = (e) => {
        dispatch(inputText(e.target.value))  // mer teqsty reducer-in poxancelu hamar
    }

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input className="inputtitel" type="text" onChange={handleChange}/>
            </div>
            <p>{text}</p>
        </div>
    )
}
export default Title;

// ogtagorcelov erku hook ery integrecinq pahestin redux-i
// hook ery ogtagorcelov arden chenq ogtagorcum fuction conect - y