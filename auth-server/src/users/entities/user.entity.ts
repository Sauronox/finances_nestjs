import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';


export enum UserRole{
  USER,
  ADMIN
}

export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER
  })
  role: UserRole;

  constructor(username: string, email: string, password: string, role?: UserRole) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role ?? UserRole.USER;
  }
}
