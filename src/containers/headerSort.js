import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sortUserAge } from '../actions/index'


const HeaderSort = (props) => {
    
    return (
        <tr>
            <th onClick={() => props.sortUserAge(sortItems(props.users, 'name_sort')) }>Name &#8595;</th>
            <th onClick={() => props.sortUserAge(sortItems(props.users, 'age_sort')) } >Age &#8595;</th>
            <th onClick={() => props.sortUserAge(sortItems(props.users, 'city_sort')) }>City &#8595;</th>
        </tr>
    )
}

const sortItems = (users, sortBy) => {
    const updatedUsers = [...users]

    switch(sortBy) {
        case 'no_sort':
            return updatedUsers

        break
        case 'age_sort':
            return updatedUsers.sort((a, b) => a.age - b.age)
        
        break
        case 'name_sort':
            return updatedUsers.sort((a, b) => a.name > b.name ? 1 : -1)

        break
        case 'city_sort':
            return updatedUsers.sort((a, b) => a.city > b.city ? 1 : -1)
        default:
           
    }
    return updatedUsers
}

const mapStateToProps = (state) => {
    return {
        users: state.item,
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortUserAge: bindActionCreators(sortUserAge, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSort)