$(function () {
    //评论展开收起
    $('.mess-box').each(function () {
        var length=$(this).find('.mess-list').length;
        $(this).siblings('.pl-state').find('p i').text(length);
        if(length>0){
            $(this).find('.mess-list:lt(3)').show();
            if(length>3){
                $(this).siblings('.pl-state').show();
            }
        }
    });
    $('.pl-state').click(function () {
        if($(this).hasClass('on')){
            $(this).removeClass('on').find('.quanbu').show();
            $(this).find('.shouqi').hide();
            $(this).find('.arrow-down').show();
            $(this).find('.arrow-up').hide();
            $(this).siblings('.mess-box').find('.mess-list:gt(2)').hide();
        }else{
            $(this).addClass('on').find('.quanbu').hide();
            $(this).find('.shouqi').show();
            $(this).find('.arrow-down').hide();
            $(this).find('.arrow-up').show();
            $(this).siblings('.mess-box').find('.mess-list').show();
        }
    });
    //删除
    $('.pl-del').click(function () {
        $(this).parents('.frd-list').remove();
    });
    // 点赞
    $('.pl-dzan').click(function () {
        var dznum=parseInt($(this).find('span').text());
        if($(this).hasClass('on')){
            dznum--;
            $(this).removeClass('on').find('span').text(dznum);
        }else{
            dznum++;
            $(this).addClass('on').find('span').text(dznum);
        }
    });
    // 图片大小
    $('.frd-phul').each(function () {
        var ulen=$(this).find('li').length;
        if(ulen == 1){
            $(this).find('li').css({width:'3.44rem',height:'3.44rem'});
        }else if(ulen == 2 || ulen == 4){
            $(this).find('li').css({width:'2.68rem',height:'2.68rem'});
        }
    });
});