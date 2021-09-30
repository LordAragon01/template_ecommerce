$(function(){

    //Nav Language
    let listlang = $('.listlang');
    let languagedefault = $('.listlang li a').attr("data-lang");
    let languageoption = $('.languageoption');
    let boxlang = $('.boxlang');
    
    
    languageoption.text(languagedefault);

    boxlang.on('click', function(e){

        e.preventDefault();

        listlang.fadeToggle('slow');

    });

    //Choose a Language
    listlang.on('click', 'li a', function(){


        var lang = $(this);
        var option = lang.attr("data-lang");

        languageoption.empty();

        languageoption.text(option);

    });

    let inputsearch = $('.formsearch').find('input');
    let btnsearch = $('.btnsearch').find('i');

    //hover search
    inputsearch.mouseover(function(){

        btnsearch.css('color', '#fff');
        //console.log("hover");

    }).mouseout(function(){

        btnsearch.css('color', '#666');

    });

    //Account Menu

    let accounticon = $('.accessmenu');
    let accountmenu = $('.accountmenu');

    accounticon.on('click', function(e){

        e.preventDefault();

        if(accounticon.hasClass('fa-user-o')){

            accounticon.removeClass('fa-user-o');
            accounticon.addClass('fa-user');

        }else{

            accounticon.removeClass('fa-user');
            accounticon.addClass('fa-user-o');

        }

        accountmenu.fadeToggle('slow');

    });


    //Breadcrumb

    let origin  = window.location.href; 
    //var pathname = window.location.pathname;

    let libreadcrumb = $('.breadcrumb');
    let i = 0; 

    for(i; i <= 3; i++){

        libreadcrumb.prepend("<li class='breadcrumb-item' aria-current='page'></li>");
     
    }


    if(origin){

        libreadcrumb.find('li:eq(0)').addClass('activebreadcrumb').html("<a href='" + origin + "' target='_self'> Home </a>");

    }
    
        libreadcrumb.find('li:eq(1)').text('Categoria 3');
        libreadcrumb.find('li:eq(2)').text('Categoria 3.2');
        libreadcrumb.find('li:eq(3)').text('Categoria 3.2.1');


    //Title Page
    
    let titlepage = $('.titlepage');
    let clone = $('.breadcrumb li:eq(3)').clone().text();

    titlepage.text(clone);

    //Header SubMenu
    
    let navli = $('.navbar-nav').find('.nav-item');
    let submenucontent = $('.submenucontent');
    let contentone = 'content/submenu1.html';
    let contentwo = 'content/submenu2.html';
    let contenthree = 'content/submenu3.html';
    let contentfour = 'content/submenu4.html';

    //Function to Load Content for submenu 
    function submenuLoad(content, hrefnav){

        submenucontent.load(content + " #" + hrefnav, function(response, status, jqXHR){

            //console.log(response, status, jqXHR)

        });

    }

    navli.mouseover(function(){

        let navitem = $(this);
 
        //Add a Class
        if(!navitem.hasClass('active')){

            navitem.addClass('active');
            navitem.nextAll().removeClass('active'); 
            navitem.prevAll().removeClass('active'); 

        }

        //Active Div for Submenu
        submenucontent.addClass('activesubmenu');

        let hrefnav = navitem.find('a').attr('href');

        switch(hrefnav){

            case 'categoria1':
                submenuLoad(contentone, hrefnav);
            break;
            
            case 'categoria2':
                submenuLoad(contentwo, hrefnav);
            break;

            case 'categoria3':
                submenuLoad(contenthree, hrefnav);
            break;

            case 'categoria4':
                submenuLoad(contentfour, hrefnav);
            break;

        }



    }).mouseout(function(){

        let navitem = $(this);

        if(navitem.hasClass('active')){

            navitem.nextAll().removeClass('active'); 
            navitem.prevAll().removeClass('active'); 

        }


    });

    //Interation Submenu with Display in Home
    
    submenucontent.mouseover('.categorybase',function(){

        let children = $(this).children();

        if(children){

            submenucontent.addClass('activesubmenu');
            //navli.addClass('active');
        }
        

    }).mouseout(function(){

       
        submenucontent.removeClass('activesubmenu');
        //navli.removeClass('active');

    });


    //Activate Second Submenu + Hover Second Submenu

    submenucontent.mouseover(function(event){

       let children = $('.categorybase').children(); 
       let listsubmenu = [];
       listsubmenu = children.find('.firstsubmenu li');

       let secondsubmenu = $('.secondsubmenu');
       let segsubmenunav = $('.segsubmenunav');
       let segsubmenunavtwo = $('.segsubmenunavtwo');

       var target = $( event.target );
       if ( target.is( listsubmenu )) {

        let li = [];
        li = $(target);
        var subcategory = li.attr('data-subcategory');

        li.find('i').addClass('acitiveiconsubmenu');
        secondsubmenu.addClass('activesecondsubmenu');
        
        switch(subcategory){

            case 'subcategoria1':
                if(segsubmenunav.hasClass('activesegsubmenunav')){
                    secondsubmenu.addClass('activesecondsubmenu');
                    segsubmenunav.removeClass('activesegsubmenunav').delay(600);
                }else{
                    secondsubmenu.find(segsubmenunav).addClass('activesegsubmenunav').delay(400);
                }
               
            break;

            case 'subcategoria2':
                if(segsubmenunavtwo.hasClass('activesegsubmenunav')){
                    secondsubmenu.addClass('activesecondsubmenu');
                    segsubmenunavtwo.removeClass('activesegsubmenunav').delay(600);
                }else{
                    secondsubmenu.find(segsubmenunavtwo).addClass('activesegsubmenunav').delay(400);
                }
               
            break;

        }

        //secondsubmenu.find(segsubmenunav).addClass('activesegsubmenunav');  

       }//End Event Target


    }).mouseout(function(){

        //let secondsubmenu = $('.secondsubmenu');

        //secondsubmenu.removeClass('activesecondsubmenu');

    });


    //Sidebar

    let itemsidebarone = $('.itemsidebarone');
    let itemsidebartwo = $('.itemsidebartwo');
    let itemsidebarthree = $('.itemsidebarthree');
    let itemsidebarfour = $('.itemsidebarfour');
    let itemsidebarfive = $('.itemsidebarfive');
    let itemsidebarsix = $('.itemsidebarsix');
    let firstsidebar = $('.firstsidebar');
    let secondsidebar = $('.secondsidebar');
    let thirdsidebar = $('.thirdsidebar');
    let fourthsidebar = $('.fourthsidebar');
    let fifthsidebar = $('.fifthsidebar');
    let sixsidebar = $('.sixsidebar');

    function listSidebarOpen(sidebar, list){

        sidebar.on('click', function(e){

            e.preventDefault();
    
            var arrow = $(this).find('i');
    
            arrow.toggleClass('fa-caret-up');
            arrow.toggleClass('fa-caret-down');
    
            list.fadeToggle(600);
    
        });

    }

    listSidebarOpen(itemsidebarone, firstsidebar);
    listSidebarOpen(itemsidebartwo, secondsidebar);
    listSidebarOpen(itemsidebarthree, thirdsidebar);
    listSidebarOpen(itemsidebarfour, fourthsidebar);
    listSidebarOpen(itemsidebarfive, fifthsidebar);
    listSidebarOpen(itemsidebarsix, sixsidebar);

    //Loop Itens Sidebar

    function loopItensListSidebar(list, qtd, texto){

        let i = 1;

        for(i; i <= qtd; i++){

            var texto;

            list.append("<li class='list-group-item'><span class='itemlist"+texto+" d-flex flex-row check justify-content-start' data-"+ texto +"='"+ texto + i +"'><p><b>&radic;</b></p><p>"+ texto + " "+ i +"</p></span></li>");

        }

    }


    loopItensListSidebar(firstsidebar, 6, "marca");
    loopItensListSidebar(secondsidebar, 4, "tipo");
    loopItensListSidebar(thirdsidebar, 2, "tamanho");
    loopItensListSidebar(fourthsidebar, 5, "material");
    loopItensListSidebar(sixsidebar, 3, "cor");

    //Choose Sidebar Item

    let checkfirstsidebar = firstsidebar.find('li .itemlistmarca');
    let checksecondsidebar = secondsidebar.find('li .itemlisttipo');
    let checkthirdsidebar = thirdsidebar.find('li .itemlisttamanho');
    let checkfourthsidebar = fourthsidebar.find('li .itemlistmaterial');
    let checksixsidebar = sixsidebar.find('li .itemlistcor');

    function itemListCheck(checkitem, dataitem){

        checkitem.on('click', function(e){

            e.preventDefault();
    
            var getdata = $(this).attr('data-'+ dataitem);
            var itemlist = $(this).find('p:first b');
    
            itemlist.toggleClass('activecheck');
    
            if(itemlist.hasClass('activecheck')){
    
                console.log(getdata);
    
            }
    
        });


    }

    itemListCheck(checkfirstsidebar, "marca");
    itemListCheck(checksecondsidebar, "tipo");
    itemListCheck(checkthirdsidebar, "tamanho");
    itemListCheck(checkfourthsidebar, "material");
    itemListCheck(checksixsidebar, "cor");

    //Loop Products

    let contentproducts = $('.contentproducts');

    for(let i = 1; i <= 12; i++){

        contentproducts.append("<div class='card col-12 col-lg-3 col-md-3 pl-0 pr-0 my-2'><span class='descproduct'>10%</span><img src='assets/images/product.jpg' class='img-fluid w-100' alt='Product - Toogas'><div class='card-body d-flex flex-column align-items-center justify-content-center'><h5 class='card-title'><strong>Produto Específico 90g</strong></h5><span class='producttype my-2'>Premium</span><p class='card-text mb-4'>19,99 €</p><a href='#' class='btn btnproduct'>Adicionar</a></div></div>");

    }



    contentproducts.find('.card:eq(2) .descproduct').css('display', 'flex');
    contentproducts.find('.card:eq(2) .card-text').html("<del> 19,99 € </del><span class='descprice ml-3'> 14,99€ </span>");


    //Copyright

    function getYear() {
        var d = new Date();
        var n = d.getFullYear();
          
       return n;
          
      }
      
      let year = getYear();
      
      $('.footermessage').find('span').text('© Copyright ' + year);
          


});