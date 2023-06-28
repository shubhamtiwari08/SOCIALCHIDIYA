import React from 'react'
import './loading.css'

function Loading() {
  return (
<main>
	<div class="preloader">
		<div class="preloader__square"></div>
		<div class="preloader__square"></div>
		<div class="preloader__square"></div>
		<div class="preloader__square"></div>
	</div>
	<div class="status">Loading<span class="status__dot">.</span><span class="status__dot">.</span><span class="status__dot">.</span></div>
</main>  
  )
}

export default Loading
