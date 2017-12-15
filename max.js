$(window).bind("load", function() {
    var $chieucao = $('.ndtrai').outerHeight(true);
	$('.noidung').css('height',$chieucao);
});
$(document).ready(function(){
    $('.content a').hover(function(){
    $('.content a').removeClass('sang');
    $(this).addClass('sang');
});});

$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    
// sw color giay
    
    $('.choscl .cl1').click(function() {
        $('.ctone .giay').removeClass('swgiay2');
        $('.ctone .giay').addClass('swgiay');
    }) 
    $('.choscl .cl2').click(function() {
        $('.ctone .giay').removeClass('swgiay2');
        $('.ctone .giay').removeClass('swgiay');
    })
    $('.choscl .cl3').click(function() {
        $('.ctone .giay').removeClass('swgiay');
        $('.ctone .giay').addClass('swgiay2');
    })
    
    
     $('.choscl2fix .cl4').click(function() {
        $('.cttwo .giay2').removeClass('swgiay2');
        $('.cttwo .giay2').addClass('swgiay');
    }) 
    $('.choscl2fix .cl5').click(function() {
        $('.cttwo .giay2').removeClass('swgiay2');
        $('.cttwo .giay2').removeClass('swgiay');
    })
    $('.choscl2fix .cl6').click(function() {
        $('.cttwo .giay2').removeClass('swgiay');
        $('.cttwo .giay2').addClass('swgiay2');
    })
    
    
     $('.choscl3 .cl7').click(function() {
        $('.ctthree .giay3').removeClass('swgiay2');
        $('.ctthree .giay3').addClass('swgiay');
    }) 
    $('.choscl3 .cl9').click(function() {
        $('.ctthree .giay3').removeClass('swgiay2');
        $('.ctthree .giay3').removeClass('swgiay');
    })
    $('.choscl3 .cl8').click(function() {
        $('.ctthree .giay3').removeClass('swgiay');
        $('.ctthree .giay3').addClass('swgiay2');
    })
    
    
    $('.choscl4 .cl11').click(function() {
        $('.ct4 .giay2').removeClass('swgiay2');
        $('.ct4 .giay2').addClass('swgiay');
    }) 
    $('.choscl4 .cl10').click(function() {
        $('.ct4 .giay2').removeClass('swgiay2');
        $('.ct4 .giay2').removeClass('swgiay');
    })
    $('.choscl4 .cl12').click(function() {
        $('.ct4 .giay2').removeClass('swgiay');
        $('.ct4 .giay2').addClass('swgiay2');
    })
    
    $('.choscl5 .cl13').click(function() {
        $('.ct5 .giay3').removeClass('swgiay2');
        $('.ct5 .giay3').addClass('swgiay');
    }) 
    $('.choscl5 .cl14').click(function() {
        $('.ct5 .giay3').removeClass('swgiay2');
        $('.ct5 .giay3').removeClass('swgiay');
    })
    $('.choscl5 .cl15').click(function() {
        $('.ct5 .giay3').removeClass('swgiay');
        $('.ct5 .giay3').addClass('swgiay2');
    })
    
//    end jquery giay
    
     $('.ctone .mua1').click(function() {
        $('.ctone .op1').removeClass('mua1');
        $('.ctone .muao').addClass('mua1');
        $('.ctone .mua1').removeClass('muao');
        $('.ctone .op1').addClass('muao');
    })
     
      $('.ctone .mua2').click(function() {
        $('.ctone .mua2').removeClass('mua1');
        $('.ctone .op1').removeClass('muao');
        $('.ctone .mua2').addClass('muao');
        $('.ctone .op1').addClass('mua1');
    })
      
      $('.mua1').click(function() {
        $('.ctone .giay').addClass('fadeOutLeft animated');
        $('.ctone .viewm').addClass('op52');
        $('.ctone .viewm').addClass('fadeInDown animated');
        $('.ctone .buy').addClass('op53');
        $('.ctone .choscl').addClass('op53');
        
    })
      $('.mua2').click(function() {
        $('.ctone .giay').removeClass('fadeOutLeft animated');
        $('.ctone .viewm').removeClass('op52');
        $('.ctone .viewm').removeClass('fadeInDown animated');
        $('.ctone .buy').removeClass('op53');
        $('.ctone .choscl').removeClass('op53');
    })
      
//      end content one
      
     $('.cttwo .mua3').click(function() {
        $('.cttwo .op2').removeClass('mua3');
        $('.cttwo .muao').addClass('mua3');
        $('.cttwo .mua3').removeClass('muao');
        $('.cttwo .op2').addClass('muao');
    })
     
      $('.cttwo .mua4').click(function() {
        $('.cttwo .mua4').removeClass('mua3');
        $('.cttwo .op2').removeClass('muao');
        $('.cttwo .mua4').addClass('muao');
        $('.cttwo .op2').addClass('mua3');
    })
      
      $('.mua3').click(function() {
        $('.cttwo .giay2').addClass('fadeOutRight animated');
        $('.cttwo .viewm').addClass('op52');
        $('.cttwo .viewm').addClass('fadeInDown animated');
        $('.cttwo .buy').addClass('op53');
        $('.cttwo .choscl2fix').addClass('op53');
        
    })
      $('.mua4').click(function() {
        $('.cttwo .giay2').removeClass('fadeOutRight animated');
        $('.cttwo .viewm').removeClass('op52');
        $('.cttwo .viewm').removeClass('fadeInDown animated');
        $('.cttwo .buy').removeClass('op53');
        $('.cttwo .choscl2fix').removeClass('op53');
    })
      
      
