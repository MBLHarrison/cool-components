import { storiesOf } from "@storybook/vue"
import CoolText from './CoolText'

storiesOf('CoolText', module).add('It is a cool text', () => ({
    components: { CoolText },
    template: `<CoolText :text="text"> </CoolText>`,
    data: () => ({ text: "hello" })

}))