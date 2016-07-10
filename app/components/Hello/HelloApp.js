import { connect } from 'react-redux';
import AddName from '../AddName/AddName';
import Hello from './Hello';

const mapStateToProps = (state) => {
    return {
        names: state.names
    }
};

const HelloApp = connect(
  mapStateToProps
)(Hello);


export default HelloApp;