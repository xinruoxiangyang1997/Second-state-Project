$(function() {
    //1.获取所需元素
    imgList = $('.showList>li>img');
    titles = $('.detail>h4');
    describe = $('.detail>p');
    detailHref = $('.right>a:eq(0)');
    onlineHref = $('.right>a:eq(1)');

    //2.点击切换按钮
    $('.tab_bar>li').click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var index = $(this).index();

        //3.调用函数插入相关信息到前端页面

        function insertMsg(imgs, title, dsb, detail, online) {
            for (var i = 0; i < imgList.length; i++) {
                imgList[i].src = '';
                imgList[i].src = imgs[i];
            }
            titles.text('');
            titles.text(title);
            describe.text('');
            describe.text(dsb);
            detailHref.attr('href', detail);
            onlineHref.attr('href', online);
        };
        $.getJSON('../js/qcloud_data_wj.json', function(responseText) {

            var video = responseText.video,
                wechat = responseText.wechat_ecology,
                commerce = responseText.commerce,
                software = responseText.software,
                saas = responseText.SAAS,
                bd = responseText.big_data,
                o2o = responseText.O2O,
                travel = responseText.travel,
                game = responseText.game,
                mdc = responseText.mdc_treat,
                finance = responseText.finance,
                hardware = responseText.hardware
            switch (index) {
                case 0:
                    insertMsg(video.imgs, video.title, video.describe, video.details, video.online);
                    break;
                case 1:
                    insertMsg(wechat.imgs, wechat.title, wechat.describe, wechat.details, wechat.online);
                    break;
                case 2:
                    insertMsg(commerce.imgs, commerce.title, commerce.describe, commerce.details, commerce.online);
                    break;
                case 3:
                    insertMsg(software.imgs, software.title, software.describe, software.details, software.online);
                    break;
                case 4:
                    insertMsg(saas.imgs, saas.title, saas.describe, saas.details, saas.online);
                    break;
                case 5:
                    insertMsg(bd.imgs, bd.title, bd.describe, bd.details, bd.online);
                    break;
                case 6:
                    insertMsg(o2o.imgs, o2o.title, o2o.describe, o2o.details, o2o.online);
                    break;
                case 7:
                    insertMsg(travel.imgs, travel.title, travel.describe, travel.details, travel.online);
                    break;
                case 8:
                    insertMsg(game.imgs, game.title, game.describe, game.details, game.online);
                    break;
                case 9:
                    insertMsg(mdc.imgs, mdc.title, mdc.describe, mdc.details, mdc.online);
                    break;
                case 10:
                    insertMsg(finance.imgs, finance.title, finance.describe, finance.details, finance.online);
                    break;
                case 11:
                    insertMsg(hardware.imgs, hardware.title, hardware.describe, hardware.details, hardware.online);
                    break;
            }
        });
    });

});