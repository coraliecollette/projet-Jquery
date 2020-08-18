$(function(){
    /*les , pour ne pas toujours répéter var*/
    
       var $mainMenuItems = $("#main-menu ul").children("li"),
       totalMainMenuItems = $mainMenuItems.length,
       openedIndex = 2,
       
       init=function(){ /* ouvrir la page net avec l'ouverture de J alba */
           bindEvents();
           
           if(validIndex(openedIndex))
               {
                   animateItem($mainMenuItems.eq(openedIndex),true, 700);
               }
           
       },
           
           bindEvents = function (){
               $mainMenuItems.children(".images").click(function(){
               var newIndex = $(this).parent().index(),   
                $item = $mainMenuItems.eq(newIndex);
                if (openedIndex === newIndex)
                {
                    animateItem($item,false,250);
                    openedIndex = -1
                } 
               else
                   {
                        if(validIndex(newIndex))
                        {
                            animateItem($mainMenuItems.eq(openedIndex),false,250);
                            openedIndex = newIndex;
                            animateItem ($item, true, 250);
                             /* = $colorImage = $item.find(".color");
               $colorImage.animate({left:"0px"},250);
               apparaitre la photo color au lieu de bw
               $item.animate({width:"420px"},250); 
               openedIndex = newIndex;*/
                        }
                           
                   }
               
            });
               
               $(".button").hover(function(){
                   $(this).addClass("hovered");
               },
                                 function()
                                 {
                                    $(this).removeClass("hovered");
                                }
                                );
               
               $(".button").click(function(){
                   var newIndex = $(this).index();
                   $item = $mainMenuItems.eq(newIndex);
                if (openedIndex === newIndex)
                {
                    animateItem($item,false,250);
                    openedIndex = -1
                } 
               else
                   {
                        if(validIndex(newIndex))
                        {
                            animateItem($mainMenuItems.eq(openedIndex),false,250);
                            openedIndex = newIndex;
                            animateItem ($item, true, 250);
}
                           
                   }
               })
               
               
           },
           
           validIndex = function(indexToCheck){
             return (indexToCheck>= 0) && (indexToCheck<totalMainMenuItems);  
           },
           
           animateItem = function($item, toOpen, speed){
               var $colorImage = $item.find(".color"),
               itemParam = toOpen? {width: "420px"}: {width: "140px"},
                /* si toopen est vraie : 420 px sinon 140*/ 
                colorImageParam = toOpen ? {left: "0px"}: {left: "140px"};
               
               $colorImage.animate(colorImageParam,speed);
               $item.animate(itemParam,speed); 
              
           };
       
    
    init();
    
    
});