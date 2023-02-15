function hideBack() {
    $('#divBack').css('display','none');
    $('#movil').css('display','none');
    $('.mob-servicios').css('display','none');
}

function showMenu() {
    document.getElementById('divBack').style.height     = $(document).height() + 'px';
    document.getElementById('divBack').style.width      = $(document).width() + 'px';
    document.getElementById('divBack').style.display    = 'block';
    document.getElementById('movil').style.display      = 'block';
    hideSubMenu('servicios');
}

function showSubMenuMobile(submenu) {
    var submenuInstance = document.querySelectorAll("." + submenu);
    [].forEach.call(submenuInstance, function (submenuInstance) {
        if (submenuInstance.style.display != 'table')
             submenuInstance.style.display = 'table';
        else submenuInstance.style.display = 'none';
    });
}

function showSubMenu(submenu){
  if(document.getElementById(submenu).style.display != 'table'){
    $('#'+submenu).css('display','table');
  }else{
    hideSubMenu(submenu);
  }
}

function hideSubMenu(submenu){
  $('#'+submenu).fadeOut(50,function(){

  });
}

$(document).ready(function () {
    hideSubMenu('servicios');
});
