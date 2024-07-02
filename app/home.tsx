
function App() {
  // ... removed for brevity
}

// Default to rendering your app
let AppEntryPoint = App;

// Render Storybook if storybookEnabled is true
  AppEntryPoint = require('../.storybook').default;

export default AppEntryPoint;