import React from 'react'
import Headerleft from './Headerleft'
import './Main.css'
import Image from './Image'
import Date from './Date'
import Continue from './Continue'
import Artical from './Artical'
import PostName from './PostName'
import WidgetTitle from './WidgetTitle'
import Widgetbody from './Widgetbody'

const Main = () => {
  return (
    <div class="container container-flex">
    <main role="main">
    <article class="article-featured">
      <br/>
    <Date/>
      <br/>
    <Headerleft/>
      <br/>
    <Image/>
    <Artical/>
    <br/>
    <Continue/>
    </article> 
     <article class="article-recent">
    <div class="article-recent-main">
    <Headerleft/>
    <Artical/>
    <Continue/>
    </div>
    <div class="article-recent-secondary">
    <img src="img/food.jpg" alt="two dumplings on a wood plate with chopsticks" class="article-image"/>
    <br/>
    <Date/>
    </div> 
    </article>
    <br/><br/>
    
    <article class="article-recent">
      <div class="article-recent-main">
        <Headerleft/>
        <Artical/>
        <Continue/>
      </div>
      <div class="article-recent-secondary">
        <img src="img/work.jpg" alt="a chair white chair at a white desk on a white wall" class="article-image"/>
        <br/>
        <Date/>
      </div>
    </article>
    <br/><br/>

    <article class="article-recent">
      <div class="article-recent-main">
        <Headerleft/>
        <Artical/>
        <Continue/>
      </div>
      <div class="article-recent-secondary">
        <img src="img/deco.jpg" alt="a green plant in a clear, round vase with water in it" class="article-image"/>
        <br/>
        <Date/>
      </div>
    </article>
    <br/><br/>
    </main>
    <aside class="sidebar">
    <div class="sidebar-widget">
    <WidgetTitle/>
    <img src="img/about-me.jpg" alt="john doe" class="widget-image"/>
    <Widgetbody/>
     </div>
     <div class="sidebar-widget">
     <WidgetTitle/>
     <div class="widget-recent-post">
     <PostName/>
      <img src="img/food.jpg" alt="two dumplings on a wood plate with chopsticks" class="widget-image"/>
      </div>
      <div class="widget-recent-post">
     <PostName/>
     <img src="img/work.jpg" alt="a chair white chair at a white desk on a white wall" class="widget-image"/>
      </div>
      <div class="widget-recent-post">
     <PostName/>
     <img src="img/deco.jpg" alt="a green plant in a clear, round vase with water in it" class="widget-image"/>
      </div>
      </div>
      </aside>
    </div>
  )
}

export default Main