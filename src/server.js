import { createServer, Model } from "miragejs"


createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "Margherita", price: 10, description: "A classic van topped with tomato sauce, mozzarella cheese, and fresh basil leaves.", imageUrl: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBtYXJnaGVyaXRhfGVufDB8fDB8fHww", type: "nonVeg",catagory:'Italian', ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Fresh Basil Leaves", "Bell Peppers","Chicken" ] })
        server.create("van", { id: "2", name: "Pepperoni", price: 12, description: "A timeless favorite featuring spicy pepperoni slices and gooey mozzarella cheese on a thin crust.", imageUrl: "https://images.unsplash.com/photo-1638425793674-32119fffb3d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcGVyb25pfGVufDB8fDB8fHww", type: "veg", catagory:'Americans', ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Fresh Basil Leaves"] })
        server.create("van", { id: "3", name: "Vegetarian", price: 11, description: "Loaded with a colorful assortment of fresh vegetables including bell peppers, onions, olives, and mushrooms.", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVndGVyaWFuJTIwcGl6emF8ZW58MHx8MHx8fDA%3D", type: "veg",catagory:'Mexician', ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Thin Crust"] })
        server.create("van", { id: "4", name: "BBQ Chicken", price: 13, description: "Tender chicken pieces smothered in tangy barbecue sauce, paired with onions and mozzarella cheese.", imageUrl: "https://images.unsplash.com/photo-1695383734051-14c559dce24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmJxJTIwY2hpY2tlbiUyMHBpenphfGVufDB8fDB8fHww", type: "veg" ,catagory:'Italian', ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Bell Peppers", "Onions", "Olives", "Mushrooms"]})
        server.create("van", { id: "5", name: "Supreme", price: 14, description: "The ultimate combination of toppings, including pepperoni, sausage, bell peppers, onions, and olives.", imageUrl: "https://media.istockphoto.com/id/484811667/photo/homemade-barbecue-chicken-pizza.webp?b=1&s=170667a&w=0&k=20&c=2aaEvmAigjstu9TyF-r2F097OZEW_iY-ct3d27LClFM=", type: "nonVeg",catagory:'Americans', ingredients: ["Tangy BBQ Sauce", "Mozzarella Cheese", "Chicken", "Onions"] })
        
        server.create("van", { id: "6", name: "Margherita", price: 10, description: "A classic van topped with tomato sauce, mozzarella cheese, and fresh basil leaves.", imageUrl: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D", type: "veg",catagory:'Swiz', ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Sausage", "Bell Peppers", "Onions", "Olives"] })
        server.create("van", { id: "7", name: "Pepperoni", price: 12, description: "A timeless favorite featuring spicy pepperoni slices and gooey mozzarella cheese on a thin crust.", imageUrl: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8fDA%3D", type: "veg" ,catagory:'Americans', ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Thin Crust"] })
        server.create("van", { id: "8", name: "Vegetarian", price: 11, description: "Loaded with a colorful assortment of fresh vegetables including bell peppers, onions, olives, and mushrooms.", imageUrl: "https://media.istockphoto.com/id/185121888/photo/pizza.webp?b=1&s=170667a&w=0&k=20&c=Yt4Rly9Hs6UMxVLKtcNzP1QRph-jCFdXUhZB0_5_Qo4=", type: "veg",catagory:'Mexician', ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Bell Peppers", "Onions", "Olives", "Mushrooms"]  })
        server.create("van", { id: "9", name: "BBQ Chicken", price: 13, description: "Tender chicken pieces smothered in tangy barbecue sauce, paired with onions and mozzarella cheese.", imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBpenphfGVufDB8fDB8fHww", type: "nonVeg",catagory:'Italian', ingredients: ["Tangy BBQ Sauce", "Mozzarella Cheese", "Chicken", "Onions"] })
        server.create("van", { id: "10", name: "Supreme", price: 14, description: "The ultimate combination of toppings, including pepperoni, sausage, bell peppers, onions, and olives.", imageUrl: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBpenphfGVufDB8fDB8fHww", type: "veg",catagory:'Franch', ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Sausage", "Bell Peppers", "Onions", "Olives"] })
        server.create("van", { id: "11", name: "Mashroom", price: 13, description: "Tender chicken pieces smothered in tangy barbecue sauce, paired with onions and mozzarella cheese.", imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBpenphfGVufDB8fDB8fHww", type: "nonVeg",catagory:'Italian', ingredients: ["Tangy BBQ Sauce", "Mozzarella Cheese", "Chicken", "Onions"] })
        server.create("van", { id: "12", name: "StrawBerry", price: 14, description: "The ultimate combination of toppings, including pepperoni, sausage, bell peppers, onions, and olives.", imageUrl: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBpenphfGVufDB8fDB8fHww", type: "veg",catagory:'Franch', ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Sausage", "Bell Peppers", "Onions", "Olives"] })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/pizzas", (schema, request) => { 
            return schema.vans.all()
        })
        
        this.get("/pizzas/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("")
    }
})

