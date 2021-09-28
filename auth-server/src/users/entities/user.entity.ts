import { Prop, SchemaFactory } from '@nestjs/mongoose';


export enum UserRole{
  USER,
  ADMIN
}

export class User {

  @Prop({type: String, required: true})
  username: string;

  @Prop({type: String, required: true})
  email: string;

  @Prop({type: String, required: true})
  password: string;

  @Prop({
    type: Number,
    enum : UserRole,
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

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;