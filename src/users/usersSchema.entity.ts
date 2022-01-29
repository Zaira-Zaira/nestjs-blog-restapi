import { EntitySchema } from 'typeorm';
import { Users } from './users.entity';

export const UserSchema = new EntitySchema<Users>({
  name: 'Users',
  target: Users,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    email: {
      type: String,
      nullable: true,
    },
    password: {
      type: String,
      nullable: true
    }
  }
});
