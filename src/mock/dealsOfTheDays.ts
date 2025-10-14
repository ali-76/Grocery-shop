import { simpleProductType } from "@/types/simpleProductType"

export const dealsOfTheDaysMock : simpleProductType[] = [
    {
        img : "/assets/images/deals/lettuce.png",
        title : "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate : 4.5 ,
        weight : 500 ,
        unit : "gram",
        price : 4.1,
        sale_price : 2.3,
        timer : new Date(2025, 10, 5, 0, 0, 0).getTime()
    },
    {
        img : "/assets/images/deals/orange.png",
        title : "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate : 3.4 ,
        weight : 500 ,
        unit : "gram",
        price : 4.1,
        sale_price : 2.3,
        timer : new Date(2025, 10, 1, 0, 0, 0).getTime()
    },
    {
        img : "/assets/images/deals/blood-orange.png",
        title : "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate : 4.7 ,
        weight : 500 ,
        unit : "gram",
        price : 7.15,
        timer : new Date(2025, 11, 2, 23, 59, 59).getTime()
    },
    {
        img : "/assets/images/deals/beans.png",
        title : "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate : 1.3 ,
        weight : 500 ,
        unit : "gram",
        price : 22.5,
        sale_price : 6.9,
        timer : new Date(2025, 10, 23, 0, 0, 0).getTime()
    },
]