//      end content two
      
      $('.ctthree .mua5').click(function() {
        $('.ctthree .op2').removeClass('mua5');
        $('.ctthree .muao').addClass('mua5');
        $('.ctthree .mua5').removeClass('muao');
        $('.ctthree .op2').addClass('muao');
    })
     
      $('.ctthree .mua6').click(function() {
        $('.ctthree .mua6').removeClass('mua5');
        $('.ctthree .op2').removeClass('muao');
        $('.ctthree .mua6').addClass('muao');
        $('.ctthree .op2').addClass('mua5');
    })
      
      $('.mua5').click(function() {
        $('.ctthree .giay3').addClass('fadeOutRight animated');
        $('.ctthree .viewm').addClass('op52');
        $('.ctthree .viewm').addClass('fadeInDown animated');
        $('.ctthree .buy').addClass('op53');
        $('.ctthree .choscl3').addClass('op53');
        
    })
      $('.mua6').click(function() {
        $('.ctthree .giay3').removeClass('fadeOutRight animated');
        $('.ctthree .viewm').removeClass('op52');
        $('.ctthree .viewm').removeClass('fadeInDown animated');
        $('.ctthree .buy').removeClass('op53');
        $('.ctthree .choscl3').removeClass('op53');
    })
      
//      end content three
      
      $('.ct4 .mua7').click(function() {
        $('.ct4 .op2').removeClass('mua7');
        $('.ct4 .muao').addClass('mua7');
        $('.ct4 .mua7').removeClass('muao');
        $('.ct4 .op2').addClass('muao');
    })
     
      $('.ct4 .mua8').click(function() {
        $('.ct4 .mua8').removeClass('mua7');
        $('.ct4 .op2').removeClass('muao');
        $('.ct4 .mua8').addClass('muao');
        $('.ct4 .op2').addClass('mua7');
    })
      
      $('.mua7').click(function() {
        $('.ct4 .giay2').addClass('fadeOutLeft animated');
        $('.ct4 .viewm').addClass('op52');
        $('.ct4 .viewm').addClass('fadeInDown animated');
        $('.ct4 .buy').addClass('op53');
        $('.ct4 .choscl4').addClass('op53');
        
    })
      $('.mua8').click(function() {
        $('.ct4 .giay2').removeClass('fadeOutLeft animated');
        $('.ct4 .viewm').removeClass('op52');
        $('.ct4 .viewm').removeClass('fadeInDown animated');
        $('.ct4 .buy').removeClass('op53');
        $('.ct4 .choscl4').removeClass('op53');
    })
      
//      end content four
      
       $('.ct5 .mua9').click(function() {
        $('.ct5 .op2').removeClass('mua9');
        $('.ct5 .muao').addClass('mua9');
        $('.ct5 .mua9').removeClass('muao');
        $('.ct5 .op2').addClass('muao');
    })
     
      $('.ct5 .mua10').click(function() {
        $('.ct5 .mua10').removeClass('mua9');
        $('.ct5 .op2').removeClass('muao');
        $('.ct5 .mua10').addClass('muao');
        $('.ct5 .op2').addClass('mua9');
    })
      
      $('.mua9').click(function() {
        $('.ct5 .giay3').addClass('fadeOutUp animated');
        $('.ct5 .viewm').addClass('op52');
        $('.ct5 .viewm').addClass('fadeInDown animated');
        $('.ct5 .buy').addClass('op53');
        $('.ct5 .choscl5').addClass('op53');
        
    })
      $('.mua10').click(function() {
        $('.ct5 .giay3').removeClass('fadeOutUp animated');
        $('.ct5 .viewm').removeClass('op52');
        $('.ct5 .viewm').removeClass('fadeInDown animated');
        $('.ct5 .buy').removeClass('op53');
        $('.ct5 .choscl5').removeClass('op53');
    })
    
    
//    chos color
    
    $('.choscl a').click(function() {
        $('.choscl a').removeClass('nut');
        $(this).addClass('nut');
    })
    $('.choscl2fix a').click(function() {
        $('.choscl2fix a').removeClass('nut');
        $(this).addClass('nut');
    })
    $('.choscl3 a').click(function() {
        $('.choscl3 a').removeClass('nut');
        $(this).addClass('nut');
    })
    $('.choscl4 a').click(function() {
        $('.choscl4 a').removeClass('nut');
        $(this).addClass('nut');
    })
    $('.choscl5 a').click(function() {
        $('.choscl5 a').removeClass('nut');
        $(this).addClass('nut');
    })
    
