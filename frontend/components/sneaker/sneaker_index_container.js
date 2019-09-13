
import { connect } from 'react-redux';
import { fetchSneakers } from '../../actions/sneaker_actions';
import SneakerIndex from './sneaker_index';

const mapStateToProps = (state) => ({
  sneakers: Object.values(state.entities.sneakers)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSneakers: () => dispatch(fetchSneakers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SneakerIndex);