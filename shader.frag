
precision mediump float;
varying float vTime;
varying vec3 vPos;
varying float height;
varying vec3 vSoundColors;
void main() {
  
  vec4 myColor = vec4(1.0, 1.0, 1.0, 1.0);
  myColor.xyz *= gl_FragCoord.xyz;
  myColor = min(myColor, 1.0);
  gl_FragColor = vec4(1.0);
  gl_FragColor.r = abs(sin(vPos.x + vPos.y + vTime*0.4 + 0.6));
  gl_FragColor.g = abs(sin(vPos.x + vPos.y + vTime*0.9 + 0.3));
  gl_FragColor.b = abs(sin(vPos.x + vPos.y + vTime*0.6 + 1.1));
  gl_FragColor.rgb *= min(vSoundColors+ 0.2 , 1.0);
  gl_FragColor.rgb *= height;

  
}