import React from 'react'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { deleteAllUser, deleteAnyUser, sortUserName } from '../actions/index'

const DeleteButtons = (props) => {
    return (
        <div>
            <button onClick={() => props.deleteAllUser(props.users) }>Очистить таблицу</button>
            <button onClick={() => props.deleteAnyUser(props.users) }>Удалить случайнго пользователя</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.item,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAllUser: bindActionCreators(deleteAllUser, dispatch),
        deleteAnyUser: bindActionCreators(deleteAnyUser, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButtons)