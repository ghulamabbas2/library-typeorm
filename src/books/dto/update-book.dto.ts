import { IsEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from '../../users/user.entity';

export class UpdateBookDto {
  @IsEmpty({ message: 'You cannot provide the id.' })
  id: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  author: string;

  @IsEmpty({ message: 'You cannot provide the user id.' })
  user: User;
}
