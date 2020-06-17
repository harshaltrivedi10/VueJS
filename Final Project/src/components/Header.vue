<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light nav-fill">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          class="nav-item"
          tag="li"
          to="/portfolio"
          activeClass="active"
        >
          <a class="nav-link">
            Portfolio
          </a>
        </router-link>

        <router-link
          class="nav-item"
          tag="li"
          to="/stocks"
          activeClass="active"
        >
          <a class="nav-link">
            Stocks
          </a>
        </router-link>
      </ul>
      <ul class="navbar-nav navbar-right">
        <li class="nav-item"><a href="" class="nav-link">End Day</a></li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
