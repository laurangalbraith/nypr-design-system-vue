<template>
  <header class="c-main-header">
    <div
      id="header-inner"
      class="c-main-header__inner "
    >
      <div class="c-main-header__left _u-truncate--flex">
        <div
          class="c-main-header__branding"
          name="logo"
        >
          <slot name="logo" />
        </div>
      </div>
      <nav class="c-primary-nav">
        <slot name="navigation" />
      </nav>
      <h2
        v-if="title"
        class="main-player-title"
        data-test-element="show-title"
      >
        {{ title }}
      </h2>
      <div class="c-main-header__right">
        <slot name="social" />
        <v-button
          v-if="donateUrl"
          class="c-main-header__donate"
          label="Donate"
          :href="donateUrl"
          target="_blank"
          rel="noopener"
          data-category="Click Tracking"
          data-action="Header"
          data-label="Donate Button"
        />
        <div class="search">
          <slot name="search" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import VButton from '../components/VButton'

export default {
  name: 'TheHeader',
  components: { VButton },
  props: {
    donateUrl: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
$z-index-header: 5000;

.c-main-header {
  text-align: center;
  position: relative;
  z-index: $z-index-header;
  @include typeface(header, 5);
  background: RGB(var(--color-background-muted));
}

.c-main-header svg {
  fill: RGB(var(--color-text));
  height: 52px;
}

.c-secondary-nav__link {
  color: var(--color-black);
  text-decoration: none;
  font-size: var(--font-size-4);
  font-family: var(--font-family-body);

}

.c-secondary-nav__link:hover {
  color: var(--color-black);
  text-decoration: none;
  opacity: var(--opacity-link-hover);
}

.c-main-header a svg {
  fill: RGB(var(--color-navigation-link));
}

.c-main-header a:hover svg {
  fill: RGBA(var(--color-navigation-link-hover), var(--opacity-navigation-link-hover));
}

.c-main-header__inner {
  background-color: RGB(var(--color-background));
  padding: var(--space-2) var(--space-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--heading-height);
  position: relative;
}

.c-main-header__branding {
  flex-shrink: 0; /* prevent from shrinking in flex container*/
  width: 120px;

  @include media(">xsmall") {
    width: 150px;
  }
}

.c-main-header__left {
  display: flex;
  align-items: flex-end;
}

.c-main-header .c-secondary-nav__list {
  display: none;
  @include media(">large") {
    display: block;
  }
}

.c-main-header .c-secondary-nav__list .c-secondary-nav__item {
  margin-bottom: 0;
}

.c-main-header__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
}

.c-main-header__donate {
  @include media("<=medium") {
    font-size: var(--font-size-3);
    padding-left: var(--space-3);
    padding-right: var(--space-3);
  }
}

.c-main-header__donate.button {
  font-size: var(--font-size-5);
}

.search {
  margin: var(--space-2) 0 var(--space-2) var(--space-2);
  width: 40%;
  height: 40%;
}

</style>
