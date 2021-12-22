import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from '../../users/user.entity';

export class CreateBookDto {
  @IsEmpty({ message: 'You cannot provide the id.' })
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsEmpty({ message: 'You cannot provide the user id.' })
  user: User;
}
