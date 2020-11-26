import { storiesOf } from "@storybook/vue"
import CoolText from './index'

storiesOf('CoolText', module).add('It is a cool text', () => ({
    components: { CoolText },
    template: `<CoolText :text="text"> </CoolText>`,
    data: () => ({ text: "hello" })

}))