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
var menuOpen = false;
var menuDiv;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.splashscreen.hide();
    menuDiv = document.getElementById("menu");
    document.addEventListener("menubutton", onMenu, false);
}

function onMenu() {
    if(menuOpen) {
        menuDiv.style.display = "none";
        menuOpen = false;
    }
    else {
        menuDiv.style.display = "block";
        menuOpen = true;
    }
}

window.onload = function() {

    console.log("ready");
    var teller = 1;

    document.getElementById('top').onclick = function () {
        document.getElementById('lblTeller').innerHTML = teller;
        teller++;
    };

    document.getElementById('btnReset').onclick = function () {
        document.getElementById('lblTeller').innerHTML = 0;
        teller = 1;
    };
}