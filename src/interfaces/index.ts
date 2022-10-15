import { Response } from 'express';

export default interface IProduct {
  name:string
  amount:string
}

export interface IUser {
  id?:number
  username: string
  classe: string
  level: number
  password: string
}

export interface ILogin {
  username: string
  password: string
}

export interface IRegisteredUser extends Response {
  id:number
  username:string
  classe: string
  level: number
  password: string
}

export interface IUserInfo {
  id:number
  username:string
  password:string
}