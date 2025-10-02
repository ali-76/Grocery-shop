import { title } from "process";

interface Props {
    link : string;
    icon : string;
    size? : number;
    title : string;
}

export const menuMock : Props[] = [
    {
        link : "#",
        icon : "icon-flame",
        size : 24,
        title : "Hot Deals"
    },
    {
        link : "#",
        icon : "",
        title : "Home"
    },
    {
        link : "#",
        icon : "",
        title : "Food"
    },
    {
        link : "#",
        icon : "",
        title : "Vegetables"
    }
]