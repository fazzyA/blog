import Button from './Button'


export default {
    title: 'Demo/Button',
    component: Button,
}
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Small = () => <Button size="small">Small</Button>
export const Medium = () => <Button size="medium">Medium</Button>
export const Large = () => <Button size="large">Large</Button>
