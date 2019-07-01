<template>
  <div class="container">
    <nav>
      <ul class="nav nav-justified">
        <!-- Replace Tag with your resource name -->
        <li class="active"><router-link :to="{ name: 'TagList' }" class="active">Tags</router-link></li>
      </ul>
    </nav>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>