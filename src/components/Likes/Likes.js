import './Likes.css'
import { connect } from 'react-redux'
import { incrementLikes,decrementLikes } from '../../redux/about/actions'


// erb ogtagorcum enq mapStateToProps ev mapDispatchToProps  apa petq e connect y kancel connecty react-redux gradaranic 
// u poxancel iren

function Likes(props) {
    console.log('render>',props);
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
            <button disabled={props.likes === 0} onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}
function mapStateToProps(state) {
    const { likes } = state
    return {
        likes: likes.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Likes)

// ayspes stanum enq mer function i mapDispatchToProps
// aystex miacnum enq mer componenty redux in hatuk function ov conect
// mer component in 
// nuyny anum enq mer metodi het ev ogtagorcum mapDispatchToProps