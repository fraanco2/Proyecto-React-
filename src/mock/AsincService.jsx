const products = [
    {
        id:"01",
        name:"remera",
        description:"remera nike",
        price:2000,
        stock:40,
        category:"remeras",
        img:"https://i.postimg.cc/PrZjDf8T/remera-nike-club-black.webp"
    },
    {
        id:"02",
        name:"remera",
        description:"remera nike",
        price:1000,
        stock:20,
        category:"remeras",
        img:"https://i.postimg.cc/PrZjDf8T/remera-nike-club-black.webp"
    },
    {
        id:"03",
        name:"calzado",
        description:"nike air",
        price:5500,
        stock:25,
        category:"calzado",
        img:"https://i.postimg.cc/s2xHpK07/air-force-1-07-white.webp"
    },
    {
        id:"04",
        name:"calzado",
        description:"nike air",
        price:6000,
        stock:15,
        category:"calzado",
        img:"https://i.postimg.cc/ryxnCDgn/air-force-1-07-black.webp"
    },
    {
        id:"05",
        name:"pantalon",
        description:"nike club",
        price:2500,
        stock:10,
        category:"pantalones",
        img:"https://i.postimg.cc/kg9ktQmv/pantalon-nike-trend-black.webp"
    },
    {
        id:"06",
        name:"pantalon",
        description:"nike club",
        price:1500,
        stock:20,
        category:"pantalones",
        img:"https://i.postimg.cc/0jDBzQX4/pantalon-nike-club-black.webp"
    },

]

export const getProducts = () => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
              reject("hubo un error, intente mas tarde")  
            }else{
                resolve(products)
            }
        },2000);
    }) 
}

export const getOneProduct = (id) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            let oneProduct = products.find((prod)=> prod.id ===id)
            resolve(oneProduct);
        },2000);
    })
}