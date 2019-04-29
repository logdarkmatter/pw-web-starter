﻿export interface IUser {
  id?: any;
  login?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  token?: string;
  authorities?: any[];
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class User implements IUser {
  constructor(
    public id?: any,
    public login?: string,
    public password?: string,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public token?: string,
    public authorities?: any[],
    public createdBy?: string,
    public createdDate?: Date,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Date
  ) {}
}
