import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ["query"]})

async function main() {
//    const user = await prisma.user.create({ data: { name: "Sally" }}); 
//    console.log(user); 
////////////////////////////////////////////////////////////////////////
    // const user = await prisma.user.findMany({
    //     include:  {
    //         userPreference: true
    //     }
    // }); 
    // console.log(user);
//////////////////////////////////////////////////////////////////////
    // const users = await prisma.user.deleteMany(); 
//////////////////////////////////////////////////////////////////////
// await prisma.user.deleteMany()
// // await prisma.userPreference.deleteMany()
// const user = await prisma.user.create({
//     data: {
//         name: "Kyle", 
//         email: "kyle@test.com", 
//         age: 27, 
//         userPreference: {
//             create: {
//                 emailUpdates: true
//             }
//         }
//     }, 
//     // include: {
//     //     userPreference: true
//     // }
//     select: {
//         name: true,
//         // userPreference: true
//         userPreference: {select: { id : true} }
//     }
//     // We can use either include or select! Bhet we can't use both at the same time 
// });
// console.log(user);
/////////////////////////////////////////////////////// Create Many Users ////////////////////////////////////

// await prisma.user.deleteMany(); 
// const users = await prisma.user.createMany({
//     data: [
//         {
//             name: "Kyle", 
//             email: "kyle@test.com", 
//             age: 27
//         }, 
//         {
//             name: "Sally", 
//             email: "sally@test.com", 
//             age: 32
//         }   
//     ]
// })

// console.log(users); 
//////////////////////////////////////////////// Find Unique ////////////////////////////////////////////////////
// const users = await prisma.user.findUnique({
//     where: {
//         email: "kyle@test.com", 
//     }, 
//     // include: {
//     //     userPreference: true
//     // }
// });
///////////////////////////////////////////////////////////////////////
// const users = await prisma.user.findUnique({
//     where: {
//         age_name: {
//             age: 24, 
//             name: "Kyle"
//         }
//     }
// })
//////////////////////////////////// FIND FIRST //////////////////////////////
// const users = await prisma.user.findFirst({
//     where: {
//         name: "Sally", 
//     }
// })

/////////////////////////////////////// FIND MANY USERS ////////////////////////
// const users = await prisma.user.findMany({
//     where: {
//         name: "Sally"
//     }
// })

///////////////////////////////// FIND MANY ON DISTINCT ///////////////////////
// const users = await prisma.user.findMany({
//     where: {
//         name: "Sally", 
//     }, 
//     // distinct: ["name"]
//     distinct: ["name", "age"]
// })

//////////////////////////////// PAGINATION /////////////////////////////////
// const users = await prisma.user.findMany({
//     where: {
//         name: "Sally", 
//     }, 
//     orderBy: {
//         age: "asc"
//     }, 
//     take: 2, 
//     skip: 1
// })

/////////////////////////////// WHERE EQUALS ///////////////////////////////
const users = await prisma.user.findMany({
    where: {
        // name: { equals: "Sally" },
        name: { not: "Sally" }
    }
})
console.log(users);
console.log(users.length);
}

main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    });