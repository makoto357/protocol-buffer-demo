const Schema = require("./kalidokit_pb");

// using accessors (getters and setters methods) to access and update your data
const lefthand = new Schema.AvatarLeftHand();
const vec3 = new Schema.Vec3();
vec3.setX(5);
vec3.setY(2);
vec3.setZ(3);

lefthand.setLeftwrist(vec3);
console.log(lefthand.getLeftwrist().getX());

// serialize data
const serializedData = vec3.serializeBinary();
console.log(serializedData);

// deserialize data
const deserializedMessage = Schema.Vec3.deserializeBinary(serializedData);
console.log(deserializedMessage);