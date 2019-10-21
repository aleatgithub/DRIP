import { connect } from 'react-redux'
import { searchSneakers, resetSneakers } from '../../actions/sneaker_actions'
import Search from './search'
import { debounce } from 'lodash'


const msp = (state) => ({
  sneakers: Object.values(state.entities.sneakers),
  sneakerCount: state.ui.sneakerCount
})

const mdp = (dispatch) => ({
  searchSneakers: debounce((query, page) => dispatch(searchSneakers(query, page)), 500),
  resetSneakers: () => dispatch(resetSneakers())
})

export default connect(msp,mdp)(Search);

