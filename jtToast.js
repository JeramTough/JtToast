/**
 * Created by Administrator on 2017-02-14.
 */

/**
 *
 * @constructor
 */
function JtToast() {
    var $toast = $("<div align='center' class='container'><div id='jt_toast_box_content'> aaa </div></div>");
    $toast.css("width", "100%");
    $toast.css("paddingTop", "10px");
    $toast.css("paddingBottom", "10px");
    $toast.css("backgroundColor", "#FF0000");
    $toast.css("color", "#FFFFFF");
    $toast.css("fontWeight", "bold");
    $toast.css("position", "absolute");
    $toast.css("zIndex", "100");
    $toast.css("display", "none");
    $toast.prependTo("body");

    /**
     * 原点在左上角，设置Toast的坐标
     * @param x x坐标
     * @param y y坐标
     */
    this.setPosition = function (x, y) {
        if (y != null) {
            $toast.css("top", y);
        }
        if (x != null) {
            $toast.css("left", "x");
        }
    };


    /**
     * 设置Toast出现在当前屏幕顶部
     */
    this.positionAtCurrentTop = function () {
        var y = document.body.scrollTop;
        $toast.css("top", y + "px");
        $toast.css("left", "0px");
    };

    /**
     * 设置Toast出现在当前屏幕底部
     */
    this.positionAtCurrentBottom = function () {
        var y = document.body.scrollTop;
        var h = $(window).height();
        var offsetY = 60;
        y = y + h - offsetY;
        $toast.css("top", y + "px");
        $toast.css("left", "0px");
    };


    /**
     * 显示普通的信息Toast
     * @param content 要显示的内容
     * @param interval 设置显示持续的时间,不填默认2000毫秒
     */
    this.info = function (content, interval) {
        if (interval == null) {
            interval = 2000;
        }
        $toast.css("backgroundColor", "#0000FF");
        $toast.show();
        $toast.find("#jt_toast_box_content").text(content);
        $toast.prependTo("body");
        window.setTimeout(function () {
            $toast.hide();
        }, interval);
    };


    /**
     * 显示警告的信息Toast
     * @param content 要显示的内容
     * @param interval 设置显示持续的时间,不填默认2000毫秒
     */
    this.warn = function (content, interval) {
        if (interval == null) {
            interval = 2000;
        }
        $toast.css("backgroundColor", "#FF0000");
        $toast.show();
        $toast.find("#jt_toast_box_content").text(content);
        $toast.prependTo("body");
        window.setTimeout(function () {
            $toast.hide();
        }, interval);
    };


    /**
     * 显示成功友好的信息Toast
     * @param content 要显示的内容
     * @param interval 设置显示持续的时间,不填默认2000毫秒
     */
    this.nice = function (content, interval) {
        if (interval == null) {
            interval = 2000;
        }
        $toast.css("backgroundColor", "#03d986");
        $toast.show();
        $toast.find("#jt_toast_box_content").text(content);
        $toast.prependTo("body");
        window.setTimeout(function () {
            $toast.hide();
        }, interval);
    };
}

/**
 * 将Toast附加到哪个Dom对象上
 * @param o   dom对象
 * @param text  Toast内容
 * @returns {*|jQuery|HTMLElement}  Toast内容对象
 */
function appendToast(o, text) {
    if(($(o).parent().hasClass("jt_toast"))==false)
    {
        $o1 = $(o).clone();
        $container = $("<div class='jt_toast container'></div>");
        $toast = $("<span class='toast_content'>" + text + "</span>");

        $container.css("position","relative");

        $toast.css("position","absolute");
        $toast.css("top","-100%");
        $toast.css("backgroundColor","#FF0004");
        $toast.css("padding","5px");
        $toast.css("color","#FFFFFF");
        $toast.css("WebkitBorderRadius","45px");
        $toast.css("MozBorderRadius","45px");
        $toast.css("borderRadius","45px");
        $toast.css("borderWidth","1px");
        $toast.css("borderColor","#000000");
        $toast.css("borderStyle","solid");

        $toast.appendTo($container);
        $o1.appendTo($container);
        $(o).before($container);
        $(o).remove();
        return $toast;
    }
}

/**
 * 清除Dom对象上附属的Toast对象
 * @param o dom对象
 */
function clearToast(o) {
    if($(o).parent().hasClass("jt_toast"))
    {
        $o1 = $(o).clone();
        $(o).parent().before($o1);
        $(o).parent().remove();
    }

}
