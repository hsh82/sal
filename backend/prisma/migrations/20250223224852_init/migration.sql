-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "creactedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
    -- CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
    -- CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
);
