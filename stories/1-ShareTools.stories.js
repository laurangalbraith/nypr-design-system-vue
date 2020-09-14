import ShareTools from '../src/components/ShareTools'
import ShareToolsItem from '../src/components/ShareToolsItem'

export default {
  title: 'Share Tools',
  component: ShareTools
}

export const WithLabel = () => ({
  components: { ShareTools, ShareToolsItem },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <share-tools label="Connect">
        <share-tools-item service="facebook" username="WNYC" />
        <share-tools-item service="twitter" username="WNYC" />
        <share-tools-item service="instagram" username="WNYC" />
        <share-tools-item service="youtube" username="UCbysmY4hyViQAAYEzOR-uCQ" />
      </share-tools>
    </div>
  `
})

export const WithoutLabel = () => ({
  components: { ShareTools, ShareToolsItem },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <share-tools>
        <share-tools-item service="facebook" username="WNYC" />
        <share-tools-item service="twitter" username="WNYC" />
        <share-tools-item service="instagram" username="WNYC" />
        <share-tools-item service="youtube" username="UCbysmY4hyViQAAYEzOR-uCQ" />
      </share-tools>
    </div>
  `
})