//    fx giay
    
    $( ".ctone .sanpham .giay" ).hover(
  function() {
    $( this ).addClass( "fxgiay" );
  }, function() {
    $( this ).removeClass( "fxgiay" );
  }
); 
    $( ".cttwo .sanpham2 .giay2" ).hover(
  function() {
    $( this ).addClass( "fxgiay" );
  }, function() {
    $( this ).removeClass( "fxgiay" );
  }
);
    $( ".ctthree .sanpham3 .giay3" ).hover(
  function() {
    $( this ).addClass( "fxgiay" );
  }, function() {
    $( this ).removeClass( "fxgiay" );
  }
); 
    $( ".ct4 .sanpham2 .giay2" ).hover(
  function() {
    $( this ).addClass( "fxgiay" );
  }, function() {
    $( this ).removeClass( "fxgiay" );
  }
);
    $( ".ct5 .sanpham3 .giay3" ).hover(
  function() {
    $( this ).addClass( "fxgiay" );
  }, function() {
    $( this ).removeClass( "fxgiay" );
  }
);
     $( ".logo3" ).hover(
  function() {
    $( this ).addClass( "tada animated" );
  }, function() {
    $( this ).removeClass( "tada animated" );
  }
);
   
    $( ".buy" ).hover(
  function() {
    $( this ).addClass( "jello animated" );
  }, function() {
    $( this ).removeClass( "jello animated" );
  }
);
    
//fx buy on product page
    
$( ".asp" ).hover(
  function() {
    $( this ).addClass( "buynow" );
  }, function() {
    $( this ).removeClass( "buynow" );
  }
    
);
    $( ".asp" ).hover(
  function() {
    $('.buybtn').prependTo(this);
  });
    
    $( ".sort1" ).hover(
  function() {
    $( this ).addClass( "buynow" );
  }, function() {
    $( this ).removeClass( "buynow" );
  });
    
    $( ".sort1" ).hover(
  function() {
    $('.comming').prependTo(this);
  });
    
    $( ".fix1" ).hover(
  function() {
    $(".fix2").css('opacity','0');
  }, function() {
    $(".fix2").css('opacity','1');
  });
    
//fx for new page
    
     $( ".saleone" ).hover(
  function() {
    $(this).find(".op9").addClass("bounce animated");
    $(this).find(".op67").addClass("op68");
  }, function() {
    $(this).find(".op9").removeClass("bounce animated");
    $(this).find(".op67").removeClass("op68");
  });
    
//    fx change link img
     $(".pic1").hover(function() {
     $(this).find(".op69").attr('src', 'pic/fx1.gif');
    },function() {
     $(this).find(".op69").attr('src', 'pic/pic1.jpg');
     });
    
    $(".pic1").hover(function() {
     $(this).find(".op70").attr('src', 'pic/fx2.gif');
    },function() {
     $(this).find(".op70").attr('src', 'pic/pic2.jpg');
     }); 
    
    $(".pic1").hover(function() {
     $(this).find(".op71").attr('src', 'pic/fx3.gif');
    },function() {
     $(this).find(".op71").attr('src', 'pic/pic3.jpg');
     }); 
    
    $(".pic1").hover(function() {
     $(this).find(".op72").attr('src', 'pic/fx4.gif');
    },function() {
     $(this).find(".op72").attr('src', 'pic/pic4.jpg');
     });
    
    $(".danhso li a").click(function(){
       $(".danhso li a").removeClass("op73");
       $(this).addClass("op73");
    });
});
//fx scroll to top 
	

$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.menuphu').fadeIn();
		} else {
			$('.menuphu').fadeOut();
		}
	});
});

//fx smooth Scrolling

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//fx extra content

$(document).ready(function() {
    $( ".exfx" ).hover(
  function() {
    $(".exfx").addClass("exfxd");
    $( this ).addClass( "exfxa" );
  }, function() {
    $( this ).removeClass( "exfxa" );
    $(".exfx").removeClass('exfxd');
  });
    
    $(".exfx").click(function (){
    $(".bodyone").addClass("exdrk");
    $(".bodytwo").addClass("active");
    $(".contentbd").addClass("bounceIn animated");
    });
    
    $(".op57").click(function (){
    $(".bodyone").removeClass("exdrk");
    $(".bodytwo").removeClass("active");
    $(".contentbd").removeClass("bounceIn animated");
    });
    
//    fx for bd detail
    
    $(".addtc").click(function (){
    $(".op60").addClass("exdrk");
    $(".op61").addClass("active");
    $(".contentbd").addClass("bounceIn animated");
    });
    
    $(".op57").click(function (){
    $(".op60").removeClass("exdrk");
    $(".op61").removeClass("active");
    $(".contentbd").removeClass("bounceIn animated");
    });
    
    $(".addtc").click(function (){
    $(".op65").addClass("exdrk");
    $(".op66").addClass("active");
    $(".contentbd").addClass("bounceIn animated");
    });
    
    $(".op57").click(function (){
    $(".op65").removeClass("exdrk");
    $(".op66").removeClass("active");
    $(".contentbd").removeClass("bounceIn animated");
    });
    
    $('#ex1').zoom();
    
});
 