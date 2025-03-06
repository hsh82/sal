/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Catch, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, AuthLog } from './dto';
import * as argon from 'argon2'
import { constants } from 'buffer';
import { ifError } from 'assert';
import { from } from 'rxjs';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Prisma } from '@prisma/client';
import { Or } from 'typeorm';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { access } from 'fs';

@Injectable({})
export class AuthService {
    constructor(private prisma:PrismaService , private jwt:JwtService, private config : ConfigService){

    }
    async login(dto : AuthLog) {

            const user = await this.prisma.user.findUnique({
                where: {
                  username: dto.username
                },
              });
          
              if (!user)
                {
                    throw new ForbiddenException("User not exiset !")
                }
                const pasmathch = await argon.verify(user.password,dto.password)
                if (!pasmathch){
                    throw new ForbiddenException("password not correct !")
                }
                
            return this.signToken(user.id,user.email,user.username)
        }



    async signup(dto : AuthDto) {
        try{
            const hash = await argon.hash(dto.password)
            const user = await this.prisma.user.create({
                data : {
                    email : dto.email ,
                    username : dto.username,
                    password : hash
                    

                }
        })
        
        return this.signToken(user.id,user.email,user.username)
        }
        catch(error){
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    
                    
                    const user = await this.prisma.user.findUnique({
                        where: {
                          email: dto.email,
                        },
                      });
                  
                      if (user?.id) {
                        throw new ForbiddenException("This Email is alredy Taken !")
                      } else {
                        throw new ForbiddenException("This Username is alredy Taken !")
                      }
                    
                    
                }
            }else {throw new ForbiddenException("chi shod ? ")}
        }

    }
    async signToken(userId : number , email : string , username : string):Promise<{accessToken: string;} >{
      const payload = {
        sub : userId,
        email 
      }
      const secret = this.config.get('jwt_secret')
      const token = await this.jwt.signAsync(payload,{
        expiresIn: '15m',
        secret : secret
      } )
      return { accessToken: token };

    }


}
