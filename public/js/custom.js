var moveSpeed=200;
//移动到右侧
$('#showPersonInfoToRight').click(function () {
    $('#leftUserInfo').hide(moveSpeed);
    $('#rightUserInfo').show(moveSpeed);
});

//移动到左侧
$('#showPersonInfoToLeft').click(function () {
    $('#rightUserInfo').hide(moveSpeed);
    $('#leftUserInfo').show(moveSpeed);
});