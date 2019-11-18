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
        sort: 'no_sort'
    }

    export const rootReducers = (state = InitialState, action) => {
        switch(action.type) {
            case 'ACTION_DELETE_AllUSER':
                return {
                    item: [ {
                        name: "Пусто",
                        age: "Пусто",
                        city: "Пусто"
                    } ],
                    filter: 'no_sort',
                }

                break
            case 'ACTION_DELETE_ANYUSER':
                const rand = Math.floor(Math.random() * action.payload.length)

                return {
                    item: action.payload.filter((user, index ) => index != rand ),
                    filter: 'no_sort'
                } 

                break
            case 'ACTION_SORT_USERNAME':
               
                  return {
                      item: action.payload,
                      sort: 'age_sort',
                  }

                break
            
        }

        return state
    }

