﻿var isDialogOpen = false;

$(document).ready(function () {
    function setOpenFlag(e) {
        isDialogOpen = true;
        e.stopPropagation();
    }

    // When the user clicks the project tile, open the corresponding modal
    $("#tileIms").click(function (e) {
        $("#modalIms").css({ "display": "block" });
        setOpenFlag(e);
    });

    $("#tileMovieTrailer").click(function (e) {
        $("#modalMovieTrailer").css({ "display": "block" });
        setOpenFlag(e);
    });

    $("#tilePortfolio").click(function (e) {
        $("#modalPortfolio").css({ "display": "block" });
        setOpenFlag(e);
    });

    $("#tileSoon").click(function (e) {
        $("#modalSoon").css({ "display": "block" });
        setOpenFlag(e);
    });

    // When the user clicks on (x), close the modal
    $(".modal__close").click(function (e) {
        $(".modal").css({ "display": "none" });
        isDialogOpen = false;
        e.stopPropagation();
    });

    // When the user clicks anywhere outside of the modal, close it
    $(document).click(function (e) {
        if (isDialogOpen == false)
            return;

        var dialog = $(".modal__content");

        // if the target of the click isn't the dialog nor a descendant
        if (!dialog.is(e.target) && dialog.has(e.target).length === 0) {
            dialog.parent().css({ "display": "none" });
        }
    });
});