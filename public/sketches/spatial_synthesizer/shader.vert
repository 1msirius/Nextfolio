// Vertex Shader (shader.vert)

attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  // Pass the texture coordinates to the fragment shader
  vTexCoord = aTexCoord;
  
  vec4 positionVec4 = vec4(aPosition, 1.0);
  // Make sure the shader covers the entire screen:
  // scale the rect by two, and move it to the center of the screen
  // if we don't do this, it will appear with its bottom left corner
  // in the center of the sketch
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
}
