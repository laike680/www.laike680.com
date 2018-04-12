$(function(){

var headHtml=`<nav id="tf-menu" class="navbar navbar-default navbar-fixed-top">
			  <div class="container">

				<div class="navbar-header">
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				  </button>
				  <a class="navbar-brand" href="http://www.laike680.com">Laike</a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				  <ul class="nav navbar-nav navbar-right">
					<li><a href="http://laike680.com" class="page-scroll">Home</a></li>
					<li><a href="#tf-about" class="page-scroll">About</a></li>
					<li><a href="#tf-books" class="page-scroll">Books</a></li>
					<li><a href="#tf-services" class="page-scroll">life</a></li>
					<li><a href="#tf-works" class="page-scroll">Method</a></li>
					<li><a href="#tf-testimonials" class="page-scroll">talks</a></li>
					<li><a href="#tf-contact" class="page-scroll">link</a></li>
				  </ul>
				</div>
			  </div>
			</nav>`




var footHtml=`<div class="container">
				<div class="pull-left fnav">
					<p>Copyright © 2018-2019 laike, All Rights Reserved. 备案号:蜀ICP备18009159号。<a href="http://www.beian.gov.cn/portal/registerSystemInfo" target="_blank">公安机关</a></p>
						</div>
						<div class="pull-right fnav">
							<ul class="footer-social">
								<li><a target="_blank" href="https://weibo.com/p/1005051563894902/home?from=page_100505&mod=TAB#place"><i class="fa fa-facebook"></i></a></li>
								<li><a target="_blank" href="https://pan.baidu.com/disk/home?#/all?path=%2F&vmode=list"><i class="fa fa-dribbble"></i></a></li>
								<li><a target="_blank" href="https://wanwang.aliyun.com/hosting/free?spm=5176.10695662.812927.3.7f5972dcwjRc4H"><i class="fa fa-google-plus"></i></a></li>
							</ul>
						</div>
					</div>
				`;


$("#header").html(headHtml);
$("#footer").html(footHtml);


})