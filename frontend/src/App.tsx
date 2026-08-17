import './App.css'
import styles from './slider.module.css'
import { Slider } from '@ark-ui/react/slider'
 
function App() {
  return (
      <Slider.Root className={styles.Root} defaultValue={[40]} max={50}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Slider.Label className={styles.Label}>Label</Slider.Label>
        <Slider.ValueText className={styles.ValueText} />
      </div>
      <Slider.Control className={styles.Control}>
        <Slider.Track className={styles.Track}>
          <Slider.Range className={styles.Range} />
        </Slider.Track>
        <Slider.Thumb index={0} className={styles.Thumb}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
      <Slider.MarkerGroup className={styles.MarkerGroup}>
        {[0, 10, 20, 45].map((value) => (
          <Slider.Marker className={styles.Marker} value={value}>
        {value}
      </Slider.Marker>
        ))}
      
      </Slider.MarkerGroup>
    </Slider.Root>
  )
}
 
export default App