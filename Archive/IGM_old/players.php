<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>&quot;Stuffed&quot; Comedy Players</title>
<link href="Styles/general.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<!--
.playerList{
	margin:0px;
	padding:2px;
}
.playerList li{	/* General layout article in list */
	list-style-type:none;
	cursor:pointer;
	background-image: url(media/graphics/bcap.gif);
	height: 100px;
	width: 100px;
	margin-top: 5px;
	line-height: 100px;
	vertical-align: middle;
	background-repeat: no-repeat;
	overflow: hidden;
	color: #000000;
}
.playerList li a{
	color: #000000;	
}
#contentContainer {
	margin: 5px;
	padding: 5px;
}
.bottle {
	border-top-style: none;
	border-right-style: none;
	border-bottom-style: none;
	border-left-style: none;
	float: right;
}
-->
</style>
<!--[if lt IE 7.]>
<script defer type="text/javascript" src="scripts/pngfix.js"></script>
<![endif]-->
<script type="text/javascript" src="scripts/ajax.js"></script>

<script type="text/javascript">
/************************************************************************************************************
(C) www.dhtmlgoodies.com, October 2005

This is a script from www.dhtmlgoodies.com. You will find this and a lot of other scripts at our website.	

Terms of use:
You are free to use this script as long as the copyright message is kept intact. However, you may not
redistribute, sell or repost it without our permission.

Thank you!

www.dhtmlgoodies.com
Alf Magne Kalleland

************************************************************************************************************/
var ajax = new sack();
var playerListObj;
var activePlayer = false;
var clickedPlayer = false;
var contentObj	// Reference to player content <div>

function showContent()	// Displaying content in the content <div>
{
	contentObj.innerHTML = ajax.response;	// ajax.response is a variable that contains the content of the external file	
}

function showWaitMessage()
{
	contentObj.innerHTML = 'Finding player.....<br>Please wait';
}
function getAjaxFile(fileName)
{
	ajax.requestFile = fileName;	// Specifying which file to get
	ajax.onCompletion = showContent;	// Specify function that will be executed after file has been found
	ajax.onLoading = showWaitMessage;	// Action when AJAX is loading the file
	ajax.runAJAX();		// Execute AJAX function	
}

function selectPlayer()	// User have clicked on an player
{
	getAjaxFile('players/' + this.id + '.htm');	// Calling the getAjasFile function. argument to the function is id of this <li> + '.htm', example "player1.htm"
	this.className='playerClick';
	clickedPlayer = this;
}


function initAjaxDemo()
{
	playerListObj = document.getElementById('playerList');
	var players = playerListObj.getElementsByTagName('LI');
	for(var no=0;no<players.length;no++){
		players[no].onclick = selectPlayer;
	}	
	
	contentObj = document.getElementById('contentContainer');
}
window.onload = initAjaxDemo;
</script>

</head>

<body>
<div align="center">
<div id="stuff">
<div id="main">
<div align="center"><img src="media/graphics/players.gif" alt="&quot;Stuffed&quot; Comedy Players" width="500" height="193" /></div>
    <div id="contentContainer">
      <div align="center"><img src="media/graphics/6pack.gif" alt="Stuffed 6-pack" width="425" height="464" /></div>
    </div>
</div>
<div id="sidebar">
  <a href="/"><img src="media/graphics/minifridge.gif" alt="home" width="100" height="188" border="0" /></a>
<ul id="playerList" class="playerList">
	<li id="sharon">Sharon</li>
	<li id="ian">Ian</li>
	<li id="percy">Percy</li>
	<li id="kiley">Kiley</li>
    <li id="austin">Austin</li>
    <li id="paige">Paige</li>
	<li id="guests">Guests</li>
</ul>
</div>

<?php readfile('footer.php'); ?>
</div>
</div>
</body>
</html>