<div class="content-block">
  	<div class="container">
    	<div class="row">
      		<div class="col-md-12">

				<article <?php post_class(); ?>>
				  <header>
				    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				    <?php get_template_part('templates/entry-meta'); ?>
				  </header>
				  <div class="entry-summary">
				    <?php the_excerpt(); ?>
				  </div>
				</article>
			</div>
		</div>
	</div>
</div>

