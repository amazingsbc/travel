<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    >
    </city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
import { reactive, onMounted, ref } from 'vue'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  setup() {
    const { handleLetterChange , letter } = useLetterLogic()
    const { cities, hotCities} = useCityLogic()
    return { cities, hotCities, handleLetterChange , letter }
  }
}

  function useLetterLogic(){
    const letter = ref('')
    function handleLetterChange(selected){
      letter.value = selected
    }
    return { handleLetterChange , letter }
  }

  function useCityLogic() {
    const cities = ref({})
    const hotCities = ref([])
    async function getCityInfo() {
      let res = await axios.get('/api/city.json')
      res = res.data
      if (res.ret && res.data) {
        const result = res.data
        cities.value = result.cities
        hotCities.value = result.hotCities
      }
    }
    onMounted(()=>{ getCityInfo() })
    return { cities, hotCities}
  }
</script>
<style lang="stylus" scoped></style>
