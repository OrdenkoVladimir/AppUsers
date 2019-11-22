const users = [
        {
            name: 'Vasya',
            age: 15,
            city: 'Moscow'
        },
        {
            name: 'Sveta',
            age: 20,
            city: 'London',
        },
        {
            name: 'Egor',
            age: 13,
            city: 'Paris',
        },
        {
            name: 'Dima',
            age: 30,
            city: 'Barcelona',
        },
        {
            name: 'Kate',
            age: 33,
            city: 'Rostov',

        },
        {
            name: 'Nasty',
            age: 40,
            city: 'California',
        },
        {
            name: 'Fedor',
            age: 24,
            city: 'Novgorod',
        },
        {
            name: 'Kirill',
            age: 29,
            city: 'Kaliningrad',
        },
        {
            name: 'Alexander',
            age: 21,
            city: 'New York'
        },
    ]

    const InitialState = {
        item: users,
    }

    export const rootReducers = (state = InitialState, action) => {
        switch(action.type) {
            case 'ACTION_DELETE_AllUSER':
                return {
                    ...state,
                    item: [],
                }

                break
            case 'ACTION_DELETE_ANYUSER':
                return {
                    ...state,
                    item: state.item.filter((user, index ) => index != action.payload ),
                } 

                break
            case 'ACTION_SORT_USERAGE':
                  return {
                      ...state,
                      item: action.payload,
                  }

                break
            case "ACTION_NEW_USERADD":
                return {
                    ...state,
                    item: [
                        action.payload,
                        ...state.item
                    ],
                }
            default: return state;
            
        }
    }

