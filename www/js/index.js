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
	
var app = {
	// Application Constructor
	initialize : function() {
			this.bindEvents();
		alert(localstorage.route);
		if(localstorage.route=="blrb/me")
		{
			var route=localstorage.route;
			localstorage.route=null;
			login();
			
		}
	
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady : function() {
		app.receivedEvent('deviceready');

		//var ref = window.open('http://blrbr.co', '_blank', 'toolbar=no,location=no');
		//var ref = window.open('http://blrbrdev.azurewebsites.net', '_blank', 'toolbar=no,location=no');
	        //var ref = window.open('http://blrbrspadev.azurewebsites.net', '_blank', 'toolbar=no,location=no');

		// //ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
		// ref.addEventListener('loadstart', function(event) {
			// //alert('stop: ' + event.url);
// 
			// if (event.url.indexOf('Blrb/Create') != -1) {
				// ref.close();
// 
				// window.location = "create.html?" + event.url.split('?')[1];
			// }
// 		
		// });
		// ref.addEventListener('loaderror', function(event) {
			// alert('error: ' + event.message);
		// });
		// ref.addEventListener('exit', function(event) {
		// });

		// StatusBar.hide();
		// navigator.splashscreen.hide();
	},
	// Update DOM on a Received Event
	receivedEvent : function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};

var login=function() {
					var ref = window.open('http://blrbrdev.azurewebsites.net/blrb/me', '_blank', 'toolbar=no,location=no');
	  							ref.addEventListener('loadstart', function(event) {
	  							
			if (event.url.indexOf('Blrb/Create') != -1) {
				ref.close();
			window.location = "create.html?" + event.url.split('?')[1];
			}
		
var segs=event.url.split("/");
	if (segs[3] == "") {
				ref.close();
				window.location = "index.html";
			}
	
		
		});
		ref.addEventListener('loaderror', function(event) {
			alert('error: ' + event.message);
		});
		ref.addEventListener('exit', function(event) {
		});

	  				};

var channel=function() {
					var ref = window.open('http://blrbrdev.azurewebsites.net/firstblrbever', '_blank', 'toolbar=no,location=no');
	  					ref.addEventListener('loadstart', function(event) {
			alert('stop: ' + event.url);
alert(event.url.split("/").length);

alert(segs[3]);

			if (event.url.indexOf('Blrb/Create') != -1) {
				ref.close();

				window.location = "create.html?" + event.url.split('?')[1];
			}
		
var segs=event.url.split("/");
	if (segs[3] == "") {
				ref.close();

				window.location = "index.html";
			}
	
		
		});
		ref.addEventListener('loaderror', function(event) {
			alert('error: ' + event.message);
		});
		ref.addEventListener('exit', function(event) {
		});

	  				};
