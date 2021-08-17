import { createStore } from 'vuex';

const store = createStore({
    state(){
      return {
          items: [],
        products: [
            {
            id:0,
            category:'Salad',
            title:'Keto-friendly low carb pizza',
            price:28,
            subtitle:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, earum.', 
            image:'https://gimmedelicious.com/wp-content/uploads/2019/01/keto-pizza-11.jpg',
            images: [
                {id:0, url:'https://gimmedelicious.com/wp-content/uploads/2019/01/keto-pizza-11.jpg'},
                {id:1, url:'https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1558564215/photos/294912_original.jpg'},
                {id:2, url:'https://www.ocregister.com/wp-content/uploads/2021/01/OCR-L-SteelPan-WBOX-0121-1.jpg'}
            ]
            },
            {
            id:1, 
            category:'pizza',
            title:'Detroit style pizza with turkey breast',
            price:24,
            subtitle:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, earum.', 
            image:'https://foxeslovelemons.com/wp-content/uploads/2020/10/Detroit-Style-Pizza-Recipe-5-720x720.jpg',
            images: [
                {id:0, url:'https://cdn.whatsgabycooking.com/wp-content/uploads/2020/10/WGC-Detroit-Style-Rectangle-Veggie-Deep-Dish-Pizza-2-copy-819x1024.jpg'},
                {id:1, url:'http://www.howsweeteats.com/wp-content/uploads/2018/03/veg-pizza-I-howsweeteats.com-13.jpg'},
                {id:2, url:'https://foxeslovelemons.com/wp-content/uploads/2020/10/Detroit-Style-Pizza-Recipe-5-720x720.jpg'}
            ]
            },
            {
            id:2, 
            category:'salad',
            title:'vTurkey salad with letuce and cabbage',
            price:35,
            subtitle:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, earum.', 
            image:'https://mybizzykitchen.com/wp-content/uploads/2021/03/themoneyshott.jpeg',
            images: [
                {id:0, url:'https://www.seriouseats.com/thmb/btUd0d8jewsqRPK3ehURx4JBoUk=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__02__20170216-detroit-style-pizza-47-1500x1125-1-233d75e6021048b3bf3cf28bd59d310b.jpg'},
                {id:1, url:'https://media.phillyvoice.com/media/images/28120_Detroit_style_pizza_Emmy_Squ.2e16d0ba.fill-735x490.jpg'},
                {id:2, url:'https://www.seriouseats.com/thmb/3RkmuZM85pACiCfsP7IR_08xPcs=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__02__20170216-detroit-style-pizza-44-1500x1125-1-d374fa21089f4083835df1c4fae4d196.jpg'}
            ]
            },
          ]
      }
    },
    getters: {
        products(state){
            return state.products
        },
        product(state){
            return (productId) => {
                return state.products.filter(product => {return product.id === Number(productId)})
            }
        },
        basketItems(state){
            return state.items
        },
        basketItemsCount(state, getters){
            return getters.basketItems.length
        }
    },
    mutations: {
        initialiseStore(state){
            if (localStorage.getItem('basket')){

                // going over localStorage.basket and adding items to state.items everytime app component is created
                const basketItems = JSON.parse(localStorage.getItem('basket'))
                basketItems.forEach(item => state.items.push(item))
            }
        },
        addToBasket(state,id){
            const product = state.products.filter( product => product.id === Number(id))
            state.items.push(product)
            localStorage.setItem('basket',JSON.stringify(state.items))
        },
        removeItem(state,id){
            state.items = state.items.filter( item => id !== item[0].id)
            localStorage.setItem('basket',JSON.stringify(state.items))
        }
      }
    });




export default store;


