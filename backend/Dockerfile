# استفاده از یک ایمیج پایه برای Node.js
FROM node:20

# تنظیم دایرکتوری کار
WORKDIR /app

# کپی فایل‌های وابستگی
COPY package*.json package-lock.json* ./


# نصب وابستگی‌ها
RUN npm config set registry https://registry.npm.taobao.org && npm install

# کپی بقیه فایل‌های پروژه
COPY . .

# ساخت پروژه NestJS
RUN npm run build

# پورت مورد نظر
EXPOSE 3000

# اجرای برنامه
CMD ["npm", "run", "start"]