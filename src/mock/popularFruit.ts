import { disconnect } from "process";

interface Props {
    badge? : string;
    img : string;
    shopName : string;
    title : string;
    rate : string;
    weight : number;
    unit : string;
    disconnect : number;
    price : number;
}

export const popularFruitMock : Props[] = [
    {
        badge : "-17%",
        img : "/assets/images/products/cucumber.png",
        shopName : "Mary Foods",
        title : "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate : "4.0" ,
        weight : 500 ,
        unit : "gram",
        disconnect : 2.51 ,
        price : 2.8
    },
    {
        badge : "Hot",
        img : "/assets/images/products/corn.png",
        shopName : "Mary Foods",
        title : "All Natural Italian-Style Chicken Meatballs",
        rate : "4.0" ,
        weight : 500 ,
        unit : "gram",
        disconnect : 2.51 ,
        price : 2.8
    },
    {
        badge : "-17%",
        img : "/assets/images/products/mango.png",
        shopName : "Mary Foods",
        title : "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate : "4.0" ,
        weight : 500 ,
        unit : "gram",
        disconnect : 2.51 ,
        price : 2.8
    },
    {
        img : "/assets/images/products/paper.png",
        shopName : "Mary Foods",
        title : "Foster Farms Takeout Crispy Classic Buffalo Wings",
        rate : "4.0" ,
        weight : 500 ,
        unit : "gram",
        disconnect : 2.51 ,
        price : 2.8
    },
    {
        img : "/assets/images/products/lemon.png",
        shopName : "Mary Foods",
        title : "Blue Diamond Almonds Lightly Salted Vegetables",
        rate : "4.0" ,
        weight : 500 ,
        unit : "gram",
        disconnect : 2.51 ,
        price : 2.8
    },
    {
        badge : "Sale",
        img : "/assets/images/products/tanjerin.png",
        shopName : "Mary Foods",
        title : "Angie’s Chick a pop Boom Sweet & Salty Kettle Corn",
        rate : "4.0" ,
        weight : 500 ,
        unit : "gram",
        disconnect : 2.51 ,
        price : 2.8
    },
]