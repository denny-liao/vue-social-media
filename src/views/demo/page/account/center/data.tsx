export interface ListItem {
  title?: string
  icon: string
  color?: string
}

export interface TabItem {
  key: string
  name?: string
  component: string
}

export const tags: string = 'intro.tags'

export const hobbies = 'intro.hobbies'
export const hobbiesStyle: ListItem[] = [
  {
    icon: 'emojione-monotone:letter-a',
    color: '#55d187',
  },
  {
    icon: 'solar:pen-bold',
    color: '#7c51b8',
  },
  {
    icon: 'icon-park-outline:muscle',
    color: 'orange',
  },
  {
    icon: 'fluent-emoji:water-wave',
    color: '#00adf7',
  },
  {
    icon: 'logos:adobe-animate',
    color: '#7c51b8',
  },
  {
    icon: 'material-symbols:menu-book-outline',
    color: '#916cd9',
  },
  {
    icon: 'material-symbols:music-note',
    color: '#c5d14d',
  },
  {
    icon: 'material-symbols:mic',
    color: '#4b38da',
  },
  {
    icon: 'material-symbols:mindfulness-outline',
    color: '#ff4000',
  },
]

export const details = 'intro.details'
export const detailsStyle: ListItem[] = [
  {
    icon: 'ic:outline-contacts',
  },
  {
    icon: 'grommet-icons:cluster',
  },
  {
    icon: 'bx:bx-home-circle',
  },
]

export const achieveList = 'intro.achieveList'
export const achieveInfoList: TabItem[] = [
  {
    key: '1',
    component: 'Article',
  },
  {
    key: '2',
    component: 'Project',
  },
  // {
  //   key: '3',
  //   name: '關於',
  //   component: 'Application',
  // },
]

export const actions: any[] = [
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
]

export const projectList = 'intro.projectList'
export const projectUrlList: any[] = [
  {
    url: 'https://smeeth.in/',
    imgUrl: 'https://smeeth.in/smeethicon_144.png',
  },
  {
    url: 'https://github.com/Denny-Zhang/vue-social-media',
    imgUrl: 'https://github.com/fluidicon.png',
  },
]

export const eventList = 'intro.eventList'
export const eventUrlList: any[] = [
  {
    // inception
    url: 'https://www.youtube.com/watch?v=cMZI2pZdkyE',
    imgUrl: 'events/inception.png',
  },
  {
    // Guess Number
    url: 'https://www.youtube.com/watch?v=PTce18GU3QM',
    imgUrl: 'events/guessNumber.png',
  },
  {
    // Gift Package
    url: 'https://www.youtube.com/watch?v=JYc7Fzh1ahI',
    imgUrl: 'events/giftPackage.png',
  },
  {
    // Running Hamster
    url: 'https://www.youtube.com/watch?v=VwivMv38e2Q',
    imgUrl: 'events/runningHamster.png',
  },
  {
    // Moon Festival
    url: 'https://www.youtube.com/watch?v=bnhLQhHWeXU',
    imgUrl: 'events/moonFestival.png',
  },
  {
    // Ghost Appearances
    url: 'https://www.youtube.com/watch?v=duf8bjwHL7k',
    imgUrl: 'events/ghostAppearances.png',
  },
  {
    // Win Heart Now
    url: 'https://www.youtube.com/watch?v=rZWxYqp7shI',
    imgUrl: 'events/winHeartNow.png',
  },
]

export const aboutThisProject = (() => {
  const result: any[] = []
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Denny Admin',
      icon: 'emojione-monotone:letter-a',
      color: '#1890ff',
      active: '100',
      new: '1,799',
      download: 'bx:bx-download',
    })
  }
  return result
})()
