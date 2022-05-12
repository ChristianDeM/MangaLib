-- CreateTable
CREATE TABLE "manga" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "editorial" VARCHAR(255) NOT NULL,
    "tomosN" INTEGER NOT NULL,
    "precio" INTEGER NOT NULL,
    "estatus" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "manga_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "manga_name_key" ON "manga"("name");
