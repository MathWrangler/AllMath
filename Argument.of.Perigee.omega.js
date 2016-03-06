/**
 * Created by Wrangler on 05-Mar-16.
 */

/*
 Fill-in the following citation line for your wranglet:
 <p><cite> Argumentof Perigee </cite> Author: Wrangler  WrangleID: Wrangler </p>
 */










function argumentOfPerigee_omega() {
    /* =========================
     USING iMatrix /oMatrix
     You must retain the input (iMatrix) and output (oMatrix) matrices for your token to be used
     by WrangleMath.  Note a iMatrix or oMatrix of dimension [1,0] is a single value input.

     An element of the iMatrix may contain text, Boolean, reals, and integers

     A column of inputs, indexed by 'j' must contain the same elemnt type
     =========================
     */
    var i =[2.3];
    var oMatrix = [1,0];

    var nx = iMatrix(1,1);
    var nx = iMatrix[2,1];
    var nx = iMatrix[3,1];

    var ex = iMatrix[1,2];
    var ex = iMatrix[2,2];
    var nx = iMatrix[3,2];

    var nMag = vectorNorm(nx,ny,nz);
    var eMag = vectorNorm(ex,ey,ez);
    var ndote = dotProduct(nx,ny,nz,ex,ey,ez);
    var omega =  (ndote/(nMag*eMag)).radians;

    oMatrix[1,0] = omega.degrees;

    return oMatrix;
}  // END wrangletTemplate

