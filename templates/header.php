<header id="main-header" class="banner navbar navbar-default navbar-static-top" role="banner">
  <div class="container">
    <div class="row">
      <div class="col-md-6 headerMatch">
        <!-- LOGO -->
        <div id="logo"><a href="<?php echo esc_url(home_url('/')); ?>/"><img src="http://placehold.it/720x200/149cd7/149cd7" /></a></div>
      </div>
      <div class="col-md-6 headerMatch">
        <!-- MASTHEAD -->
        <div id="masthead-container">
          <div id="masthead">
            <!-- SOCIAL MEDIA
            <div class="socialmedia">
              <a href="" target="_blank" ><img src="img/icons/facebook.png" /></a>
              <a href="" target="_blank" ><img src="img/icons/twitter.png" /></a>
              <a href="" target="_blank" ><img src="img/icons/youtube.png" /></a>
              <a href="" target="_blank" ><img src="img/icons/instagram.png" /></a>
            </div>
            -->
            <!-- CALL TO ACTION -->
            <div class="call"><h1>Lorem ipsum 1800123123</h1><p>Consectetur adipiscing elit</p></div>
            
          </div>
        </div>
      </div>
    </div>
  </div>


  <nav id="main-nav">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!-- NAVIGATION -->
            <div class="navbar navbar-default" role="navigation">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="navbar-collapse collapse">
                 <?php
                  if (has_nav_menu('primary_navigation')) :
                    wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav nav-justified'));
                  endif;
                ?>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>    
</header>