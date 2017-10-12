var app={
    initialize : function(){
        document.addEventListener('deviceready',
        this.onDeviceReady.bind(this), false);
        app.member.onCreate();
    },
    onDeviceReady : function(){
        this.receiveEvent('deviceready');
    },
    receiveEvent : function(x){
        var parentElement = document.getElementById(x);
        var listeningElement = parentElement.querySelector('.listening');
        var receiveEvent = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none');
        receiveElement.setAttribute('style','display:block');
        console.log('Received Event: '+x);
    }
};
app.member=(function(){
    var onCreate = function(){
        setContentView();
        $('#loginBtn').click(e=>{
            var id=$('#id').val();
                hybrid.showToast('로그인');
        });
        $('#joinBtn').click(e=>{
                alert('ooo');
        });
    };
    var setContentView = function(){
        var compUI={
        	  br    :()=>{return $('<br/>');},
              div   : x=>{return $('<div/>',{id:x});},
              h1    : x=>{return $('<h1/>',{id:x});},
              span  : x=>{return $('<span/>',{id:x});},
              iTxt  : x=>{return $('<input/>',{id:x,type:'text'});},
              aBtn  : x=>{return $('<a>',{href:'#', role: 'button', id:x});},
              iBtn  : x=>{return $('<input/>',{id:x,type:'button'});},
              btn   : x=>{return $('<button/>', {id:x});},
              image : (x,y)=>{return $('<img/>',{id:x,src:y});},
              input : (x,y)=>{return $('<input/>',{id:x,type:y});},
              table : x=>{return $('<table/>',{id:x , class:'table'});},
              thead : x=>{return $('<thead/>',{id:x})},
              tbody : x=>{return $('<tbody/>',{id:x})},
              tr : x=>{return $('<tr/>',{id:x})},
              th : ()=>{return $('<th/>')},
              td : ()=>{return $('<td/>')},
              idTag : (x)=>{return $('<'+x+'/>')},
              tag : (x,y)=> {return $('<'+x+'/>')
                 id:y}
         };
            $('#content').html(
            '<h1>로그인</h1>'
            );
            $('#content').append(
                compUI.input('id','text')
            );
            $('#content').append(
                compUI.input('pass','text')
            );
            $('#content').append(
                compUI.btn('loginBtn')
            );
            $('#content').append(
                compUI.btn('joinBtn')
            );
            $('#id').attr('placeholder', 'ID');
            $('#pass').attr('placeholder', 'Password');
            $('#loginBtn').text('로그인♡');
            $('#joinBtn').text('회원가입♡');

    };
    return {onCreate : onCreate};
})();

$(function(){
    app.initialize();
});