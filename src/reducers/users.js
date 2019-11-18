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
        sort: 'no_sort',
        isEmpty: false
    }

    export const rootReducers = (state = InitialState, action) => {
        switch(action.type) {
            case 'ACTION_DELETE_AllUSER':
                return {
                    ...state,
                    item: [],
                    isEmpty: true,
                }

                break
            case 'ACTION_DELETE_ANYUSER':
                const rand = Math.floor(Math.random() * action.payload.length)

                return {
                    item: action.payload.filter((user, index ) => index != rand ),
                    filter: 'no_sort',
                    isEmpty: false,
                } 

                break
            case 'ACTION_SORT_USERNAME':
               
                  return {
                      item: action.payload,
                      sort: 'age_sort',
                      isEmpty: false,
                  }

                break
            case "ACTION_NEW_USERADD":
                return {
                    ...state,
                    item: [
                        action.payload,
                        ...state.item
                    ],
                    isEmpty: false,
                }
            
        }

        return state
    }

