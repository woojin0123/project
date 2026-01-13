$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});

$(document).ready(function() {
    function initAllCounts() {
        const porkCount = pork_list.length;
        $(".tab-link[data-tab='tab-1'] .count-num").text("(" + porkCount + ")");
        const beefCount = beef_list.length;
        $(".tab-link[data-tab='tab-2'] .count-num").text("(" + beefCount + ")");
    }

    initAllCounts();

    $(".tab-link").click(function() {
        const targetTab = $(this).attr("data-tab");
        
        $(".tab-link").removeClass("current");
        $(this).addClass("current");

        $(".tab-content").removeClass("current");
        $("#" + targetTab).addClass("current");
    });
});
