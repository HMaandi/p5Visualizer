attribute vec3 aPosition;
uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;
uniform float time;
varying vec3 vPos;
varying float height;
uniform float mouseX;
uniform float mouseY;
uniform float low;
uniform float mid;
uniform float high;
varying vec3 vSoundColors;
varying float vTime;

void main() {
  
  vPos = aPosition;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  //positionVec4.xyz *= 0.5;
  vSoundColors = vec3(low, mid, high);
  vTime = time;
  vec3 dir = normalize(aPosition);
  
  float maxHeight = length(positionVec4.xyz) + 0.7;
  positionVec4.xyz += sin(positionVec4.y*20.0*low + time) * dir*0.4*low;
  positionVec4.xyz += sin(positionVec4.x*30.0*mid + time) * dir*0.3*mid;
  positionVec4.xyz += sin(positionVec4.x*40.0*high + time) * dir*0.2*high;
  height = length(positionVec4.xyz) / maxHeight;
  
  //gl_Position = positionVec4;
  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
}