﻿
$("#selectimage4").on('click', function () {
    var finder = new CKFinder();
    finder.selectActionFunction = function (fileurl) {
        $("#linkimages4").val(fileurl);
    };
    finder.popup();
});