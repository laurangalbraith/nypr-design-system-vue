import StreamSwitcher from '../../../src/components/StreamSwitcher'
import StreamSwitcherCard from '../../../src/components/StreamSwitcherCard'

export default {
  title: 'Components/Organisms/Stream Switcher'
}

export const Horizontal = () => ({
  components: {
    StreamSwitcher,
    StreamSwitcherCard
  },
  template: `
    <stream-switcher>
    <stream-switcher-card
      image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png"
      station="WNYC 93.9 FM"
      showTitle="BBC World Service"
      upNext="WNYC’s Special Convention Coverage 2020"
      time="in 99 mins"
      :active="true"
      :playing="true"
    />
    <stream-switcher-card
      station="WNYC 93.9 FM"
      showTitle="The Takeaway"
      image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png"
      upNext="All Things Considered"
      time="in 15 min"
    />
    <stream-switcher-card
      image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png"
      station="WNYC 93.9 FM"
      showTitle="BBC World Service"
      upNext="WNYC’s Special Convention Coverage 2020"
      time="in 99 mins"
    />
    </stream-switcher>
  `
})

export const Vertical = () => ({
  components: {
    StreamSwitcher,
    StreamSwitcherCard
  },
  template: `
    <stream-switcher orientation="vertical">
    <stream-switcher-card
      image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png"
      station="WNYC 93.9 FM"
      showTitle="BBC World Service"
      upNext="WNYC’s Special Convention Coverage 2020"
      time="in 99 mins"
      :active="true"
      :playing="true"
    />
    <stream-switcher-card
      station="WNYC 93.9 FM"
      showTitle="The Takeaway"
      image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png"
      upNext="All Things Considered"
      time="in 15 min"
    />
    <stream-switcher-card
      image="https://media.wnyc.org/i/1400/1400/l/80/1/TheTakeway_Square_NoWNYCStudios.png"
      station="WNYC 93.9 FM"
      showTitle="BBC World Service"
      upNext="WNYC’s Special Convention Coverage 2020"
      time="in 99 mins"
    />
    </stream-switcher>
  `
})