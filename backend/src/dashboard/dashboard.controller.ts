/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Req,
  UnauthorizedException,
  Headers,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { request, Request } from 'express';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get()
  async getUserData(@Req() request: Request) {
    const authorization = request.headers.authorization;
    if (!authorization) {
      throw new UnauthorizedException('No token provided');
    }
    const token = authorization.replace('Bearer ', '');
    console.log({ authorization, token });
    try {
      const userData = await this.dashboardService.getUserData(token);
      return userData;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
