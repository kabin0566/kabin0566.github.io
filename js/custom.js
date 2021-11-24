$(document).ready(function(){
    
    // header color change//
    $(window).on("scroll",function(){
    	var scrollDistance = $(window).scrollTop();
    	var $skill_color = $(".js-bg-color");
    	if (scrollDistance > 950){
    		$skill_color.addClass("skill--colored");
    	}
    	else{
    		$skill_color.removeClass("skill--colored");
    	}

    })

})

// plugin


