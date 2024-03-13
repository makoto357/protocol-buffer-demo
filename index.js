const Schema = require("./kalidokit_pb");

const lefthand = new Schema.AvatarLeftHand();
const vec3 = new Schema.Vec3();
vec3.setX(1);
vec3.setY(2);
vec3.setZ(3);

lefthand.setLeftwrist(vec3);
console.log(lefthand.getLeftwrist().getX());
