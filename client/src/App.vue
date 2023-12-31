<template>
  <nav>
    <Navbar :title="title" :bg="navbar_bg" :text="navbar_text"/>
  </nav>
  <main>
    fdsafsdafda
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ab dolore dignissimos sunt quod, fugit sed, quos quisquam nobis iste eveniet explicabo magni possimus et reiciendis soluta laborum veritatis! Sequi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi illum, inventore itaque est sapiente praesentium vero accusamus ducimus adipisci rerum et, repudiandae odit. A at eligendi id ut cumque.ç
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos quod facere odio. Harum mollitia tempore, quae iusto ut quo vero ea odio sequi commodi hic pariatur officiis quaerat dolores?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, blanditiis, repudiandae culpa mollitia saepe obcaecati cupiditate aut, dolorum voluptatibus rerum itaque pariatur recusandae est vel sapiente expedita odio. Unde, architecto.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ea odio ut quia sunt modi libero voluptatibus aliquid magnam sapiente magni, cum eum quasi eos veritatis impedit? Dicta, veritatis odit.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam labore, consequatur voluptas laudantium repellat fugit minima quam facere repudiandae eveniet odio ut at fuga quaerat placeat iste similique aliquam ducimus.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore aliquam ducimus eligendi voluptatibus maxime, beatae rem iure! Eaque laborum, quae esse porro assumenda tempore, iure modi ratione blanditiis sint fugiat?
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aliquid a voluptas ad, suscipit quam sit provident omnis dolorum dolore ratione aperiam quisquam atque eum autem fugit cum labore quaerat.
    Lorem ipsum dolor sit amet consectetur adip
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem voluptate numquam consequuntur placeat repellat dolorem commodi quis eaque perspiciatis minus corrupti facilis nulla tempore, natus obcaecati maiores recusandae fuga id.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae hic ipsa, fugiat nesciunt excepturi dignissimos eos, id harum blanditiis, laboriosam ipsum amet pariatur sit dolorum modi magni accusamus magnam debitis?
  </main>

</template>

<script>
  import Navbar from "./components/Navbar.vue";

  export default {
    components: {
      Navbar
    },
    data() {
      return {
        title: "Contacts App",
        navbar_bg: "var(--bg-100)",
        navbar_text: "var(--text-100)"
      };
    }
  };

</script>

<style scoped>
  main {
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-200);
    color: var(--text-100);
    padding-right: 20rem;
    padding-left: 20rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 25px;
  }
  p {
    margin: 0;
  }
</style>
