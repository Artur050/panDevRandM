<script>
  import { useI18n } from 'vue-i18n';

  export default {
    name: 'App',
    setup() {
      const {t, locale} = useI18n({useScope: 'global'})
      return {t, locale};
    },
    methods: {
      switchLang () {
        this.locale = this.locale === 'en' ? 'ru' : 'en';
        localStorage.setItem('lang', this.locale)

      }
    }
  };
</script>

<template>
  <div id="app">
    <nav className=" fixed w-[100%] bg-slate-500 text-[20px] text-yellow-200 flex gap-3 p-3 mb-2 justify-center items-center ">
      <router-link className="hover:text-yellow-200/65" to="/">{{t('links.characters')}}</router-link>
      <router-link className="hover:text-yellow-200/65" to="/episodes">{{t('links.episodes')}}</router-link>
      <router-link className="hover:text-yellow-200/65" to="/locations">{{t('links.locations')}}</router-link>
      <span @click="switchLang">{{t('switchLang')}}</span>
    </nav>
    <router-view />
  </div>
</template>
