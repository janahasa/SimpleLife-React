import React from 'react'
import './Nav.css'


const Nav = () => {
  return (
    <nav class="nav">
    <ul class="nav-ul">
        <li><a href="index.html" class="current-page">Home</a></li>
        <li><a href="about-me.html">About Me</a></li>
        <li><a href="recent-posts.html">Recent Posts</a></li>
    </ul>
</nav>
  )
}

export default Nav