/**
 * Template was created by Wrangler on 05-Mar-16.  WRANGLET TEMPLATE
 *
 */

/*
    Fill-in the following citation line for your wranglet:
    <p><cite> your_wranglet_name </cite> Author: <author_name>   WrangleID: <your_id> </p>
 */

// Assert if there's a problem with input range'
function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

function iMatrixDef() {  /*  iMatrixDef defines the fields' data types for the iMatrix, the field range limits and
                              how supporting user information is to be displayed
                         */
    // Define the matrix dimensions with data types
    var a1 = 0.0, a2 = 0.0, a3 = 0.0;
    var b1 = 1, b2 = 12, b3 = 50;
    var c1 = "yes";

    // Put limits on the range of the input parameter if needed
    assert(a1 > 100, "a1 must be less than 100");
    assert(!(c1 == 'yes' || c1 == "Yes" || c1 == "YES" || c1 == 'no' || c1 == "No" || c1 == "NO"),
        "c1 can only be Yes or No");
    assert(b1 > 0 && b2 > 0 && b3 > 0,"weights must be greater than zero");
    assert(b1 < 100 && b2 < 100 && b3 < 100,"weights must be greater than zero");

    // define labels for cells
    var a1_Label = "Vector a_x"; var a2_Label = "Vector a_y"; var a3_Label = "Vector a_z";
    var b1_Label = "x weight"; var b2_Label = "y weight"; var b3_Label = "z weight";
    var c1_label = "compute entire range";

    //define the corresponding matrices
    var iM = [[a1, a2, a3],[b1, b2, b3],[c1]];
    var Labels = [[a1_Label,a2_Label, a3_Label],[b1_Label,b2_Label,b3_Label],[c1_label]];

    return [iM,Labels];

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
