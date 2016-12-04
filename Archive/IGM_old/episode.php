<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Show Notes: Episode XYZ</title>
<link href="Styles/general.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<!--
.ep {
	background-color: #C6FA29;
	border: 2px solid #009900;
	margin-top: 25px;
	margin-left: 10px;
	padding: 5px;
}
.epinfo {
	background-color: #009900;
	padding: 5px;
	float: left;
	text-align: right;
	clear: left;
	color: #C6FA29;
	overflow: visible;
	position: static;
}
.group {
	margin-top: 15px;
	margin-left: 15px;
}
.ep img {
	float: right;
	border: 2px solid #009900;
	position: relative;
	clear: right;
	top: -7px;
	right: -7px;
}
.ep a {
	color: #006600;
}
.rec {
	margin-right: 15px;
	margin-left: 15px;
	padding-left: 15px;
}
.rec ul {
	list-style-type: none;
	margin-top: 0px;
	margin-bottom: 0px;
	text-indent: -10px;
}
.rec li {
	margin-top: 0px;
	margin-bottom: 0px;
}
h1 {
	font-size: x-large;
	font-weight: normal;
	margin-top: 0px;
	margin-bottom: 10px;
}
h2 {
	font-size: large;
	font-weight: normal;
	margin-top: 10px;
	margin-bottom: 5px;
}
-->
</style>
<!--[if lt IE 7.]>
<script defer type="text/javascript" src="scripts/pngfix.js"></script>
<![endif]-->
<SCRIPT LANGUAGE="JavaScript">
function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=1,menubar=1,resizable=1,width=575,height=350');");
}
</SCRIPT>
</head>

<body>
	<div align="center">
		<div id="stuff">
			<div id="main">
			<div class="group">
				<div class="epinfo">
					#XYZ
					<br />
					airdate
				</div>
				<div class="ep">
					<h1>Name</h1>
			        <p>description</p>
					<strong>Cooked</strong>:
					<p class="rec">
			  			<img src="media/recipes/picfile" alt="name" />
			  			<h2>name</h2>
			  			Ingredients:
			  			<ul>
							<li>item</li>
							<li>item</li>
							<li>item</li>
						</ul>
			  			Directions:
			  			<br />...
					</p>
					<p><strong>Music</strong>:
						<ul>
							<li><a href="#">artist - &quot;song&quot;</a></li>
							<li><a href="#">artist - &quot;song&quot;</a></li>
							<li><a href="#">artist - &quot;song&quot;</a></li>
						</ul>
					</p>
			    </div>
			</div>
			</div>
			<div id="sidebar">
				<a href="index.php"><img src="media/graphics/minifridge.gif" alt="home" width="100" height="188" border="0" /></a>
			</div>
			<div id="footer">
			<?php readfile('footer.php'); ?>
			</div>
		</div>
	</div>
</body>
</html>