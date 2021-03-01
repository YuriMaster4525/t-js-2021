function initGridActions() {
    box1Action();
}

/**
 * **TO-DO:**
 * ```
 * # Box 1 (challenge: size control):
 * - Action (mouse hover in): increase +8px from width and height
 * - Action (mouse hover out): decrease -8px from width and height
 * ```
 * 
 * ## References:
 * - https://www.w3schools.com/jquery/css_css.asp
 * - https://api.jquery.com/mouseover/
 * - https://api.jquery.com/width/
 * - https://learn.jquery.com/using-jquery-core/document-ready/
 */
function box1Action() {
    var box = $("#box-1");
    var sizeControl = {
        width: box.width(),
        height: box.height(),
        increment: 8
    };
    box
        .mouseover(function() {
            var width = sizeControl.width + sizeControl.increment;
            var height = sizeControl.height + sizeControl.increment;
            box.width(width);
            box.height(height);
        })
        .mouseout(function() {
            var width = box.width() - sizeControl.increment;
            var height = box.height() - sizeControl.increment;
            box.width(width);
            box.height(height);
        })

/**
 * 
 * **TO-DO:**
 * # Box 2 (challenge: background color control):
            Action (mouse hover in): change background color from white to black
            Action (mouse hover out): change background color from black to white 
 */

function changebackground() {
    var box = $("#box-2");
};
    .mouseover(function() {
        stylebackgroundColor = "black";
    })
    
    .mouseout(function() {
        stylebackgroundColor = "white";
    });