/**
 * Template was created by Wrangler on 05-Mar-16.  WRANGLET TEMPLATE
 *
 */

/*
    Fill-in the following citation line for your wranglet:
    <p><cite> your_wranglet_name </cite> Author: <author_name>   WrangleID: <your_id> </p>
 */

function iMatrixDef() {
    var a1, a2, a3;
    var b1, b2, b3, b4;
    var c1;

    var iMatrix = [[a1, a2, a3],[b1, b2, b3, b4],[c1]];

}

function wrangletTemplate(iMatrix) {  // give your wranglet your own wranglet name; replace "wrangletTemplate"

/* =========================
       USING iMatrix /oMatrix
       The iMatrixDef class above defines:
        ** the arrangement of cells displayed on the pop-up window input matrixfor you wranglet,
        ** the data types of each cell of the iMatrix
        ** the range limits, if applicable, of the cells legitimate values
        ** the labels for each cell of the iMatrix

       You must retain the output (oMatrix) matrix defined below for your token to produce output.
       Note an iMatrix of dimension [1,0] is a single value input typical of a whole range of
       science, mathematical, business and industry equations.
       For additional information on using a wranglet go to:
            http://www.wranglemath.com/wrangWiki/index.php?title=Wranglet_Template


       For basic wranglets, each element of the iMatrix may contain text, Boolean, decimal real numbers, and integers
       For more advanced wranglets the matrix can contain just about any form of an object.

   =========================
*/

    var oMatrix = [m,n]; //you define here m & n; give them integer values

/*  You can use units on any numeric value, integer or real; just append the dot notation
    for the units.  Example: var value = 15.degreeF;
    See the WrangleMath documentation on units available
*/

    /*
    Get the dimensions and data types for the iMatrix
     */

    // Add your JavaScript to do something with the iMatrix inputs to your wranglet, and
    // put output values into the oMatrix to be displayed

    return oMatrix;
}  // END wrangletTemplate
