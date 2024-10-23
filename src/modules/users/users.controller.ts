import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { User, UsersService } from './users.service';
import { UserDto } from '../commons/dto/user.input';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() user: UserDto) {
    return this.usersService.createUser(user);
  }

  @Get()
  findAll(@Body('requestingUser') requestingUser: User) {
    if (requestingUser.role !== 'admin') {
      throw new ForbiddenException(
        'Solo los administradores pueden ver todos los usuarios',
      );
    }
    return this.usersService.findAll();
  }

  @Post('/admin/:user_id')
  changeUserRole(
    @Param('user_id') user_id: string,
    @Body('role') role: 'admin' | 'user',
    @Body('requestingUser') requestingUser: User,
  ) {
    return this.usersService.changeUserRole(user_id, role, requestingUser);
  }

  @Post('upload-image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './dist/modules/uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
      limits: { fileSize: 1024 * 1024 * 2 }, // 2MB
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return {
      message: 'Image uploaded',
      file,
    };
  }

  @Get('download-image/:filename')
  downloadImage(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(__dirname, '..', 'uploads', filename);
    res.sendFile(filePath);
  }
}
