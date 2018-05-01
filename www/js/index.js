/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
 function enviar() {
		
			//PEGAR VARIÁVEIS
			var empresa = $("#empresa").val();
			var contrato = $("#contrato").val();
			var album = $("#album").val();
			var senha = $("#senha").val();
			var response;

			if (empresa == '') {
				$("#resposta").html("");
				$("#resposta").html("<p>Preencha o campo Empresa</p>");
			}
			else if (contrato == '') {
				$("#resposta").html("");
				$("#resposta").html("<p>Preencha o campo Contrato</p>");
			}
			else if (album == '') {
				$("#resposta").html("");
				$("#resposta").html("<p>Preencha o campo Album</p>");
			}
			else if (senha == '') {
				$("#resposta").html("");
				$("#resposta").html("<p>Preencha o campo Senha</p>");
			}
			else {
				$.ajax({
				  type: "GET",
				  url: 'http://www.porcocapitalista.com.br/teste4.php',
				  data: {'empresa': empresa, 'contrato': contrato, 'album': album, 'senha': senha},
				  dataType: 'jsonp',
				  jsonp: 'jsoncallback',
				  timeout: 5000,
				  success: function(response, status){
									$("#resposta").html("");
									var caminhocompleto = "http://www.porcocapitalista.com.br"+response+"/05.jpg"
									$("#resposta").html("<p>"+caminhocompleto+"</p>");
									
									//Aqui vai o comando do download
									var fileTransfer = new FileTransfer();
									var uri = encodeURI(caminhocompleto);
									var fileURL =  "///storage/emulated/0/DCIM/05.jpg";

								   fileTransfer.download(
									  uri, fileURL, function(entry) {
										 console.log("download complete: " + entry.toURL());
										 $("#resposta").html("<p>Deveria ter dado certo...</p>");
									  },
										
									  function(error) {
										 console.log("download error source " + error.source);
										 console.log("download error target " + error.target);
										 console.log("download error code" + error.code);
										 $("#resposta").html("<p>Deu um erro aí!</p>");
									  },
										
									  false, {
										 headers: {
											"Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
										 }
									  }
								   );
								   //Aqui termina o script do download
									
									
									
									
							}
				});
				
				
			}

	    } 
 
 
 
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		//Aqui começa o meu script
		document.getElementById("baixarAlbum").addEventListener("click", enviar);
		var camin = window.location.pathname;
		document.getElementById("textoteste").innerHTML = "<p>"+camin+"</p>";
		
		
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
    }
};
