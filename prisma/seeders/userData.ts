import { Prisma } from "@/app/generated/prisma";

const users: Prisma.UserCreateInput[] = [
    {
        email: "user@example.com",
        name: "User 1",
        password: "password123",
        roles: "user"
    },
    {
        email: "admin@example.com",
        name: "Admin 1",
        password: "password123",
        roles: "admin"
    }
]

export default users;