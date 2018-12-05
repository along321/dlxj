layui.use(['form','layer','jquery'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer
        $ = layui.jquery;

    // 链接
    $(".loginBody .seraph").click(function(){
        layer.msg($(this).attr("href"),{
            time:5000
        });
    })
    //登录按钮
    form.on("submit(login)",function(data){
        var btn = $(this);
        btn.text("登录中...").attr("disabled","disabled").addClass("layui-disabled");
        $.ajax({
            type: "POST",
            url: ctx+"login",
            data: $('#signupForm').serialize(),
            success: function (r) {
                if (r.code == 0) {
                    window.location.href = ctx+"main";
                } else {
                    layer.msg(r.msg);
                    btn.text("登录").removeAttr("disabled").removeClass("layui-disabled");
                }
            },
        });

        return false;
    })
    //表单输入效果
    $(".loginBody .input-item").click(function(e){
        e.stopPropagation();
        $(this).addClass("layui-input-focus").find(".layui-input").focus();
    })
    $(".loginBody .layui-form-item .layui-input").focus(function(){
        $(this).parent().addClass("layui-input-focus");
    })
    $(".loginBody .layui-form-item .layui-input").blur(function(){
        $(this).parent().removeClass("layui-input-focus");
        if($(this).val() != ''){
            $(this).parent().addClass("layui-input-active");
        }else{
            $(this).parent().removeClass("layui-input-active");
        }
    })
})
