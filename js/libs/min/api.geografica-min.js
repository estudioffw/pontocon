function montaCidade(o,a){$.ajax({type:"GET",url:"http://api.londrinaweb.com.br/PUC/Cidades/"+o+"/"+a+"/0/10000",contentType:"application/json; charset=utf-8",dataType:"jsonp",async:!1}).done(function(o){cidades='<option value="">Cidade</option>',$.each(o,function(o,a){cidades+='<option value="'+a+'">'+a+"</option>"}),$("#cidade").html(cidades)})}function montaUF(o){$.ajax({type:"GET",url:"http://api.londrinaweb.com.br/PUC/Estados/"+o+"/0/10000",contentType:"application/json; charset=utf-8",dataType:"jsonp",async:!1}).done(function(a){estados='<option value="">UF</option>',$.each(a,function(o,a){estados+='<option value="'+a.UF+'">'+a.UF+"</option>"}),$("#estado").html(estados),$("#estado").change(function(){montaCidade($(this).val(),o)})})}