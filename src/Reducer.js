export const initialState = {
    basket: [
                     
//initial their is nothing in the posts
],
    user: null,
};

function reducer(state, action) {
  //console.log(action.item.title);
  // console.log(action.type);
    console.log(state);
    switch (action.type) {
    
        case "ADD_TO_BASKET":
            //lOGIC FOR ADDING ITEMS TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item],
           
            }
        default:
            return state;
    }
}
export default reducer;