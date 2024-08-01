# threejs-function-grapher
- For the unit 7 Programming Assignment, we will implement a function grapher. Essentially you must create a program that can plot a function that is in the form:
 z = f(x,y)

 - Your program must generate input values between -1 and 1 in increments of .1 and use this to plot x, y, and z vertices to be included as part of a mesh that will then be graphically displayed. 
 If you would like you can implement the functionality to allow both the function to be mapped as expressed as a mathematical formula and the input values to be entered by the user of your program, however, this is optional.

- Your program must implement mouse controls such that the function that you have mapped can be rotated and scaled using the mouse.

- Your project MUST include a plane and an axis helper to provide a point of reference for your function that indicates the origin which is assumed to be x=0, y=0, and z=0.

- The axis helper is an object that can be added to you scene that looks like the following and indicates the direction of x, y, and z within the scene.
- Your completed project should look like the following example (you do not need to provide the input box in the upper right hand corner):
- - In the above example we are graphing the function z = f(x,y) where f(x,y) = x2 + y2. 

- Your function grapher should be able to accommodate any function that can be expressed and evaluated as a mathematical function. In the case of the above example the input values of x and y are evaluated to produce a value of z producing the coordinates for a vertex. Although your program should be able to graph any function in the form z = f(x,y), you should use one of the following to submit as part of the assignment:

1. produces a cone shape 2. produces a hyperbolic paraboloid

NOTE: that if you implement the functionality to allow the user to enter any function that they want then this is NOT required so long as your program can graph any of them.

The input values can be generated using simple for loops as indicated below or by using one of the other examples that have been identified.


for (x=Min_x; x<=Max_x; x+=.01)  { for(y=Min_y; y<=Max_y; y+= .01)  { z = fun(x,y); // note that fun must evaluate the expression new Vector3 ( ….); } }


- Keep in mind that you must capture all of the vertices that you are defining and provide them as input into one of the geometry functions within Three.js. 

- The ParametricGeometry object is perhaps the best one to use, however, if your research identifies another approach feel free to use it so long as you can achieve the same results.

- It is essential to document your code liberally with comments to ensure that a reviewer understands what you were attempting to do within the assignment. 

Grading Criteria:

1. The assignment should be demonstrate the ability to graph a given function 

2. The assignment should include one of the specified formulas or does it allow the user to enter the formula

3. User should be able to rotate and scale the graphed function

4. An Axis helper should be included in the scene (the object that indicates the x, y, and z dimensions)

5. A plane (either solid or wireframe) should be perpendicular to the object at the origin included

6. The JavaScript / Three.js code should be well documented 
