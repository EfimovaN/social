import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {addMessage} from '../../redux/messages-reducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Messages);