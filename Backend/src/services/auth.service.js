const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

exports.register = async (data) => {

    const existingUser = await prisma.user.findUnique({
        where:{
            email:data.email
        }
    });

    if(existingUser){
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password,10);

    const user = await prisma.user.create({
        data:{
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            password:hashedPassword,
            phone:data.phone,
            gender:data.gender,
            age:data.age,
            height:data.height,
            weight:data.weight
        }
    });

    delete user.password;

    return user;
};

exports.login = async (data) => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const match = await bcrypt.compare(data.password, user.password);

  if (!match) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
  });

  return token;
};