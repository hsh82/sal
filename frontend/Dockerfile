# استفاده از یک image پایه برای Angular
FROM node:20 as build-stage

# تنظیم دایرکتوری کار
WORKDIR /app

# کپی فایل‌های پروژه
COPY package*.json ./

# نصب dependencies
RUN  npm install

# کپی بقیه فایل‌های پروژه
COPY . .

# ساخت پروژه Angular
RUN npm run build 
# EXPOSE 4200
CMD ["npm", "start"]
CMD ["npm" , "run" ,"serve:ssr:frontend"]



# FROM nginx:alpine

# # کپی فایل‌های build شده Angular به پوشه NGINX
# COPY dist/ /usr/share/nginx/html

# # کپی تنظیمات NGINX
# COPY nginx.conf /etc/nginx/nginx.conf

# # پورت مورد نظر
# EXPOSE 80

# # اجرای NGINX
# CMD ["nginx", "-g", "daemon off;"]








