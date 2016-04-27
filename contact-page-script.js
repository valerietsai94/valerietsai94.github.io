$(document).ready(function(){
	
	// Question 4
	// IMPLEMENT "SHOW MODAL" WHEN "CLICK ON LOGIN BUTTON FROM MAIN PAGE" HERE
	$("#link2").click(function () {
		$("#modal-container2").show();
	});

	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE
	$(".textfix2").click(function () {
		$("#modal-container2").hide();
	});

	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
	
	
	// Question 5
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	$("#modal-overlay2").click(function () {
		$("#modal-container2").hide();
	});
});