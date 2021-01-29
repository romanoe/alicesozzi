
<!-- Style -->
<style>
.menu {
  text-align: center;
  width : 100%;
  background-color: rgb(152, 227, 213, 0.5);
  height: 44px;
  line-height: 44px;
  font-weight: bold;
  font-size: medium;
}

.menu a {
  text-decoration: none;
  color: #C7287D;
  padding-right: 20px;
  padding-left: 20px;
  z-index: 1
}



</style>


<template>

<div class="menu">
    <NuxtLink to="/traitements">LES TRAITEMENTS</NuxtLink>

    <NuxtLink to="/fascia">QU'EST-CE QU'UN FASCIA ?</NuxtLink>

    <NuxtLink to="/mon-parcours">MON PARCOURS</NuxtLink>

    <NuxtLink to="/info-tarifs">INFORMATIONS ET TARIFS</NuxtLink>

    <NuxtLink to="/contact">CONTACT</NuxtLink>
</div>

</template>

<!-- Script -->
<script>
export default {};
</script>
