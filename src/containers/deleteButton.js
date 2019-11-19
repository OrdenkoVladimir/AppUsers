import React from 'react'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { deleteAllUser, deleteAnyUser } from '../actions/index'

const DeleteButtons = (props) => {
    const rand = Math.floor(Math.random() * props.users.length)
    return (
        <div>
            <button onClick={() => props.deleteAllUser(props.users) }>Очистить таблицу</button>
            <button onClick={() => props.deleteAnyUser(rand)}>Удалить случайнго пользователя</button>
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