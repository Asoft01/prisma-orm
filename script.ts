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
// const users = await prisma.user.findMany({
//     where: {
//         // name: { equals: "Sally" },
//         // name: { not: "Sally" }
//         // name : { in: ["Sally", "Kyle"] }, 
//         // name : { notIn: ["Sally", "kyle"] }
//         // age : { lt: 20 }
//         // age : { gt: 20 }
//         ///////////////////////////////
//         name: "Kyle", 
//         age : { gte : 20 },
//     }
// })

//////////////////////////////// CONTAINS ///////////////////////////////
// const users = await prisma.user.findMany({
//     where: {
//         // email : { contains : "@test.com"}
//         // email: { endsWith: "@test1.com"}
//         email: { startsWith: "kyle" }, 
//     }
// })

// const users = await prisma.user.findMany({
//     where: {
//         email: { startsWith: "kyle" }, 
//         name: "Sally"
//     }
// })

//////////////////////////////////////// AND ///////////////////////////////
// const users = await prisma.user.findMany({
//     // where: { 
//     //     AND: [
//     //         {email: {startsWith: "sally" } },
//     //         {name: "Sally"}
//     //     ], 
//     // }
//     /////////////////////////////////////////////
//     // where: { 
//     //     AND: [
//     //         {email: {startsWith: "sally" } },
//     //         {email : {endsWith: "test.com" } },
//     //     ], 
//     // }
//     //////////////////////////////////////////////
//     // where: {
//     //     OR: [
//     //         {email: {startsWith: "sally" } }, 
//     //         {age: { gt: 20} }
//     //     ]
//     // }
//     //////////////////////////////////////////////
//     // where: {
//     //     NOT: { email: { startsWith: "sally" } }
//     // }, 

//     //////////////////////// Query on relationships ////////////////////////
//     // where: {
//     //     userPreference: {
//     //         emailUpdates: true
//     //     }
//     // }
//     ////////////////////////////////////////////////////////////////////////
//     // where: {
//     //     writtenPosts: {
//     //         every: {
//     //             createdAt: new Date
//     //         }
//     //     }
//     // }
//     /////////////////////////////////////////////////////////////////////////
//     // where: {
//     //     writtenPosts: {
//     //         // every: {
//     //         //     title: "Test"
//     //         // }
//     //         //////
//     //         // none: {
//     //         //     title: "Test"
//     //         // }
//     //         ///////
//     //         // some: {
//     //         //     title: "Test"
//     //         // }
//     //         //////
//     //         some: {
//     //             title: { startsWith: "Test"}
//     //         }
//     //     }
//     // }
    
//     // the above will return all the users with the 'every' and 'none keyword cox none of them has no post at all 
//     // 
// })
// console.log(users);
// console.log(users.length);
/////////////////////////////////////////////////////////////////////////////////
// const user = await prisma.post.findMany({
//     where: {
//         author: {
//             isNot: {
//                 age: 21, 
//             }, 
//         }
//     }
// })

// console.log(user);

///////////////////////////////////////// UPDATING ///////////////////////////////////////////////////
// const user = await prisma.user.update({
//     where: {
//         email: "sally@test.com"
//     }, 
//     data:  {
//         email: "sally@test3.com"
//     }, 
// });
////////////////////////////////////////////////////////////////////
// const user = await prisma.user.updateMany({
//     where: {
//         name: "Sally"
//     }, 
//     data:  {
//         name: "New Sally"
//     }
// })
// // the only thing about updateMany is that it does not allow us to select or include 

///////////////////////////////////// UPDATE WITH FANCY STUFF /////////////////////
const user = await prisma.user.update({
    where: {
        email: "kyle@test.com", 
    }, 
    data: {
        age: {
            // increment: 1, 
            // decrement: 1
            divide: 10
        }
    }
})
console.log(user);

}

main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    });