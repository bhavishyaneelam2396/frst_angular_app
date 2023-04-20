import { Products, User } from "./type.def";
export const USER_ROLE={
    Consumer:'user',
    Producer:'admin'
}

export const USER_DATA:User[]=[
    {CustomerId:1234,Password:"1234",UserRole:USER_ROLE.Producer},
    {CustomerId:5678,Password:"5678",UserRole:USER_ROLE.Consumer},
    {CustomerId:10001,Password:"10001",UserRole:USER_ROLE.Consumer}]


export const PRODUCTS_DATA:Products[]=[
{ProductID:1,ProductName:'Name1',CompanyProduced:'XYZ',ProductDetail:'happy',Cost:20},
{ProductID:2,ProductName:'Name1',CompanyProduced:'ABC',ProductDetail:'Enjoy',Cost:200},
{ProductID:3,ProductName:'Name2',CompanyProduced:'MNO',ProductDetail:'Misery',Cost:900},
{ProductID:4,ProductName:'Name3',CompanyProduced:'PQR',ProductDetail:'Winning',Cost:1000},
{ProductID:5,ProductName:'Name4',CompanyProduced:'JKL',ProductDetail:'Peace',Cost:2000},
{ProductID:6,ProductName:'Name5',CompanyProduced:'GIF',ProductDetail:'Righteous',Cost:100}];
