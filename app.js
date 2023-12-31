const app = Vue.createApp({
  data() {
    return {
      newLight: '',
      title: 'Smart Lighting Prototype Application',
      errorMsg: '',
      initialLights: [
        {
          id: 1,
          icon: 'fa-solid fa-lightbulb-slash',
          isSelected: false,
          brightnessPct: 0,
        },
        {
          id: 2,
          icon: 'fa-solid fa-lightbulb-slash',
          isSelected: false,
          brightnessPct: 0,
        },
        {
          id: 3,
          icon: 'fa-solid fa-lightbulb-slash',
          isSelected: false,
          brightnessPct: 0,
        },
        {
          id: 4,
          icon: 'fa-solid fa-lightbulb-slash',
          isSelected: false,
          brightnessPct: 0,
        },
        {
          id: 5,
          icon: 'fa-solid fa-lightbulb-slash',
          isSelected: false,
          brightnessPct: 0,
        },
        {
          id: 6,
          icon: 'fa-solid fa-lightbulb-slash',
          isSelected: false,
          brightnessPct: 0,
        },
        {
          id: 7,
          icon: 'fa-solid fa-lightbulb-slash',
          isSelected: false,
          brightnessPct: 0,
        },
        {
          id: 8,
          icon: 'fa-solid fa-lightbulb-slash',
          isSelected: false,
          brightnessPct: 0,
        },
        {
          id: 9,
          icon: 'fa-solid fa-lightbulb-slash',
          isSelected: false,
          brightnessPct: 0,
        },
        {
          id: 10,
          icon: 'fa-solid fa-lightbulb-slash',
          isSelected: false,
          brightnessPct: 0,
        },
      ],
      lights: [],
    }
  },
  mounted() {
    this.lights = this.initialLights.map((t) => ({ ...t }))
  },
  methods: {
    toggleSelected(e, val) {
      this.newLight = ''
      this.errorMsg = ''
      this.lights[val].icon =
        this.lights[val].icon === 'fa-solid fa-lightbulb'
          ? 'fa-solid fa-lightbulb-slash'
          : 'fa-solid fa-lightbulb'
      this.lights[val].isSelected = !this.lights[val].isSelected
    },
    addLights() {
      this.newLight = ''
      this.errorMsg = ''
      const lights = [...this.lights, ...this.initialLights.map((t) => ({ ...t }))]
      this.lights = lights
    },
    offLight() {
      const lightNum = this.newLight - 1
      this.errorMsg = ''
      if (this.lights[lightNum] && !this.lights[lightNum].isSelected) {
        this.errorMsg = 'Light already off'
      } else if (lightNum >= 0 && lightNum < this.lights.length) {
        this.lights[lightNum].icon = 'fa-solid fa-lightbulb-slash'
        this.lights[lightNum].isSelected = false
        this.newLight = ''
      } else {
        this.errorMsg = 'Invalid light selection'
        this.newLight = ''
      }
    },
    allOn() {
      this.errorMsg = ''
      this.newLight = ''
      this.lights = this.lights.map(() => ({
        icon: 'fa-solid fa-lightbulb',
        isSelected: true,
      }))
    },
    allOff() {
      this.errorMsg = ''
      this.newLight = ''
      this.lights = this.lights.map(() => ({
        icon: 'fa-solid fa-lightbulb-slash',
        isSelected: false,
      }))
    },
    submit() {
      const lightNum = this.newLight - 1
      this.errorMsg = ''
      if (this.lights[lightNum] && this.lights[lightNum].isSelected) {
        this.errorMsg = 'Light already on'
      } else if (lightNum >= 0 && lightNum < this.lights.length) {
        this.lights[lightNum].icon = 'fa-solid fa-lightbulb'
        this.lights[lightNum].isSelected = true
        this.newLight = ''
      } else {
        this.errorMsg = 'Invalid light selection'
        this.newLight = ''
      }
    },
  },
})

app.mount('#app')
