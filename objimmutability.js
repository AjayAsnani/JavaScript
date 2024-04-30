console.log("Object Immutability");

//Object should be key value pairs and key should always be a string.(key==name), (value==john)
const user = {
  name: "John",
  age: 23,
  country: "US",
  isMarried: "false",
};

//We can mutate(change ) this object
//All the objects are extensible by nature
//They won't be extensible if we make it immutable.
user["address"] = "New York city";
user["age"] = 45;
delete user["isMarried"];
console.log(user);
console.log(Object.isExtensible(user));

Object.defineProperty(user, "isAdmin", {
  //We cannot able to delete property when created using object.defineproperty
  value: false,
  writable: true,
  enumerable: true,
});
console.log(user);

//There are 3 ways to make object immutable
// 1 Prevent extensions
// 2 Using the SEAL() method
// 3 Using the FREEZE() method

// 1 Prevent extensions
// We cannot create a new property but can still edit and delete existing properties
Object.preventExtensions(user);
console.log(Object.isExtensible(user));
user["phone"] = "123-123-123"; //Trying to add but no added
user["name"] = "Doe"; //Editing existing property
delete user["country"]; //Deleting existing property
console.log(user);

// 2 Using the SEAL() method
// We cannot create or delete a property but we can update a property.
Object.seal(user);
delete user["name"]; //DELETE
user["email"] = "qwerty@gmail.com"; //ADDING
user["age"] = 32; //UPDATING
console.log(user);

// 3 Using the FREEZE() method
// We cannot create, update or delete an existing property.
// Freeze method works for 1st level properties.
// It will not work with nested properties.
Object.freeze(user);
delete user["name"]; //DELETE
user["email"] = "qwerty@gmail.com"; //ADDING
user["age"] = 12; //UPDATING
console.log(user);
console.log(Object.isFrozen(user)); //To check whether object is frozen or not.

//New Object
const config = {
  db: "mongoDB",
  host: "localhost",
  password: "fake",
  port: 512,
  admin: {
    name: "John", //It will change because irt is a nested object
    rights: ["create", "update", "delete"],
  },
};
Object.freeze(config);
config["db"] = "MySql";
config.admin.name = "Doe";
console.log(config);

// DEEP FREEZE
// Used to FREEZE Nested Objects
const deepFreeze = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      deepFreeze(obj[key]);
    }
  });
  Object.freeze(obj);
};
deepFreeze(config);
config["db"] = "MySql";
config.admin.name = "John Doe";
console.log(config);

// Why to use DEEP FREEZE?
// When we don't want to change anything in our object.
// When we want immutability we can use Deep freeze to achieve immutability.

// Making array immutable
const arr = [1, 2, 3, 4, 5];
console.log(Object.freeze(arr));
console.log(Object.isExtensible(arr));
arr.push(6);
arr.pop(5);
arr.length = 0;
