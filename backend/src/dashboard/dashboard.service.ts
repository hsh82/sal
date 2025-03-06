/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
    private prisma: PrismaService,
  ) {}

  async getUserData(token: string) {
    try {
      // بررسی و decode کردن توکن
      const decoded = this.jwtService.decode(token);
      const userId = decoded.sub // شناسه کاربر از توکن

      // دریافت اطلاعات کاربر از دیتابیس
      const user = await this.prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        throw new Error('User not found');
      }

      // بازگرداندن اطلاعات کاربر
      return {
        id: user.id,
        email: user.email,
        username: user.username,
        creactedAt : user.creactedAt,
        
      };
    } catch (error) {
      throw new Error('Failed to fetch user data');
    }
  }
}
