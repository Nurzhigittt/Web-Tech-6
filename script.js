$(document).ready(function() {
    console.log("jQuery is ready!");

    $("h1").css("font-size", "32px");

    $("#headline").text("Welcome! I am learning jQuery.");

    $(".intro").css("font-size", "18px");

    $("#lightTheme").click(function() {
        $("body").css({
            "background-color": "white",
            "color": "black"
        });
    });

    $("#darkTheme").click(function() {
        $("body").css({
            "background-color": "black",
            "color": "white"
        });
    });

    $("#hideDetails").click(function() {
    $("#aboutDetails").hide();
});

$("#showDetails").click(function() {
    $("#aboutDetails").show();
});

$("#toggleDetails").click(function() {
    $("#aboutDetails").toggle();
});
$("#fadeInImages").click(function() {
    $("#galleryImages img").fadeIn(1000);
});

$("#fadeOutImages").click(function() {
    $("#galleryImages img").fadeOut(1000);
});

$("#fadeToggleImages").click(function() {
    $("#galleryImages img").fadeToggle(1000);
});
$("#musicHeading").click(function() {
    $("#musicPanel").slideToggle();
});

$("#movieHeading").click(function() {
    $("#moviePanel").slideToggle();
});

$("#subjectHeading").click(function() {
    $("#subjectPanel").slideToggle();
});

$("#openPanels").click(function() {
    $(".panel").slideDown();
});

$("#closePanels").click(function() {
    $(".panel").slideUp();
});
$("#addSkill").click(function() {
    const skill = $("#newSkill").val().trim();

    if (skill !== "") {
        const item = $("<li>").text(skill);
        $("#skillsList").append(item);
        $("#newSkill").val("");
    }
});

$("#prependSkill").click(function() {
    const skill = $("#newSkill").val().trim();

    if (skill !== "") {
        const item = $("<li>").text(skill);
        $("#skillsList").prepend(item);
        $("#newSkill").val("");
    }
});

$("#removeSkill").click(function() {
    $("#skillsList li:last-child").remove();
});

$("#changeLink").click(function() {
    $("#socialLink").attr(
        "href",
        "https://github.com/Nurzhigittt/Web-Tech-5"
    );

    $("#socialLink").text("My JavaScript Project");
});
$("#contactName").on("input", function() {
    $("#nameOutput").text($(this).val());
});

$("#contactEmail").on("input", function() {
    $("#emailOutput").text($(this).val());
});
let skillsExpanded = false;

$("#animateSkills").click(function() {
    if (skillsExpanded === false) {
        $("#htmlBar").animate({ width: "80%" }, 1000);
        $("#cssBar").animate({ width: "60%" }, 1000);
        $("#jsBar").animate({ width: "40%" }, 1000);

        skillsExpanded = true;
    } else {
        $(".skill-bar").animate({ width: "0%" }, 1000);

        skillsExpanded = false;
    }
});
});
