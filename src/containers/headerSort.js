import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sortUserAge } from '../actions/index'


const HeaderSort = (props) => {
    
    return (
        <tr>
            <th>Name</th>
            <th onClick={() => props.sortUserAge(props.users) } >Age</th>
            <th>City</th>
        </tr>
    )
}

const sortItems = (users, sortBy) => {
    switch(sortBy) {
        case 'no_sort':
            return users

        break
        case 'age_sort':
            return  users.sort((a, b) => a.age - b.age)
        
        break
        default:
            return users
    }
   
}

const mapStateToProps = (state) => {
    return {
        users: sortItems(state.item, state.sort)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortUserAge: bindActionCreators(sortUserAge, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSort)